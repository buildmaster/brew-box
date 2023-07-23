/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type BurnerChange = {
  __typename?: 'BurnerChange';
  /** If the vessel is lit */
  burnerLit: Scalars['Boolean']['output'];
  /** Burner mode of the vessel */
  burnerMode: BurnerMode;
  /** Id of the vessel */
  id: Scalars['Int']['output'];
};

export enum BurnerMode {
  Auto = 'AUTO',
  Off = 'OFF',
  On = 'ON'
}

export type BurnerRelay = {
  __typename?: 'BurnerRelay';
  /** The relay id */
  id: Scalars['Int']['output'];
  /** The Pin related to this relay */
  pinOut: Scalars['Int']['output'];
  /** vessel under this probe */
  vessel?: Maybe<Vessel>;
};

export type CreateBurnerRelayInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateOrUpdateVesselInput = {
  /** PinOut for the burner attached to the vessel */
  burner?: InputMaybe<Scalars['Int']['input']>;
  /** the id of the vessel to update or null if create */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Name for the Vessel */
  name: Scalars['String']['input'];
  /** Serial for the probe asigned to this vessel */
  probe?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePumpRelayInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateTemperatureReadingInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBurnerRelay: BurnerRelay;
  createOrUpdateVessel: Vessel;
  createPumpRelay: PumpRelay;
  createTemperatureReading: TemperatureReading;
  removeBurnerRelay: BurnerRelay;
  removePumpRelay: PumpRelay;
  removeTemperatureReading: TemperatureReading;
  removeVessel: Scalars['Int']['output'];
  updateBurnerMode: Scalars['Boolean']['output'];
  updateBurnerRelay: BurnerRelay;
  updatePumpRelay: PumpRelay;
  updateSetpointTemperature: Scalars['Boolean']['output'];
  updateTemperatureReading: TemperatureReading;
};


export type MutationCreateBurnerRelayArgs = {
  createBurnerRelayInput: CreateBurnerRelayInput;
};


export type MutationCreateOrUpdateVesselArgs = {
  createOrUpdateVesselInput: CreateOrUpdateVesselInput;
};


export type MutationCreatePumpRelayArgs = {
  createPumpRelayInput: CreatePumpRelayInput;
};


export type MutationCreateTemperatureReadingArgs = {
  createTemperatureReadingInput: CreateTemperatureReadingInput;
};


export type MutationRemoveBurnerRelayArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePumpRelayArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTemperatureReadingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveVesselArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateBurnerModeArgs = {
  burnerMode: BurnerMode;
  id: Scalars['Int']['input'];
};


export type MutationUpdateBurnerRelayArgs = {
  updateBurnerRelayInput: UpdateBurnerRelayInput;
};


export type MutationUpdatePumpRelayArgs = {
  updatePumpRelayInput: UpdatePumpRelayInput;
};


export type MutationUpdateSetpointTemperatureArgs = {
  id: Scalars['Int']['input'];
  setpoint: Scalars['Float']['input'];
};


export type MutationUpdateTemperatureReadingArgs = {
  updateTemperatureReadingInput: UpdateTemperatureReadingInput;
};

export type PumpRelay = {
  __typename?: 'PumpRelay';
  /** The relay id */
  id: Scalars['Int']['output'];
  /** The Pin related to this relay */
  pinOut: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  burnerRelay: BurnerRelay;
  burnerRelays: Array<BurnerRelay>;
  hardwareSerialNumbers: Array<Scalars['String']['output']>;
  pumpRelay: PumpRelay;
  pumpRelays: Array<PumpRelay>;
  temperatureReading: TemperatureReading;
  temperatureReadings: Array<TemperatureReading>;
  vessel: Vessel;
  vessels: Array<Vessel>;
};


export type QueryBurnerRelayArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPumpRelayArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTemperatureReadingArgs = {
  id: Scalars['Int']['input'];
};


export type QueryVesselArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  burnerChange: BurnerChange;
  newTemperatureReading: TemperatureReading;
};


export type SubscriptionBurnerChangeArgs = {
  id: Scalars['Int']['input'];
};


