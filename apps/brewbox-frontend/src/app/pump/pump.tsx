import React, { useEffect, useState } from 'react';

export enum PumpMode {
  On = 'ON',
  Off = 'OFF',
}
/* eslint-disable-next-line */
export interface PumpProps {
  Title: string;
  PumpOn: boolean;
  PumpMode: PumpMode;
  onPumpModeChang: (mode: PumpMode) => void;
  subscribeToPumpUpdates: any;
}

const pumpOff = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    width="100"
    height="100"
    viewBox="0 0 128 160"
  >
    <path d="M56.94 44.047c4.08 0 7.401 3.32 7.401 7.402v5.184h12.407v-5.184c0-10.923-8.888-19.811-19.808-19.811h-6.186v-6.515a4.653 4.653 0 00-4.651-4.654h-.516v-7h-5.706v7h-.517a4.655 4.655 0 00-4.653 4.654v6.515H25.66v-4.342h-6.026v21.096h6.026v-4.345h31.28zM29.151 12.066a4.03 4.03 0 003.657-2.35h6.271a4.027 4.027 0 003.655 2.35 4.025 4.025 0 003.656-2.35h6.272a4.028 4.028 0 003.655 2.35 4.033 4.033 0 000-8.066 4.027 4.027 0 00-3.654 2.35h-6.274A4.027 4.027 0 0042.733 4a4.026 4.026 0 00-3.654 2.35h-6.273a4.027 4.027 0 00-7.689 1.684 4.034 4.034 0 004.034 4.032zM82.479 101.513c2.214-1.758 5.071-2.559 8.144-1.001 2.767 1.4 5.735-1.65 4.771-4.345-1.074-3.002-5.734-3.344-8.317-2.285-2.589 1.062-4.474 2.868-5.577 5.212-1.636 3.471-2.244 7.105-2.38 7.742 1.349-3.494 2.475-4.622 3.359-5.323zM54.013 93.882c-2.584-1.059-7.244-.717-8.319 2.285-.965 2.694 2.005 5.745 4.773 4.345 3.07-1.558 5.931-.757 8.143 1.001.886.701 2.013 1.829 3.362 5.323-.135-.637-.744-4.271-2.382-7.742-1.104-2.344-2.988-4.151-5.577-5.212z"></path>
  </svg>
);
const pumpOn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    width="100"
    height="100"
    viewBox="0 0 128 160"
    color="red"
  >
    <path d="M56.94 44.047c4.08 0 7.401 3.32 7.401 7.402v5.184h12.407v-5.184c0-10.923-8.888-19.811-19.808-19.811h-6.186v-6.515a4.653 4.653 0 00-4.651-4.654h-.516v-7h-5.706v7h-.517a4.655 4.655 0 00-4.653 4.654v6.515H25.66v-4.342h-6.026v21.096h6.026v-4.345h31.28zM29.151 12.066a4.03 4.03 0 003.657-2.35h6.271a4.027 4.027 0 003.655 2.35 4.025 4.025 0 003.656-2.35h6.272a4.028 4.028 0 003.655 2.35 4.033 4.033 0 000-8.066 4.027 4.027 0 00-3.654 2.35h-6.274A4.027 4.027 0 0042.733 4a4.026 4.026 0 00-3.654 2.35h-6.273a4.027 4.027 0 00-7.689 1.684 4.034 4.034 0 004.034 4.032zM82.479 101.513c2.214-1.758 5.071-2.559 8.144-1.001 2.767 1.4 5.735-1.65 4.771-4.345-1.074-3.002-5.734-3.344-8.317-2.285-2.589 1.062-4.474 2.868-5.577 5.212-1.636 3.471-2.244 7.105-2.38 7.742 1.349-3.494 2.475-4.622 3.359-5.323zM54.013 93.882c-2.584-1.059-7.244-.717-8.319 2.285-.965 2.694 2.005 5.745 4.773 4.345 3.07-1.558 5.931-.757 8.143 1.001.886.701 2.013 1.829 3.362 5.323-.135-.637-.744-4.271-2.382-7.742-1.104-2.344-2.988-4.151-5.577-5.212z"></path>
    <path d="M74.129 111.204V60.96h-7.168v50.244c-19.209.307-34.239 3.046-34.239 6.384 0 3.541 16.933 6.412 37.823 6.412 20.888 0 37.821-2.871 37.821-6.412 0-3.338-15.032-6.077-34.237-6.384z"></path>
  </svg>
);

