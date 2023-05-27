import { useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_TEMP_PROBES } from '../queries/temp-probe-queries';
import {
  CREATE_OR_UPDATE_VESSEL,
  GET_VESSEL,
  GET_ALL_VESSELS_WITH_PROBES,
} from '../queries/vessel-queries';
/* eslint-disable-next-line */
export interface VesselFormProps {
  vessel: {
    id?: number;
    name: string;
    probe?: string | null;
    burner?: number | null;
  };
  hardwareSerialNumbers: string[];
}

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export function EditVesselForm() {
  const params = useParams();
  const { error, loading, data } = useQuery(GET_VESSEL, {
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
  if (!data?.vessel) {
    return <div> no data</div>;
  }
  const vessel = {
    id: data.vessel.id,
    name: data.vessel.name,
    burner: data.vessel.burner,
    probe: data.vessel.probe,
  };
  return (
    <VesselForm
      vessel={vessel}
      hardwareSerialNumbers={data?.hardwareSerialNumbers || []}
    />
  );
}

export function NewVesselForm() {
  const { error, loading, data } = useQuery(GET_ALL_TEMP_PROBES);
  if (loading) {
    return <div> loading</div>;
  }
  if (error) {
    return <div>error {error.message}</div>;
  }
  const vessel = {
    name: '',
  };
  return (
    <VesselForm
      vessel={vessel}
      hardwareSerialNumbers={data?.hardwareSerialNumbers || []}
    />
  );
}

export function VesselForm(props: VesselFormProps) {
  const [vessel, setVessel] = useState({
    name: props.vessel.name,
    probe: props.vessel.probe,
    burner: props.vessel.burner,
    id: props.vessel.id,
  });
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [updateVessel] = useMutation(CREATE_OR_UPDATE_VESSEL);
  const filteredProbes =
    query === ''
      ? props.hardwareSerialNumbers
      : props.hardwareSerialNumbers.filter((probe) => {
          return probe.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ vessel });
          updateVessel({
            variables: {
              createOrUpdateVesselInput: vessel,
            },
            refetchQueries: [GET_ALL_VESSELS_WITH_PROBES],
          })
            .then(({ data }) => {
              navigate('/vessels');
            })
            .catch((err) => {
              console.log({ err });
            });
        }}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 dark:border-white/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Vessel Details
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400"></p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Vessel Name
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
                      value={vessel.name || ''}
                      onChange={(change) => {
                        setVessel(
                          Object.assign({}, vessel, {
                            name: change.target.value,
                          })
                        );
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <Combobox
                  as="div"
                  value={vessel.probe || ''}
                  onChange={(value) => {
                    console.log('setting probe serial', { value });
                    setVessel(Object.assign({}, vessel, { probe: value }));
                  }}
                >
                  <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                    Heat Probe
                  </Combobox.Label>

                  <div className="relative mt-2">
                    <Combobox.Input
                      className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => setQuery(event.target.value)}
                      displayValue={(probeSerial: string) => probeSerial}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>

                    {filteredProbes && filteredProbes.length > 0 && (
                      <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredProbes.map((probeSerial) => (
                          <Combobox.Option
                            key={probeSerial}
                            value={probeSerial}
                            className={({ active }) =>
                              classNames(
                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                active
                                  ? 'bg-indigo-600 text-white'
                                  : 'text-gray-900'
                              )
                            }
                          >
                            {({ active, selected }) => (
                              <>
                                <span
                                  className={classNames(
                                    'block truncate',
                                    selected && 'font-semibold'
                                  )}
                                >
                                  {probeSerial}
                                </span>

                                {selected && (
                                  <span
                                    className={classNames(
                                      'absolute inset-y-0 right-0 flex items-center pr-4',
                                      active ? 'text-white' : 'text-indigo-600'
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                )}
                              </>
                            )}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    )}
                  </div>
                </Combobox>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="burnerPin"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Burner Pin
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm dark:bg-white/5 dark:shadow-none ring-1 ring-inset ring-gray-300 dark:ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 dark:focus-within:ring-indigo-500">
                    <input
                      type="number"
                      name="burnerPin"
                      id="burnerPin"
                      autoComplete="burnerPin"
                      className="block flex-1 col-span-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="eg 1"
                      value={vessel.burner || ''}
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
                        setVessel(
                          Object.assign({}, vessel, {
                            burner: valueToSet,
                          })
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
              navigate('/vessels');
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

export default VesselForm;
