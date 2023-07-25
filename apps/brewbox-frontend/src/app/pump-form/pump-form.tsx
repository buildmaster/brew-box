import { useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_TEMP_PROBES } from '../queries/temp-probe-queries';
import {
  CREATE_OR_UPDATE_PUMP,
  GET_PUMP,
  GET_ALL_PUMPS,
} from '../queries/pump-queries';
/* eslint-disable-next-line */
export interface PumpFormProps {
  pump: {
    id?: number;
    name: string;
    pinOut?: number | null;
  };
}

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export function EditPumpForm() {
  const params = useParams();
  const { error, loading, data } = useQuery(GET_PUMP, {
    variables: {
      id: Number.parseInt(params.id || ''),
    },
  });
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error {error.message}</div>;
  }
  if (!data?.pump) {
    return <div> no data</div>;
  }
  const pump = {
    id: data.pump.id,
    name: data.pump.name,
    pinOut: data.pump.pinOut,
  };
  return <PumpForm pump={pump} />;
}

export function NewPumpForm() {
  const pump = {
    name: '',
  };
  return <PumpForm pump={pump} />;
}

export function PumpForm(props: PumpFormProps) {
  const [pump, setPump] = useState({
    name: props.pump.name,
    pinOut: props.pump.pinOut,
    id: props.pump.id,
  });
  const navigate = useNavigate();
  const [updatePump] = useMutation(CREATE_OR_UPDATE_PUMP);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          updatePump({
            variables: {
              createOrUpdatePumpInput: pump,
            },
            refetchQueries: [GET_ALL_PUMPS],
          })
            .then(({ data }) => {
              navigate('/pumps');
            })
            .catch((err) => {
              console.log({ err });
            });
        }}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 dark:border-white/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Pump Details
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400"></p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Pump Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm dark:bg-white/5 dark:shadow-none ring-1 ring-inset ring-gray-300 dark:ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 dark:focus-within:ring-indigo-500 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="HLT"
                      value={pump.name || ''}
                      onChange={(change) => {
                        setPump(
                          Object.assign({}, pump, {
                            name: change.target.value,
                          }),
                        );
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="pinOut"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Pin
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm dark:bg-white/5 dark:shadow-none ring-1 ring-inset ring-gray-300 dark:ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 dark:focus-within:ring-indigo-500">
                    <input
                      type="number"
                      name="pinOut"
                      id="pinOut"
                      autoComplete="pinOut"
                      className="block flex-1 col-span-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="eg 1"
                      value={pump.pinOut || ''}
                      onChange={(change) => {
                        let valueToSet: number | null = null;
                        if (
                          change.target.value &&
                          change.target.value.length > 0
                        ) {
                          valueToSet = Number.parseInt(change.target.value);
                          if (valueToSet < 1) {
                            valueToSet = null;
                          } else if (valueToSet > 40) {
                            valueToSet = 40;
                          }
                        }
                        console.log({ valueToSet });
                        setPump(
                          Object.assign({}, pump, {
                            pinOut: valueToSet,
                          }),
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            onClick={() => {
              navigate('/pumps');
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default PumpForm;
