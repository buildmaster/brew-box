import { useQuery } from '@apollo/client';
import { GET_ALL_VESSELS_WITH_PROBES } from '../queries/vessel-queries';
import { combineConditionalClassNames } from '../helpers';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface VesselTableProps {}

export function VesselTable(props: VesselTableProps) {
  const { loading, error, data } = useQuery(GET_ALL_VESSELS_WITH_PROBES);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 dark:text-white text-gray-900">
            Vessels
          </h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Here are the vessels setup in the system
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link to="./new">
            <button
              type="button"
              className="block rounded-md dark:bg-indigo-500 bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm dark:hover:bg-indigo-400 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add vessel
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y dark:divide-gray-700 divide-gray-300">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold dark:text-white text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold  dark:text-white text-gray-900"
                    >
                      Temperature Probe
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold  dark:text-white text-gray-900"
                    >
                      Burner
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-gray-700 divide-gray-200 dark:bg-gray-900 bg-white">
                  {data?.vessels.map((vessel) => (
                    <tr key={vessel.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium dark:text-white text-gray-900 sm:pl-6">
                        {vessel.name}
                      </td>
                      <td
                        className={combineConditionalClassNames(
                          data?.hardwareSerialNumbers.some(
                            (sn) => sn === vessel.probe?.serial
                          ) || false
                            ? 'text-gray-500 dark:text-white'
                            : 'text-red-500',
                          'whitespace-nowrap px-3 py-4 text-sm '
                        )}
                      >
                        {vessel.probe?.serial}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-gray-500">
                        {vessel.burner?.pinOut}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link
                          to={`${vessel.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {vessel.name}</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VesselTable;