export type SubscriptionNewTemperatureReadingArgs = {
  serialNumber: Scalars['String']['input'];
};

export type TemperatureReading = {
  __typename?: 'TemperatureReading';
  /** date the reading was created */
  dateCreated: Scalars['DateTime']['output'];
  /** The Reading Id */
  id: Scalars['Int']['output'];
  /** The serial number of the Probe related to this reading */
  serialNumber: Scalars['String']['output'];
  /** Last temperature read */
  temperature: Scalars['Float']['output'];
};

export type UpdateBurnerRelayInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdatePumpRelayInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateTemperatureReadingInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type Vessel = {
  __typename?: 'Vessel';
  /** Burner under the vessel */
  burner?: Maybe<Scalars['Int']['output']>;
  /** Status of the buner below the vessel */
  burnerLit: Scalars['Boolean']['output'];
  /** Mode for the burner under the vessel */
  burnerMode: BurnerMode;
  /** Id of the vessel */
  id: Scalars['Int']['output'];
  /** Last temperature read */
  lastTemperature?: Maybe<Scalars['Float']['output']>;
  /** Name of the Vessel */
  name: Scalars['String']['output'];
  /** Probe on this vessel */
  probe?: Maybe<Scalars['String']['output']>;
  /** Temperature that the vessel is set to turn on below and off above */
  setpointTemperature: Scalars['Float']['output'];
};

export type PumpsQueryVariables = Exact<{ [key: string]: never; }>;


export type PumpsQuery = { __typename?: 'Query', pumpRelays: Array<{ __typename?: 'PumpRelay', id: number, pinOut: number }> };

export type AllTemperatureUpdatesSubscriptionVariables = Exact<{
  serialNumber: Scalars['String']['input'];
}>;


export type AllTemperatureUpdatesSubscription = { __typename?: 'Subscription', newTemperatureReading: { __typename?: 'TemperatureReading', temperature: number, serialNumber: string } };

export type TemperatureProbesQueryVariables = Exact<{ [key: string]: never; }>;


export type TemperatureProbesQuery = { __typename?: 'Query', hardwareSerialNumbers: Array<string> };

export type VesselsQueryVariables = Exact<{ [key: string]: never; }>;


export type VesselsQuery = { __typename?: 'Query', vessels: Array<{ __typename?: 'Vessel', id: number, name: string, lastTemperature?: number | null, probe?: string | null, burner?: number | null, setpointTemperature: number, burnerMode: BurnerMode, burnerLit: boolean }> };

export type VesselsWithProbesQueryVariables = Exact<{ [key: string]: never; }>;


export type VesselsWithProbesQuery = { __typename?: 'Query', hardwareSerialNumbers: Array<string>, vessels: Array<{ __typename?: 'Vessel', id: number, name: string, lastTemperature?: number | null, probe?: string | null, burner?: number | null, setpointTemperature: number, burnerMode: BurnerMode, burnerLit: boolean }> };

export type VesselQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type VesselQuery = { __typename?: 'Query', hardwareSerialNumbers: Array<string>, vessel: { __typename?: 'Vessel', name: string, id: number, lastTemperature?: number | null, probe?: string | null, burner?: number | null, setpointTemperature: number, burnerMode: BurnerMode, burnerLit: boolean } };

export type CreateOrUpdateVesselMutationVariables = Exact<{
  createOrUpdateVesselInput: CreateOrUpdateVesselInput;
}>;


export type CreateOrUpdateVesselMutation = { __typename?: 'Mutation', createOrUpdateVessel: { __typename?: 'Vessel', name: string } };

export type RemoveVesselMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RemoveVesselMutation = { __typename?: 'Mutation', removeVessel: number };

export type UpdateSetpointMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  temp: Scalars['Float']['input'];
}>;


export type UpdateSetpointMutation = { __typename?: 'Mutation', updateSetpointTemperature: boolean };

export type UpdateBurnerModeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  burnerMode: BurnerMode;
}>;


export type UpdateBurnerModeMutation = { __typename?: 'Mutation', updateBurnerMode: boolean };

