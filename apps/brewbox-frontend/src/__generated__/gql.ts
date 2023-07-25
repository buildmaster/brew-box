/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query pumps {\n    pumps {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n": types.PumpsDocument,
    "\n  mutation deletePump($id: Int!) {\n    removePump(id: $id)\n  }\n": types.DeletePumpDocument,
    "\n  mutation createOrUpdatePump(\n    $createOrUpdatePumpInput: CreateOrUpdatePumpInput!\n  ) {\n    createOrUpdatePump(createOrUpdatePumpInput: $createOrUpdatePumpInput) {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n": types.CreateOrUpdatePumpDocument,
    "\n  query getPump($id: Int!) {\n    pump(id: $id) {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n": types.GetPumpDocument,
    "\n  mutation updatePumpMode($id: Int!, $pumpMode: PumpMode!) {\n    updatePumpMode(id: $id, pumpMode: $pumpMode) {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n": types.UpdatePumpModeDocument,
    "\n  subscription subscribeToPumpUpdates($id: Int!) {\n    pumpChange(id: $id) {\n      id\n      pumpActive\n      pumpMode\n    }\n  }\n": types.SubscribeToPumpUpdatesDocument,
    "\n  subscription AllTemperatureUpdates($serialNumber: String!) {\n    newTemperatureReading(serialNumber: $serialNumber) {\n      temperature\n      serialNumber\n    }\n  }\n": types.AllTemperatureUpdatesDocument,
    "\n  query TemperatureProbes {\n    hardwareSerialNumbers\n  }\n": types.TemperatureProbesDocument,
    "\n  query Vessels {\n    vessels {\n      id\n      name\n      lastTemperature\n      probe\n      burner\n      setpointTemperature\n      burnerMode\n      burnerLit\n    }\n  }\n": types.VesselsDocument,
    "\n  query VesselsWithProbes {\n    hardwareSerialNumbers\n\n    vessels {\n      id\n      name\n      lastTemperature\n      probe\n      burner\n      setpointTemperature\n      burnerMode\n      burnerLit\n    }\n  }\n": types.VesselsWithProbesDocument,
    "\n  query Vessel($id: Int!) {\n    hardwareSerialNumbers\n    vessel(id: $id) {\n      name\n      id\n      lastTemperature\n      probe\n      burner\n      setpointTemperature\n      burnerMode\n      burnerLit\n    }\n  }\n": types.VesselDocument,
    "\n  mutation CreateOrUpdateVessel(\n    $createOrUpdateVesselInput: CreateOrUpdateVesselInput!\n  ) {\n    createOrUpdateVessel(\n      createOrUpdateVesselInput: $createOrUpdateVesselInput\n    ) {\n      name\n    }\n  }\n": types.CreateOrUpdateVesselDocument,
    "\n  mutation removeVessel($id: Int!) {\n    removeVessel(id: $id)\n  }\n": types.RemoveVesselDocument,
    "\n  mutation updateSetpoint($id: Int!, $temp: Float!) {\n    updateSetpointTemperature(id: $id, setpoint: $temp)\n  }\n": types.UpdateSetpointDocument,
    "\n  mutation updateBurnerMode($id: Int!, $burnerMode: BurnerMode!) {\n    updateBurnerMode(id: $id, burnerMode: $burnerMode)\n  }\n": types.UpdateBurnerModeDocument,
    "\n  subscription subscribeToBurnerChange($id: Int!) {\n    burnerChange(id: $id) {\n      burnerLit\n      burnerMode\n      id\n    }\n  }\n": types.SubscribeToBurnerChangeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query pumps {\n    pumps {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n"): (typeof documents)["\n  query pumps {\n    pumps {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deletePump($id: Int!) {\n    removePump(id: $id)\n  }\n"): (typeof documents)["\n  mutation deletePump($id: Int!) {\n    removePump(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createOrUpdatePump(\n    $createOrUpdatePumpInput: CreateOrUpdatePumpInput!\n  ) {\n    createOrUpdatePump(createOrUpdatePumpInput: $createOrUpdatePumpInput) {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n"): (typeof documents)["\n  mutation createOrUpdatePump(\n    $createOrUpdatePumpInput: CreateOrUpdatePumpInput!\n  ) {\n    createOrUpdatePump(createOrUpdatePumpInput: $createOrUpdatePumpInput) {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPump($id: Int!) {\n    pump(id: $id) {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n"): (typeof documents)["\n  query getPump($id: Int!) {\n    pump(id: $id) {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updatePumpMode($id: Int!, $pumpMode: PumpMode!) {\n    updatePumpMode(id: $id, pumpMode: $pumpMode) {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n"): (typeof documents)["\n  mutation updatePumpMode($id: Int!, $pumpMode: PumpMode!) {\n    updatePumpMode(id: $id, pumpMode: $pumpMode) {\n      id\n      name\n      pinOut\n      pumpMode\n      pumpActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription subscribeToPumpUpdates($id: Int!) {\n    pumpChange(id: $id) {\n      id\n      pumpActive\n      pumpMode\n    }\n  }\n"): (typeof documents)["\n  subscription subscribeToPumpUpdates($id: Int!) {\n    pumpChange(id: $id) {\n      id\n      pumpActive\n      pumpMode\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription AllTemperatureUpdates($serialNumber: String!) {\n    newTemperatureReading(serialNumber: $serialNumber) {\n      temperature\n      serialNumber\n    }\n  }\n"): (typeof documents)["\n  subscription AllTemperatureUpdates($serialNumber: String!) {\n    newTemperatureReading(serialNumber: $serialNumber) {\n      temperature\n      serialNumber\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TemperatureProbes {\n    hardwareSerialNumbers\n  }\n"): (typeof documents)["\n  query TemperatureProbes {\n    hardwareSerialNumbers\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Vessels {\n    vessels {\n      id\n      name\n      lastTemperature\n      probe\n      burner\n      setpointTemperature\n      burnerMode\n      burnerLit\n    }\n  }\n"): (typeof documents)["\n  query Vessels {\n    vessels {\n      id\n      name\n      lastTemperature\n      probe\n      burner\n      setpointTemperature\n      burnerMode\n      burnerLit\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query VesselsWithProbes {\n    hardwareSerialNumbers\n\n    vessels {\n      id\n      name\n      lastTemperature\n      probe\n      burner\n      setpointTemperature\n      burnerMode\n      burnerLit\n    }\n  }\n"): (typeof documents)["\n  query VesselsWithProbes {\n    hardwareSerialNumbers\n\n    vessels {\n      id\n      name\n      lastTemperature\n      probe\n      burner\n      setpointTemperature\n      burnerMode\n      burnerLit\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Vessel($id: Int!) {\n    hardwareSerialNumbers\n    vessel(id: $id) {\n      name\n      id\n      lastTemperature\n      probe\n      burner\n      setpointTemperature\n      burnerMode\n      burnerLit\n    }\n  }\n"): (typeof documents)["\n  query Vessel($id: Int!) {\n    hardwareSerialNumbers\n    vessel(id: $id) {\n      name\n      id\n      lastTemperature\n      probe\n      burner\n      setpointTemperature\n      burnerMode\n      burnerLit\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateOrUpdateVessel(\n    $createOrUpdateVesselInput: CreateOrUpdateVesselInput!\n  ) {\n    createOrUpdateVessel(\n      createOrUpdateVesselInput: $createOrUpdateVesselInput\n    ) {\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation CreateOrUpdateVessel(\n    $createOrUpdateVesselInput: CreateOrUpdateVesselInput!\n  ) {\n    createOrUpdateVessel(\n      createOrUpdateVesselInput: $createOrUpdateVesselInput\n    ) {\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeVessel($id: Int!) {\n    removeVessel(id: $id)\n  }\n"): (typeof documents)["\n  mutation removeVessel($id: Int!) {\n    removeVessel(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateSetpoint($id: Int!, $temp: Float!) {\n    updateSetpointTemperature(id: $id, setpoint: $temp)\n  }\n"): (typeof documents)["\n  mutation updateSetpoint($id: Int!, $temp: Float!) {\n    updateSetpointTemperature(id: $id, setpoint: $temp)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBurnerMode($id: Int!, $burnerMode: BurnerMode!) {\n    updateBurnerMode(id: $id, burnerMode: $burnerMode)\n  }\n"): (typeof documents)["\n  mutation updateBurnerMode($id: Int!, $burnerMode: BurnerMode!) {\n    updateBurnerMode(id: $id, burnerMode: $burnerMode)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription subscribeToBurnerChange($id: Int!) {\n    burnerChange(id: $id) {\n      burnerLit\n      burnerMode\n      id\n    }\n  }\n"): (typeof documents)["\n  subscription subscribeToBurnerChange($id: Int!) {\n    burnerChange(id: $id) {\n      burnerLit\n      burnerMode\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;