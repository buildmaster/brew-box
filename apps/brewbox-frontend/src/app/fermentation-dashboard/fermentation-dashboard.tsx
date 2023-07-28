import styles from './fermentation-dashboard.module.css';
import { Fragment, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  GET_FERMENTATION,
  SUBSCRIBE_TO_FERMENTATION_UPDATES,
} from '../queries/fermentation-querires';
import { useQuery } from '@apollo/client';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
/* eslint-disable-next-line */
export interface FermentationDashboardProps {}

export function FermentationDashboard(props: FermentationDashboardProps) {
  const { subscribeToMore, loading, error, data } = useQuery(GET_FERMENTATION);
  useEffect(() =>
    subscribeToMore({
      document: SUBSCRIBE_TO_FERMENTATION_UPDATES,
      updateQuery: (_, { subscriptionData }) => {
        return {
          fermentation: subscriptionData.data.fermentationReading,
        };
      },
    }),
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="divide-y divide-gray-200 dark:divide-gray-800 overflow-hidden rounded-lg bg-white dark:bg-gray-600 shadow">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-bold leading-6 dark:text-white text-gray-900">
            Fermentation Reading
          </h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:grid sm:grid-cols-10">
            Temperature: {data?.fermentation.tempC.toFixed(4)}
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:grid sm:grid-cols-10">
            Gravity: {data?.fermentation.gravity.toFixed(6)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FermentationDashboard;
