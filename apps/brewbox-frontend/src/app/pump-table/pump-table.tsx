import { useMutation, useQuery } from '@apollo/client';
import { DELETE_PUMP, GET_ALL_PUMPS } from '../queries/pump-queries';
import { combineConditionalClassNames } from '../helpers';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface PumpTableProps {}

export function PumpTable(props: PumpTableProps) {
  const { loading, error, data } = useQuery(GET_ALL_PUMPS);
  const [deleteMutation] = useMutation(DELETE_PUMP);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 dark:text-white text-gray-900">
            Pumps
          </h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Here are the pumps setup in the system
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link to="./new">
            <button
              type="button"
              className="block rounded-md dark:bg-indigo-500 bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm dark:hover:bg-indigo-400 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add pump
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
                      PinOut
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Delete</span>
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
                  {data?.pumps.map((pump) => (
                    <tr key={pump.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium dark:text-white text-gray-900 sm:pl-6">
                        {pump.name}
                      </td>
                      <td
                        className={
                          'text-gray-500 dark:text-white whitespace-nowrap px-3 py-4 text-sm '
                        }
                      >
                        {pump.pinOut}
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link
                          to={`${pump.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={(ev) => {
                            ev.preventDefault();
                            deleteMutation({
                              variables: {
                                id: pump.id,
                              },
                              refetchQueries: [GET_ALL_PUMPS],
                            });
                          }}
                        >
                          Delete<span className="sr-only">, {pump.name}</span>
                        </Link>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link
                          to={`${pump.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {pump.name}</span>
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

export default PumpTable;
