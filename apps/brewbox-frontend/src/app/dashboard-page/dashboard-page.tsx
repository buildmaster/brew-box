// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ApplicationSidebar from '../application-sidebar/application-sidebar';
import {
  CREATE_OR_UPDATE_VESSEL,
  GET_ALL_VESSELS,
  UPDATE_BURNER_MODE,
  UPDATE_SETPOINT,
  SUBSCRIBE_TO_BURNER_CHANGE,
} from '../queries/vessel-queries';
import { SUBSCRIBE_TO_TEMPERATURE_UPDATES } from '../queries/temp-probe-queries';
import Vessel, { BurnerMode } from '../vessel/vessel';
import { useQuery, useMutation } from '@apollo/client';
import {
  Vessel as VesselType,
  VesselsQuery,
} from '../../__generated__/graphql';

export function DashboardPage() {
  const {
    subscribeToMore,
    loading: vesselsLoading,
    error: vesselsError,
    data: vesselsData,
  } = useQuery(GET_ALL_VESSELS);
  const [updateVessel] = useMutation(CREATE_OR_UPDATE_VESSEL);
  const [updateSetpointTemp] = useMutation(UPDATE_SETPOINT);
  const [updateBurnerMode] = useMutation(UPDATE_BURNER_MODE);
  if (vesselsLoading) return <div>Loading...</div>;
  if (vesselsError) return <div>{`Error! ${vesselsError.message}`}</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-10">
        {vesselsData?.vessels.map((vessel, id) => {
          return (
            <div key={`vessel-container-${id}`} className="col-span-5">
              <Vessel
                key={`vessel-${id}`}
                Title={vessel.name}
                BurnerLit={vessel.burnerLit}
                BurnerMode={vessel.burnerMode}
                Temperature={vessel.lastTemperature || 0}
                SetpointTemperature={vessel.setpointTemperature}
                subscribeToBurnerUpdates={() => {
                  subscribeToMore({
                    document: SUBSCRIBE_TO_BURNER_CHANGE,
                    variables: {
                      id: vessel.id,
                    },
                    updateQuery: (prev, { subscriptionData }) => {
                      const burnerLit =
                        subscriptionData.data.burnerChange.burnerLit;
                      const newVessels = {
                        vessels: prev.vessels.map((v) => {
                          if (v.id === vessel.id) {
                            return Object.assign({} as VesselType, v, {
                              burnerLit: burnerLit,
                            } as VesselType);
                          } else {
                            return v;
                          }
                        }),
                      };
                      return newVessels;
                    },
                  });
                }}
                onBurnerModeChange={(burnerMode: BurnerMode) => {
                  updateBurnerMode({
                    variables: {
                      id: vessel.id,
                      burnerMode,
                    },
                  });
                }}
                onSetPointTemperatureChange={(setPointNumber) => {
                  if (setPointNumber > 100) {
                    setPointNumber = 100;
                  }
                  if (setPointNumber < 0) {
                    setPointNumber = 0;
                  }
                  updateSetpointTemp({
                    variables: {
                      id: vessel.id,
                      temp: setPointNumber,
                    },
                  });
                }}
                subscribeToNewTemperatures={() => {
                  if (vessel.probe) {
                    subscribeToMore({
                      document: SUBSCRIBE_TO_TEMPERATURE_UPDATES,
                      variables: {
                        serialNumber: vessel.probe,
                      },
                      updateQuery: (prev, { subscriptionData }) => {
                        const newTempReading =
                          subscriptionData.data.newTemperatureReading;
                        const newVessels = {
                          vessels: prev.vessels.map((v) => {
                            if (v.probe === newTempReading.serialNumber) {
                              return Object.assign({} as VesselType, v, {
                                lastTemperature: newTempReading.temperature,
                              } as VesselType);
                            } else {
                              return v;
                            }
                          }),
                        };

                        console.log({
                          newVessels,
                          newData: subscriptionData.data.newTemperatureReading,
                        });
                        return newVessels;
                      },
                    });
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
