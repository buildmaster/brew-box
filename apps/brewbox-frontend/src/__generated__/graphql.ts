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

export type Brew = {
  __typename?: 'Brew';
  /** Batch ID in BrewFather */
  batchId: Scalars['String']['output'];
  /** planned brew date */
  date: Scalars['DateTime']['output'];
  /** Brew Id */
  id?: Maybe<Scalars['Int']['output']>;
  /** Batch name */
  name: Scalars['String']['output'];
  /** Batch status in Brewfather */
  status: Scalars['String']['output'];
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

export type CreateBrewInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateOrUpdatePumpInput = {
  /** the id of the pump to update or null if create */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Name for the pump */
  name: Scalars['String']['input'];
  /** PinOut for the pump */
  pinOut?: InputMaybe<Scalars['Int']['input']>;
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

export type CreateTemperatureReadingInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type FermentationReading = {
  __typename?: 'FermentationReading';
  /** The specific gravity */
  gravity: Scalars['Float']['output'];
  /** The temperature in degrees C */
  tempC: Scalars['Float']['output'];
  /** The temperature in degrees F */
  tempF: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBrew: Brew;
  createOrUpdatePump: Pump;
  createOrUpdateVessel: Vessel;
  createTemperatureReading: TemperatureReading;
  removeBrew: Brew;
  removePump: Scalars['Int']['output'];
  removeTemperatureReading: TemperatureReading;
  removeVessel: Scalars['Int']['output'];
  updateBrew: Brew;
  updateBurnerMode: Scalars['Boolean']['output'];
  updatePumpMode?: Maybe<Pump>;
  updateSetpointTemperature: Scalars['Boolean']['output'];
  updateTemperatureReading: TemperatureReading;
};


export type MutationCreateBrewArgs = {
  createBrewInput: CreateBrewInput;
};


export type MutationCreateOrUpdatePumpArgs = {
  createOrUpdatePumpInput: CreateOrUpdatePumpInput;
};


export type MutationCreateOrUpdateVesselArgs = {
  createOrUpdateVesselInput: CreateOrUpdateVesselInput;
};


export type MutationCreateTemperatureReadingArgs = {
  createTemperatureReadingInput: CreateTemperatureReadingInput;
};


export type MutationRemoveBrewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePumpArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTemperatureReadingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveVesselArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateBrewArgs = {
  updateBrewInput: UpdateBrewInput;
};


export type MutationUpdateBurnerModeArgs = {
  burnerMode: BurnerMode;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePumpModeArgs = {
  id: Scalars['Int']['input'];
  pumpMode: PumpMode;
};


export type MutationUpdateSetpointTemperatureArgs = {
  id: Scalars['Int']['input'];
  setpoint: Scalars['Float']['input'];
};


export type MutationUpdateTemperatureReadingArgs = {
  updateTemperatureReadingInput: UpdateTemperatureReadingInput;
};

export type Pump = {
  __typename?: 'Pump';
  /** Pump ID */
  id: Scalars['Int']['output'];
  /** Name of the Pump */
  name: Scalars['String']['output'];
  /** PinOut for the pump */
  pinOut?: Maybe<Scalars['Int']['output']>;
  /** Status of the pump */
  pumpActive: Scalars['Boolean']['output'];
  /** Mode for the pump */
  pumpMode: PumpMode;
};

export type PumpChange = {
  __typename?: 'PumpChange';
  /** Id of the pump */
  id: Scalars['Int']['output'];
  /** If the pump is active */
  pumpActive: Scalars['Boolean']['output'];
  /** mode of the pump */
  pumpMode: PumpMode;
};

export enum PumpMode {
  Off = 'OFF',
  On = 'ON'
}

export type Query = {
  __typename?: 'Query';
  brew: Brew;
  brews: Array<Brew>;
  fermentation: FermentationReading;
  hardwareSerialNumbers: Array<Scalars['String']['output']>;
  pump: Pump;
  pumps: Array<Pump>;
  temperatureReading: TemperatureReading;
  temperatureReadings: Array<TemperatureReading>;
  vessel: Vessel;
  vessels: Array<Vessel>;
};


export type QueryBrewArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPumpArgs = {
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
  fermentationReading: FermentationReading;
  newTemperatureReading: TemperatureReading;
  pumpChange: PumpChange;
};


export type SubscriptionBurnerChangeArgs = {
  id: Scalars['Int']['input'];
};


export type SubscriptionNewTemperatureReadingArgs = {
  serialNumber: Scalars['String']['input'];
};


export type SubscriptionPumpChangeArgs = {
  id: Scalars['Int']['input'];
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

export type UpdateBrewInput = {
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

export type GetFermentationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFermentationQuery = { __typename?: 'Query', fermentation: { __typename?: 'FermentationReading', tempC: number, tempF: number, gravity: number } };

export type SubscribeToFermentationUpdatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeToFermentationUpdatesSubscription = { __typename?: 'Subscription', fermentationReading: { __typename?: 'FermentationReading', tempC: number, tempF: number, gravity: number } };

export type PumpsQueryVariables = Exact<{ [key: string]: never; }>;


export type PumpsQuery = { __typename?: 'Query', pumps: Array<{ __typename?: 'Pump', id: number, name: string, pinOut?: number | null, pumpMode: PumpMode, pumpActive: boolean }> };

export type DeletePumpMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeletePumpMutation = { __typename?: 'Mutation', removePump: number };

export type CreateOrUpdatePumpMutationVariables = Exact<{
  createOrUpdatePumpInput: CreateOrUpdatePumpInput;
}>;


export type CreateOrUpdatePumpMutation = { __typename?: 'Mutation', createOrUpdatePump: { __typename?: 'Pump', id: number, name: string, pinOut?: number | null, pumpMode: PumpMode, pumpActive: boolean } };

export type GetPumpQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetPumpQuery = { __typename?: 'Query', pump: { __typename?: 'Pump', id: number, name: string, pinOut?: number | null, pumpMode: PumpMode, pumpActive: boolean } };

export type UpdatePumpModeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  pumpMode: PumpMode;
}>;


export type UpdatePumpModeMutation = { __typename?: 'Mutation', updatePumpMode?: { __typename?: 'Pump', id: number, name: string, pinOut?: number | null, pumpMode: PumpMode, pumpActive: boolean } | null };

export type SubscribeToPumpUpdatesSubscriptionVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SubscribeToPumpUpdatesSubscription = { __typename?: 'Subscription', pumpChange: { __typename?: 'PumpChange', id: number, pumpActive: boolean, pumpMode: PumpMode } };

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


export const GetFermentationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFermentation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fermentation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tempC"}},{"kind":"Field","name":{"kind":"Name","value":"tempF"}},{"kind":"Field","name":{"kind":"Name","value":"gravity"}}]}}]}}]} as unknown as DocumentNode<GetFermentationQuery, GetFermentationQueryVariables>;
export const SubscribeToFermentationUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"subscribeToFermentationUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fermentationReading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tempC"}},{"kind":"Field","name":{"kind":"Name","value":"tempF"}},{"kind":"Field","name":{"kind":"Name","value":"gravity"}}]}}]}}]} as unknown as DocumentNode<SubscribeToFermentationUpdatesSubscription, SubscribeToFermentationUpdatesSubscriptionVariables>;
export const PumpsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pumps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pumps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pinOut"}},{"kind":"Field","name":{"kind":"Name","value":"pumpMode"}},{"kind":"Field","name":{"kind":"Name","value":"pumpActive"}}]}}]}}]} as unknown as DocumentNode<PumpsQuery, PumpsQueryVariables>;
export const DeletePumpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePump"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePump"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeletePumpMutation, DeletePumpMutationVariables>;
export const CreateOrUpdatePumpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createOrUpdatePump"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createOrUpdatePumpInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrUpdatePumpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrUpdatePump"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createOrUpdatePumpInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createOrUpdatePumpInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pinOut"}},{"kind":"Field","name":{"kind":"Name","value":"pumpMode"}},{"kind":"Field","name":{"kind":"Name","value":"pumpActive"}}]}}]}}]} as unknown as DocumentNode<CreateOrUpdatePumpMutation, CreateOrUpdatePumpMutationVariables>;
export const GetPumpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPump"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pump"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pinOut"}},{"kind":"Field","name":{"kind":"Name","value":"pumpMode"}},{"kind":"Field","name":{"kind":"Name","value":"pumpActive"}}]}}]}}]} as unknown as DocumentNode<GetPumpQuery, GetPumpQueryVariables>;
export const UpdatePumpModeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePumpMode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pumpMode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PumpMode"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePumpMode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"pumpMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pumpMode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pinOut"}},{"kind":"Field","name":{"kind":"Name","value":"pumpMode"}},{"kind":"Field","name":{"kind":"Name","value":"pumpActive"}}]}}]}}]} as unknown as DocumentNode<UpdatePumpModeMutation, UpdatePumpModeMutationVariables>;
export const SubscribeToPumpUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"subscribeToPumpUpdates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pumpChange"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pumpActive"}},{"kind":"Field","name":{"kind":"Name","value":"pumpMode"}}]}}]}}]} as unknown as DocumentNode<SubscribeToPumpUpdatesSubscription, SubscribeToPumpUpdatesSubscriptionVariables>;
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