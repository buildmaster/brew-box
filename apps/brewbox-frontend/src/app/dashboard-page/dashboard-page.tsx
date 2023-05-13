// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ApplicationSidebar from '../application-sidebar/application-sidebar';
import { GET_ALL_VESSELS } from '../queries/vessel-queries';
import { SUBSCRIBE_TO_TEMPERATURE_UPDATES } from '../queries/temp-probe-queries';
import Vessel, { BurnerMode } from '../vessel/vessel';
import { useQuery, useSubscription } from '@apollo/client';
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

  if (vesselsLoading) return <div>Loading...</div>;
  if (vesselsError) return <div>{`Error! ${vesselsError.message}`}</div>;
  subscribeToMore({
    document: SUBSCRIBE_TO_TEMPERATURE_UPDATES,
    variables: {},
    updateQuery: (prev, { subscriptionData }) => {
      const newTempReading = subscriptionData.data.newTemperatureReading;
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
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-10">
        {vesselsData?.vessels.map((vessel, id) => {
          return (
            <div key={`vessel-container-${id}`} className="col-span-5">
              <Vessel
                key={`vessel-${id}`}
                Title={vessel.name}
                BurnerLit={false}
                BurnerMode={BurnerMode.Auto}
                Temperature={vessel.lastTemperature || 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