export type SubscribeToBurnerChangeSubscriptionVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SubscribeToBurnerChangeSubscription = { __typename?: 'Subscription', burnerChange: { __typename?: 'BurnerChange', burnerLit: boolean, burnerMode: BurnerMode, id: number } };


export const PumpsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pumps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pumpRelays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pinOut"}}]}}]}}]} as unknown as DocumentNode<PumpsQuery, PumpsQueryVariables>;
export const AllTemperatureUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"AllTemperatureUpdates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serialNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newTemperatureReading"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serialNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serialNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"serialNumber"}}]}}]}}]} as unknown as DocumentNode<AllTemperatureUpdatesSubscription, AllTemperatureUpdatesSubscriptionVariables>;
export const TemperatureProbesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TemperatureProbes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hardwareSerialNumbers"}}]}}]} as unknown as DocumentNode<TemperatureProbesQuery, TemperatureProbesQueryVariables>;
export const VesselsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Vessels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vessels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastTemperature"}},{"kind":"Field","name":{"kind":"Name","value":"probe"}},{"kind":"Field","name":{"kind":"Name","value":"burner"}},{"kind":"Field","name":{"kind":"Name","value":"setpointTemperature"}},{"kind":"Field","name":{"kind":"Name","value":"burnerMode"}},{"kind":"Field","name":{"kind":"Name","value":"burnerLit"}}]}}]}}]} as unknown as DocumentNode<VesselsQuery, VesselsQueryVariables>;
export const VesselsWithProbesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VesselsWithProbes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hardwareSerialNumbers"}},{"kind":"Field","name":{"kind":"Name","value":"vessels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastTemperature"}},{"kind":"Field","name":{"kind":"Name","value":"probe"}},{"kind":"Field","name":{"kind":"Name","value":"burner"}},{"kind":"Field","name":{"kind":"Name","value":"setpointTemperature"}},{"kind":"Field","name":{"kind":"Name","value":"burnerMode"}},{"kind":"Field","name":{"kind":"Name","value":"burnerLit"}}]}}]}}]} as unknown as DocumentNode<VesselsWithProbesQuery, VesselsWithProbesQueryVariables>;
export const VesselDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Vessel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hardwareSerialNumbers"}},{"kind":"Field","name":{"kind":"Name","value":"vessel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastTemperature"}},{"kind":"Field","name":{"kind":"Name","value":"probe"}},{"kind":"Field","name":{"kind":"Name","value":"burner"}},{"kind":"Field","name":{"kind":"Name","value":"setpointTemperature"}},{"kind":"Field","name":{"kind":"Name","value":"burnerMode"}},{"kind":"Field","name":{"kind":"Name","value":"burnerLit"}}]}}]}}]} as unknown as DocumentNode<VesselQuery, VesselQueryVariables>;
export const CreateOrUpdateVesselDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrUpdateVessel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createOrUpdateVesselInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrUpdateVesselInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrUpdateVessel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createOrUpdateVesselInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createOrUpdateVesselInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateOrUpdateVesselMutation, CreateOrUpdateVesselMutationVariables>;
export const RemoveVesselDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeVessel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeVessel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RemoveVesselMutation, RemoveVesselMutationVariables>;
export const UpdateSetpointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSetpoint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"temp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSetpointTemperature"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"setpoint"},"value":{"kind":"Variable","name":{"kind":"Name","value":"temp"}}}]}]}}]} as unknown as DocumentNode<UpdateSetpointMutation, UpdateSetpointMutationVariables>;
export const UpdateBurnerModeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateBurnerMode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"burnerMode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BurnerMode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBurnerMode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"burnerMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"burnerMode"}}}]}]}}]} as unknown as DocumentNode<UpdateBurnerModeMutation, UpdateBurnerModeMutationVariables>;
export const SubscribeToBurnerChangeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"subscribeToBurnerChange"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"burnerChange"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"burnerLit"}},{"kind":"Field","name":{"kind":"Name","value":"burnerMode"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SubscribeToBurnerChangeSubscription, SubscribeToBurnerChangeSubscriptionVariables>;