export function Pump(props: PumpProps) {
  const [pumpMode, setPumpMode] = useState(props.PumpMode || PumpMode.Off);
  useEffect(() => props.subscribeToPumpUpdates(), []);
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800 overflow-hidden rounded-lg bg-white dark:bg-gray-600 shadow">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-bold leading-6 dark:text-white text-gray-900">
          {props.Title || 'A Vessel'}
        </h3>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:grid sm:grid-cols-10">
          <div className="sm:col-span-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 36 45"
            >
              <g data-name="Слой 4">
                <path d="M30.3 8.24h-3.39V5.7h3.39a.85.85 0 000-1.7H15a.85.85 0 000 1.7h3.39v2.54H15a.84.84 0 00-.84.85v3h-1.68v-3a.84.84 0 00-.84-.85h-3.4a.86.86 0 00-.53.19 9.41 9.41 0 00-3.18 4.69H4a2.55 2.55 0 00-2.55 2.55v.42A2.55 2.55 0 004 18.63h.53a9.43 9.43 0 003.18 4.7.84.84 0 00.53.19h3.4a.84.84 0 00.84-.85v-3h1.71v3a.84.84 0 00.84.85H30.3a4.26 4.26 0 004.25-4.25v-6.79a4.26 4.26 0 00-4.25-4.24zM14.19 18h-1.71v-4.25h1.71zm9.33-12.3h1.7v2.54h-1.7zm-3.4 0h1.69v2.54h-1.69zM30.3 20.12H18.42a.85.85 0 010-1.7H30.3a.85.85 0 010 1.7zm0-3.39H18.42a.85.85 0 010-1.7H30.3a.85.85 0 110 1.7zm0-3.4H18.42a.85.85 0 010-1.69H30.3a.85.85 0 110 1.69zM31.15 25.22H7.39a3.39 3.39 0 000 6.78h23.76a3.39 3.39 0 100-6.78zM8.24 29.45a.84.84 0 01-.85-.84.85.85 0 011.7 0 .84.84 0 01-.85.84zm3.4 0a.85.85 0 110-1.69.84.84 0 01.84.85.83.83 0 01-.84.84zm18.66 0a.84.84 0 01-.85-.84.85.85 0 011.7 0 .84.84 0 01-.85.84z"></path>
              </g>
            </svg>
          </div>
          <div className="sm:col-span-7">
            <div className="sm:grid sm:grid-cols-10 sm:items-start sm:gap-4 sm:py-6">
              <div className="mt-2 sm:col-span-6 sm:mt-0 text-left">
                Pump Status
              </div>
              <div className="mt-2 sm:col-span-4 sm:mt-0 text-center">
                <div>{props.PumpOn ? pumpOn : pumpOff}</div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-10  sm:items-start sm:gap-4 sm:py-6">
              <div className="sm:col-span-6 mt-2 sm:mt-0 text-left sm:pt-0 pt-2">
                Pump Mode
              </div>
              <div className="sm:col-span-4 mt-2 sm:mt-0 h-10">
                <button
                  onClick={() => {
                    props.onPumpModeChang(PumpMode.On);
                    setPumpMode(PumpMode.On);
                  }}
                  type="button"
                  className={[
                    'relative',
                    'inline-flex',
                    'items-center',
                    'rounded-l-md',
                    'px-3',
                    'py-2',
                    'text-sm',
                    'font-semibold',
                    'ring-1',
                    'ring-inset',
                    'focus:z-10',
                  ]
                    .concat(
                      pumpMode === PumpMode.On
                        ? ['bg-gray-900', 'text-white', 'ring-gray-30']
                        : [
                            'bg-white',
                            'text-gray-900',
                            'ring-gray-300',
                            'hover:bg-gray-50',
                          ],
                    )
                    .join(' ')}
                >
                  On
                </button>

                <button
                  type="button"
                  onClick={() => {
                    props.onPumpModeChang(PumpMode.Off);
                    setPumpMode(PumpMode.Off);
                  }}
                  className={[
                    'relative',
                    '-ml-px',
                    'inline-flex',
                    'items-center',
                    'rounded-r-md',
                    'px-3',
                    'py-2',
                    'text-sm',
                    'font-semibold',
                    'ring-1',
                    'ring-inset',
                    'focus:z-10',
                  ]
                    .concat(
                      pumpMode === PumpMode.Off
                        ? ['bg-gray-900', 'text-white', 'ring-gray-30']
                        : [
                            'bg-white',
                            'text-gray-900',
                            'ring-gray-300',
                            'hover:bg-gray-50',
                          ],
                    )
                    .join(' ')}
                >
                  Off
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pump;
