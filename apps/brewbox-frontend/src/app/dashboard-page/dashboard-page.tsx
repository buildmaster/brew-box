// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  GET_ALL_VESSELS,
  UPDATE_BURNER_MODE,
  UPDATE_SETPOINT,
  SUBSCRIBE_TO_BURNER_CHANGE,
} from '../queries/vessel-queries';
import { SUBSCRIBE_TO_TEMPERATURE_UPDATES } from '../queries/temp-probe-queries';
import Vessel, { BurnerMode } from '../vessel/vessel';
import { useQuery, useMutation } from '@apollo/client';
import {
  Pump as PumpType,
  Vessel as VesselType,
} from '../../__generated__/graphql';
import {
  GET_ALL_PUMPS,
  UPDATE_PUMP_MODE,
  SUBSCRIBE_TO_PUMP_CHANGE,
} from '../queries/pump-queries';
import Pump, { PumpMode } from '../pump/pump';

export function DashboardPage() {
  const {
    subscribeToMore: subscribeToMoreVesselData,
    loading: vesselsLoading,
    error: vesselsError,
    data: vesselsData,
  } = useQuery(GET_ALL_VESSELS);
  const {
    subscribeToMore: subscribeToMorePumpData,
    loading: pumpsLoading,
    error: pumpsError,
    data: pumpsData,
  } = useQuery(GET_ALL_PUMPS);
  const [updateSetpointTemp] = useMutation(UPDATE_SETPOINT);
  const [updateBurnerMode] = useMutation(UPDATE_BURNER_MODE);
  const [updatePumpMode] = useMutation(UPDATE_PUMP_MODE);
  if (vesselsLoading) return <div>Loading...</div>;
  if (vesselsError) return <div>{`Error! ${vesselsError.message}`}</div>;
  if (pumpsLoading) return <div>Loading...</div>;
  if (pumpsError) return <div>{`Error! ${pumpsError.message}`}</div>;
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
                  subscribeToMoreVesselData({
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
                    subscribeToMoreVesselData({
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

        {pumpsData?.pumps.map((pump, id) => {
          return (
            <div key={`pump-container-${id}`} className="col-span-5">
              <Pump
                key={`pump-${id}`}
                Title={pump.name}
                PumpMode={pump.pumpMode}
                PumpOn={pump.pumpActive}
                onPumpModeChang={(pumpMode: PumpMode) => {
                  updatePumpMode({
                    variables: {
                      id: pump.id,
                      pumpMode,
                    },
                  });
                }}
                subscribeToPumpUpdates={() => {
                  if (pump.pinOut) {
                    subscribeToMorePumpData({
                      document: SUBSCRIBE_TO_PUMP_CHANGE,
                      variables: {
                        id: pump.id,
                      },
                      updateQuery: (prev, { subscriptionData }) => {
                        const newPumpData = subscriptionData.data.pumpChange;
                        const newPumps = {
                          pumps: prev.pumps.map((p) => {
                            if (p.id === newPumpData.id) {
                              return Object.assign({} as PumpType, p, {
                                pumpActive: newPumpData.pumpActive,
                                pumpMode: newPumpData.pumpMode,
                              } as PumpType);
                            } else {
                              return p;
                            }
                          }),
                        };

                        return newPumps;
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
