import { useEffect, useState } from 'react';

export enum BurnerMode {
  On = 'ON',
  Off = 'OFF',
  Auto = 'AUTO',
}

export interface VesselProps {
  /**
   * The title of the Vessel
   * @defaultValue `A Vessel`
   */
  Title?: string;
  /**
   * The vessel Temperature in °C
   */
  Temperature?: number;
  /**
   * The vessel target temperature in °C
   */
  SetpointTemperature?: number;
  /**
   * Is the burner lit for this vessel
   */
  BurnerLit: boolean;
  /**
   * The mode of the burner
   */
  BurnerMode: BurnerMode;
  subscribeToNewTemperatures: any;
  onSetPointTemperatureChange: (setPointTemperature: number) => void;
  subscribeToBurnerUpdates: any;
  onBurnerModeChange: (burnerMode: BurnerMode) => void;
}

const burnerOff = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
    />
  </svg>
);
const burnerOn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 fill-red-500"
  >
    <path
      fillRule="evenodd"
      d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
      clipRule="evenodd"
    />
  </svg>
);
/**
 * Represents a Brewing Vessel
 */
export function Vessel(props: VesselProps) {
  const [setpointTemperature, setSetpointTemperature] = useState(
    props.SetpointTemperature || 0,
  );
  const [burnerMode, setBurnerMode] = useState(props.BurnerMode || 'Off');
  useEffect(() => props.subscribeToNewTemperatures(), []);
  useEffect(() => props.subscribeToBurnerUpdates(), []);
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
              className="fill-gray-600 dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 700 700"
            >
              <defs>
                <symbol id="a" overflow="visible">
                  <path d="M18.766-1.125c-.969.5-1.98.875-3.031 1.125-1.043.258-2.137.39-3.281.39-3.399 0-6.09-.945-8.079-2.843-1.992-1.906-2.984-4.485-2.984-7.735 0-3.257.992-5.835 2.984-7.734 1.989-1.906 4.68-2.86 8.079-2.86 1.144 0 2.238.133 3.28.391 1.052.25 2.063.625 3.032 1.125v4.219c-.98-.656-1.945-1.14-2.89-1.453a9.532 9.532 0 0 0-3-.469c-1.876 0-3.352.606-4.423 1.813-1.074 1.199-1.609 2.855-1.609 4.968 0 2.106.535 3.762 1.61 4.97C9.523-4.02 11-3.423 12.874-3.423c1.051 0 2.051-.148 3-.453.946-.312 1.91-.8 2.891-1.469z" />
                </symbol>
                <symbol id="b" overflow="visible">
                  <path d="M13.734-11.141a6.765 6.765 0 0 0-1.297-.438 5.346 5.346 0 0 0-1.265-.156c-1.262 0-2.231.406-2.907 1.219-.68.805-1.015 1.953-1.015 3.453V0H2.36v-15.312h4.89v2.515c.625-1 1.344-1.726 2.156-2.187.82-.469 1.8-.703 2.937-.703.164 0 .344.011.532.03.195.013.476.04.843.079z" />
                </symbol>
                <symbol id="c" overflow="visible">
                  <path d="M17.641-7.703v1.406H6.188c.125 1.148.54 2.008 1.25 2.578.707.574 1.703.86 2.984.86a11.52 11.52 0 0 0 3.157-.454 16.707 16.707 0 0 0 3.328-1.39v3.765a20.629 20.629 0 0 1-3.47.985A18.006 18.006 0 0 1 9.97.39C7.196.39 5.04-.313 3.5-1.72 1.97-3.125 1.203-5.098 1.203-7.64c0-2.5.754-4.46 2.266-5.89 1.508-1.438 3.582-2.157 6.219-2.157 2.406 0 4.332.731 5.781 2.188 1.445 1.45 2.172 3.383 2.172 5.797zM12.61-9.328c0-.926-.274-1.672-.813-2.234-.543-.57-1.25-.86-2.125-.86-.949 0-1.719.266-2.312.797s-.965 1.297-1.11 2.297z" />
                </symbol>
                <symbol id="d" overflow="visible">
                  <path d="M9.219-6.89c-1.024 0-1.793.171-2.313.515-.511.344-.765.855-.765 1.531 0 .625.207 1.117.625 1.469.414.344.988.516 1.718.516.926 0 1.704-.328 2.329-.985.632-.664.953-1.492.953-2.484v-.563zm7.469-1.844V0h-4.922v-2.266c-.657.93-1.399 1.606-2.22 2.032-.823.414-1.823.625-3 .625-1.585 0-2.87-.457-3.859-1.375-.992-.926-1.484-2.13-1.484-3.61 0-1.789.613-3.101 1.844-3.937 1.238-.844 3.18-1.266 5.828-1.266h2.89v-.39c0-.77-.308-1.333-.921-1.688-.617-.363-1.57-.547-2.86-.547-1.054 0-2.03.106-2.937.313-.899.21-1.73.523-2.5.937v-3.734c1.039-.25 2.086-.442 3.14-.578a25.68 25.68 0 0 1 3.188-.204c2.758 0 4.75.547 5.969 1.641 1.226 1.086 1.844 2.856 1.844 5.313z" />
                </symbol>
                <symbol id="e" overflow="visible">
                  <path d="M7.703-19.656v4.344h5.047v3.5H7.703v6.5c0 .71.14 1.187.422 1.437s.836.375 1.672.375h2.515V0H8.125C6.187 0 4.812-.398 4-1.203c-.805-.812-1.203-2.18-1.203-4.11v-6.5H.375v-3.5h2.422v-4.343z" />
                </symbol>
                <symbol id="f" overflow="visible">
                  <path d="M12.766-13.078v-8.203h4.922v21.28h-4.922v-2.218c-.668.906-1.406 1.57-2.219 1.985S8.79.39 7.72.39c-1.887 0-3.434-.75-4.64-2.25-1.211-1.5-1.813-3.426-1.813-5.782 0-2.363.602-4.297 1.812-5.797 1.207-1.5 2.754-2.25 4.641-2.25 1.063 0 2 .215 2.813.641.82.43 1.566 1.086 2.234 1.969zM9.547-3.156c1.04 0 1.836-.379 2.39-1.14.552-.77.829-1.883.829-3.344 0-1.457-.277-2.567-.828-3.329-.555-.77-1.352-1.156-2.39-1.156-1.044 0-1.84.387-2.391 1.156-.555.762-.829 1.872-.829 3.329 0 1.46.274 2.574.829 3.343.55.762 1.347 1.14 2.39 1.14z" />
                </symbol>
                <symbol id="g" overflow="visible">
                  <path d="M10.5-3.156c1.05 0 1.852-.38 2.406-1.14.551-.77.828-1.884.828-3.345 0-1.457-.277-2.566-.828-3.328-.554-.77-1.355-1.156-2.406-1.156-1.055 0-1.86.387-2.422 1.156-.555.774-.828 1.883-.828 3.328 0 1.45.273 2.559.828 3.329.563.773 1.367 1.156 2.422 1.156zm-3.25-9.922c.676-.883 1.422-1.54 2.234-1.969.82-.426 1.766-.64 2.829-.64 1.894 0 3.445.75 4.656 2.25 1.207 1.5 1.812 3.433 1.812 5.796 0 2.356-.605 4.282-1.812 5.782C15.758-.36 14.207.39 12.312.39 11.25.39 10.305.18 9.484-.234 8.672-.66 7.926-1.32 7.25-2.22V0H2.36v-21.281h4.89z" />
                </symbol>
                <symbol id="h" overflow="visible">
                  <path d="M.344-15.312h4.89L9.36-4.921l3.5-10.391h4.89L11.313 1.454c-.648 1.695-1.402 2.883-2.265 3.562-.867.688-2 1.032-3.406 1.032H2.797v-3.22h1.531c.832 0 1.438-.136 1.813-.405.382-.262.68-.73.89-1.407l.14-.421z" />
                </symbol>
                <symbol id="i" overflow="visible">
                  <path d="M2.578-20.406h6.688l4.656 10.922 4.672-10.922h6.687V0h-4.984v-14.938L15.594-3.922h-3.328L7.562-14.938V0H2.578z" />
                </symbol>
                <symbol id="j" overflow="visible">
                  <path d="M2.36-21.281h4.89v11.594l5.625-5.625h5.688l-7.47 7.031L19.157 0H13.22l-5.97-6.39V0H2.36z" />
                </symbol>
                <symbol id="k" overflow="visible">
                  <path d="M9.64-12.188c-1.085 0-1.914.39-2.484 1.172-.574.781-.86 1.906-.86 3.375s.286 2.594.86 3.375c.57.773 1.399 1.156 2.485 1.156 1.062 0 1.875-.383 2.437-1.156.57-.781.86-1.906.86-3.375s-.29-2.594-.86-3.375c-.562-.781-1.375-1.172-2.437-1.172zm0-3.5c2.633 0 4.692.715 6.172 2.14 1.477 1.419 2.22 3.387 2.22 5.907 0 2.512-.743 4.48-2.22 5.906C14.333-.317 12.274.39 9.642.39c-2.649 0-4.715-.707-6.203-2.125-1.493-1.426-2.235-3.394-2.235-5.906 0-2.52.742-4.488 2.235-5.906 1.488-1.426 3.554-2.141 6.203-2.141z" />
                </symbol>
                <symbol id="l" overflow="visible">
                  <path d="M17.75-9.328V0h-4.922v-7.14c0-1.32-.031-2.235-.094-2.735s-.168-.867-.312-1.11a1.994 1.994 0 0 0-.781-.734 2.295 2.295 0 0 0-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-15.311h4.89v2.234c.738-.883 1.52-1.539 2.344-1.969.832-.425 1.75-.64 2.75-.64 1.77 0 3.113.547 4.031 1.64.914 1.086 1.375 2.657 1.375 4.72z" />
                </symbol>
                <symbol id="m" overflow="visible">
                  <path d="M12.422-21.281v3.219H9.719c-.688 0-1.172.125-1.453.375-.274.25-.406.687-.406 1.312v1.063h4.187v3.5H7.86V0H2.969v-11.812H.531v-3.5H2.97v-1.063c0-1.664.46-2.898 1.39-3.703.926-.8 2.368-1.203 4.329-1.203z" />
                </symbol>
                <symbol id="n" overflow="visible">
                  <path d="M16.547-12.766c.613-.945 1.348-1.672 2.203-2.172.852-.5 1.79-.75 2.813-.75 1.757 0 3.097.547 4.015 1.64.926 1.087 1.39 2.657 1.39 4.72V0h-4.921v-8.345c.008-.132.016-.32.016-.562 0-1.082-.165-1.863-.485-2.343-.312-.489-.824-.735-1.531-.735-.93 0-1.648.387-2.156 1.156-.512.762-.774 1.868-.782 3.313v7.515h-4.921v-7.984c0-1.695-.149-2.785-.438-3.266-.293-.488-.812-.734-1.562-.734-.938 0-1.665.387-2.172 1.156-.512.762-.766 1.86-.766 3.297V0H2.328v-15.312H7.25v2.235c.602-.864 1.29-1.516 2.063-1.953a5.186 5.186 0 0 1 2.578-.657c1.062 0 2 .258 2.812.766.813.512 1.426 1.23 1.844 2.156z" />
                </symbol>
                <symbol id="o" overflow="visible">
                  <path d="M17.75-9.328V0h-4.922v-7.11c0-1.343-.031-2.265-.094-2.765s-.168-.867-.312-1.11a1.994 1.994 0 0 0-.781-.734 2.295 2.295 0 0 0-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-21.28h4.89v8.203c.738-.883 1.52-1.54 2.344-1.969.832-.426 1.75-.64 2.75-.64 1.77 0 3.113.546 4.031 1.64.914 1.086 1.375 2.656 1.375 4.719z" />
                </symbol>
                <symbol id="p" overflow="visible">
                  <path d="M2.578-20.406h5.875l7.422 14v-14h4.984V0h-5.875L7.563-14V0H2.578z" />
                </symbol>
                <symbol id="q" overflow="visible">
                  <path d="M2.188-5.969v-9.344h4.921v1.532c0 .836-.007 1.875-.015 3.125-.012 1.25-.016 2.086-.016 2.5 0 1.242.031 2.132.094 2.672.07.542.18.933.328 1.171.207.325.473.575.797.75.32.168.691.25 1.11.25 1.019 0 1.82-.39 2.406-1.171.582-.782.875-1.868.875-3.266v-7.563h4.89V0h-4.89v-2.218c-.743.898-1.524 1.558-2.344 1.984C9.519.179 8.609.39 7.609.39c-1.761 0-3.105-.54-4.03-1.625-.93-1.082-1.391-2.66-1.391-4.734z" />
                </symbol>
                <symbol id="r" overflow="visible">
                  <path d="M2.578-20.406h8.735c2.593 0 4.581.578 5.968 1.734 1.395 1.149 2.094 2.79 2.094 4.922 0 2.137-.7 3.782-2.094 4.938-1.386 1.156-3.375 1.734-5.968 1.734H7.828V0h-5.25zm5.25 3.813v5.703h2.922c1.02 0 1.805-.25 2.36-.75.562-.5.843-1.203.843-2.11 0-.914-.281-1.617-.844-2.11-.554-.487-1.34-.734-2.359-.734z" />
                </symbol>
                <symbol id="s" overflow="visible">
                  <path d="M2.36-15.312h4.89V-.281c0 2.05-.496 3.617-1.484 4.703-.98 1.082-2.407 1.625-4.282 1.625H-.937V2.828h.859c.926 0 1.562-.21 1.906-.625.352-.418.531-1.246.531-2.484zm0-5.969h4.89v4H2.36z" />
                </symbol>
                <symbol id="t" overflow="visible">
                  <path d="M14.719-14.828v3.984a7.612 7.612 0 0 0-2-1.015 6.629 6.629 0 0 0-2.078-.328c-1.367 0-2.434.402-3.203 1.203-.762.793-1.14 1.906-1.14 3.344 0 1.43.378 2.543 1.14 3.343.77.793 1.836 1.188 3.203 1.188.758 0 1.484-.11 2.172-.328a6.412 6.412 0 0 0 1.906-1.016v4c-.762.281-1.54.488-2.328.625a13.04 13.04 0 0 1-2.375.219C7.254.39 5.094-.316 3.53-1.734 1.977-3.148 1.203-5.117 1.203-7.64c0-2.531.774-4.504 2.328-5.922 1.563-1.414 3.723-2.125 6.485-2.125.8 0 1.594.074 2.375.219.781.136 1.555.351 2.328.64z" />
                </symbol>
              </defs>
              <path d="M517.72 108.86h-6.047c-2.238-5.375-5.879-10.359-10.527-14.953l5.434-14.113c.785-2.07.726-4.367-.168-6.441-.895-2.016-2.574-3.641-4.649-4.426l-79.355-30.57c-4.312-1.68-9.183.504-10.863 4.816l-5.543 14.391c-11.03-1.566-22.457-2.742-33.992-3.36v-5.6c0-3.864-3.136-6.946-6.945-6.946h-30.07c-3.863 0-6.945 3.137-6.945 6.945v5.266c-7.055.281-14 .785-20.945 1.457l.004-7.055c0-9.742-7.895-17.64-17.641-17.64h-52.473c-9.743 0-17.641 7.894-17.641 17.64V76.44c-18.145 8.512-31.36 19.32-36.848 32.426h-.114c-7.726 0-14 6.274-14 14v234.97a14 14 0 0 0 12.711 13.945l48.105 4.535v143.47h8.344v7.618h-8.344v11.199h27.945v-11.2h-8.398v-7.617h8.457v-24.023h85.566c1.457 2.574 4.2 4.313 7.336 4.313s5.879-1.735 7.336-4.313h85.457v24.023h8.344v7.618h-8.344v11.199h27.945v-11.2h-8.399v-7.617h8.457l-.007-143.47 48.273-4.535c7.168-.672 12.71-6.719 12.71-13.945v-234.98c-.167-7.726-6.437-14-14.167-14zm-94.133 210.79c-2.129-.953-4.594.055-5.543 2.184l-14.055 32.648-53.988 5.093-53.984-5.097-14.055-32.648c-.895-2.13-3.414-3.137-5.543-2.184-2.129.895-3.137 3.414-2.184 5.543l4.762 11.09h-48.496l-.004-199.08h273.28v199.08l-82.77.004 4.762-11.09c.95-2.129-.059-4.59-2.184-5.543zm19.207 127.96v19.543h-85.457c-.727-1.344-1.848-2.406-3.137-3.137v-13.215c1.344-.726 2.407-1.847 3.137-3.136h85.457zm-185.75 19.598v-19.543h85.566c.727 1.344 1.848 2.406 3.137 3.137v13.215c-1.344.726-2.406 1.847-3.137 3.136h-85.566zm-37.801-330.01v199.08h-22.961l.004-199.08zm11.203-8.398v-26.711c23.801-11.145 64.793-20.664 116.54-20.664 20.215 0 38.754 1.457 55.328 3.863 3.863 3.695 14.672 12.152 39.199 21.617 23.352 8.96 36.848 10.305 42.727 10.305h.223c1.289 1.96 1.96 3.863 1.96 5.656 0 2.129.504 4.145 1.344 5.938zm193.76-71.738 63.672 24.527-7.168 18.648c-5.543-.559-16.184-2.465-33.098-8.961-16.91-6.496-26.152-12.207-30.574-15.512zm-193.76-8.79c0-3.585 2.91-6.44 6.441-6.44h52.473c3.586 0 6.442 2.91 6.442 6.44v8.231c-24.078 2.969-46.648 8.008-65.406 15.176l-.008-23.406zm-11.203 59.973V128.8h-13.105c.84-1.793 1.398-3.808 1.398-5.937.004-4.48 4.149-9.574 11.707-14.617zm-22.957 236.38h86.352l3.863 8.961-90.215-8.511zm149.52 42.727v48.72c-1.344.726-2.406 1.847-3.137 3.136h-85.625v-60.254zm-88.762 88.258h85.566c.727 1.344 1.848 2.407 3.137 3.137v5.434c-1.344.726-2.406 1.847-3.137 3.136l-85.566-.003zm100.3 11.758c-.727-1.343-1.848-2.406-3.137-3.136v-5.434c1.344-.726 2.407-1.848 3.137-3.137h85.398v11.762l-85.398.004zm85.457-48.16h-85.457c-.727-1.343-1.848-2.406-3.137-3.136v-48.72l88.594-8.343zm-29.289-85.62 3.863-8.961h86.352v.449z" />
              <path d="M388.47 242.31h-76.945c-15.961 0-28.953 12.992-28.953 28.953v28.895c0 15.961 12.992 28.953 28.953 28.953h77c15.961 0 28.953-12.992 28.953-28.953v-28.895c-.055-16.02-12.992-28.953-29.008-28.953zm17.75 57.848c0 9.8-7.953 17.754-17.754 17.754l-76.941-.004c-9.8 0-17.754-7.953-17.754-17.754V271.26c0-9.8 7.953-17.754 17.754-17.754h77c9.8 0 17.754 7.953 17.754 17.754v28.898z" />
            </svg>
          </div>
          <div className="sm:col-span-7">
            <div className="sm:grid sm:grid-cols-10 sm:items-start sm:gap-4 sm:py-6 ">
              <div className="mt-2 sm:col-span-6 sm:mt-0 pt-2 sm:pt-0">
                <label
                  htmlFor="currentTemperature"
                  className="block text-sm font-medium leading-8"
                >
                  Current Temperature
                </label>
              </div>
              <div className="mt-2 sm:col-span-4 sm:mt-0">
                <input
                  type="number"
                  name="currentTemperature"
                  id="currentTemperature"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                  placeholder="0"
                  readOnly={true}
                  value={props.Temperature}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-10 sm:items-start sm:gap-4 sm:py-6">
              <div className="mt-2 sm:col-span-6 sm:mt-0 pt-2 sm:pt-0">
                <label
                  htmlFor="setpointTemperature"
                  className="block text-sm font-medium leading-6"
                >
                  Setpoint Temperature
                </label>
              </div>
              <div className="mt-2 sm:col-span-4 sm:mt-0">
                <input
                  type="number"
                  name="setpointTemperature"
                  id="setpointTemperature"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                  placeholder="0"
                  value={setpointTemperature}
                  onChange={(event) => {
                    const newValue: number = parseFloat(event.target.value);
                    if (newValue < 0 || newValue > 100) {
                      return;
                    }
                    setSetpointTemperature(newValue);
                  }}
                  onBlur={() => {
                    props.onSetPointTemperatureChange(setpointTemperature);
                  }}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-10 sm:items-start sm:gap-4 sm:py-6">
              <div className="mt-2 sm:col-span-6 sm:mt-0 text-left">
                Burner Status
              </div>
              <div className="mt-2 sm:col-span-4 sm:mt-0 text-center">
                <div>{props.BurnerLit ? burnerOn : burnerOff}</div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-10  sm:items-start sm:gap-4 sm:py-6">
              <div className="sm:col-span-6 mt-2 sm:mt-0 text-left sm:pt-0 pt-2">
                Burner Mode
              </div>
              <div className="sm:col-span-4 mt-2 sm:mt-0 h-10">
                <button
                  onClick={() => {
                    props.onBurnerModeChange(BurnerMode.On);
                    setBurnerMode(BurnerMode.On);
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
                      burnerMode === BurnerMode.On
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
                    props.onBurnerModeChange(BurnerMode.Off);
                    setBurnerMode(BurnerMode.Off);
                  }}
                  className={[
                    'relative',
                    '-ml-px',
                    'inline-flex',
                    'items-center',
                    'px-3',
                    'py-2',
                    'text-sm',
                    'font-semibold',
                    ' ring-1',
                    'ring-inset',
                    'focus:z-10',
                  ]
                    .concat(
                      burnerMode === BurnerMode.Off
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
                <button
                  type="button"
                  onClick={() => {
                    props.onBurnerModeChange(BurnerMode.Auto);
                    setBurnerMode(BurnerMode.Auto);
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
                      burnerMode === BurnerMode.Auto
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
                  Auto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vessel;
