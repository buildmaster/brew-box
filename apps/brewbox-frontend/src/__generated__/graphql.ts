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
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

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
  updateBurnerRelay: BurnerRelay;
  updatePumpRelay: PumpRelay;
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


export type MutationUpdateBurnerRelayArgs = {
  updateBurnerRelayInput: UpdateBurnerRelayInput;
};


export type MutationUpdatePumpRelayArgs = {
  updatePumpRelayInput: UpdatePumpRelayInput;
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
  newTemperatureReading: TemperatureReading;
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
  /** Id of the vessel */
  id: Scalars['Int']['output'];
  /** Last temperature read */
  lastTemperature?: Maybe<Scalars['Float']['output']>;
  /** Name of the Vessel */
  name: Scalars['String']['output'];
  /** Probe on this vessel */
  probe?: Maybe<Scalars['String']['output']>;
};

export type PumpsQueryVariables = Exact<{ [key: string]: never; }>;


export type PumpsQuery = { __typename?: 'Query', pumpRelays: Array<{ __typename?: 'PumpRelay', id: number, pinOut: number }> };

export type AllTemperatureUpdatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AllTemperatureUpdatesSubscription = { __typename?: 'Subscription', newTemperatureReading: { __typename?: 'TemperatureReading', temperature: number, serialNumber: string } };

export type TemperatureProbesQueryVariables = Exact<{ [key: string]: never; }>;


export type TemperatureProbesQuery = { __typename?: 'Query', hardwareSerialNumbers: Array<string> };

export type VesselsQueryVariables = Exact<{ [key: string]: never; }>;


export type VesselsQuery = { __typename?: 'Query', vessels: Array<{ __typename?: 'Vessel', id: number, name: string, lastTemperature?: number | null, probe?: string | null, burner?: number | null }> };

export type VesselsWithProbesQueryVariables = Exact<{ [key: string]: never; }>;


export type VesselsWithProbesQuery = { __typename?: 'Query', hardwareSerialNumbers: Array<string>, vessels: Array<{ __typename?: 'Vessel', id: number, name: string, lastTemperature?: number | null, probe?: string | null, burner?: number | null }> };

export type VesselQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type VesselQuery = { __typename?: 'Query', hardwareSerialNumbers: Array<string>, vessel: { __typename?: 'Vessel', name: string, id: number, lastTemperature?: number | null, probe?: string | null, burner?: number | null } };

export type CreateOrUpdateVesselMutationVariables = Exact<{
  createOrUpdateVesselInput: CreateOrUpdateVesselInput;
}>;


export type CreateOrUpdateVesselMutation = { __typename?: 'Mutation', createOrUpdateVessel: { __typename?: 'Vessel', name: string } };

export type RemoveVesselMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RemoveVesselMutation = { __typename?: 'Mutation', removeVessel: number };


export const PumpsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pumps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pumpRelays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pinOut"}}]}}]}}]} as unknown as DocumentNode<PumpsQuery, PumpsQueryVariables>;
export const AllTemperatureUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"AllTemperatureUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newTemperatureReading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"serialNumber"}}]}}]}}]} as unknown as DocumentNode<AllTemperatureUpdatesSubscription, AllTemperatureUpdatesSubscriptionVariables>;
export const TemperatureProbesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TemperatureProbes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hardwareSerialNumbers"}}]}}]} as unknown as DocumentNode<TemperatureProbesQuery, TemperatureProbesQueryVariables>;
export const VesselsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Vessels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vessels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastTemperature"}},{"kind":"Field","name":{"kind":"Name","value":"probe"}},{"kind":"Field","name":{"kind":"Name","value":"burner"}}]}}]}}]} as unknown as DocumentNode<VesselsQuery, VesselsQueryVariables>;
export const VesselsWithProbesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VesselsWithProbes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hardwareSerialNumbers"}},{"kind":"Field","name":{"kind":"Name","value":"vessels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastTemperature"}},{"kind":"Field","name":{"kind":"Name","value":"probe"}},{"kind":"Field","name":{"kind":"Name","value":"burner"}}]}}]}}]} as unknown as DocumentNode<VesselsWithProbesQuery, VesselsWithProbesQueryVariables>;
export const VesselDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Vessel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hardwareSerialNumbers"}},{"kind":"Field","name":{"kind":"Name","value":"vessel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastTemperature"}},{"kind":"Field","name":{"kind":"Name","value":"probe"}},{"kind":"Field","name":{"kind":"Name","value":"burner"}}]}}]}}]} as unknown as DocumentNode<VesselQuery, VesselQueryVariables>;
export const CreateOrUpdateVesselDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrUpdateVessel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createOrUpdateVesselInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrUpdateVesselInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrUpdateVessel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createOrUpdateVesselInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createOrUpdateVesselInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateOrUpdateVesselMutation, CreateOrUpdateVesselMutationVariables>;
export const RemoveVesselDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeVessel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeVessel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RemoveVesselMutation, RemoveVesselMutationVariables>;