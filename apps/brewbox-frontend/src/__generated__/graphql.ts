/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type BurnerRelay = {
  __typename?: 'BurnerRelay';
  /** The relay id */
  id: Scalars['Int'];
  /** The Pin related to this relay */
  pinOut: Scalars['Int'];
  /** vessel under this probe */
  vessel?: Maybe<Vessel>;
};

export type CreateBurnerRelayInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreatePumpRelayInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateTemperatureReadingInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateVesselInput = {
  /** PinOut for the burner attached to the vessel */
  burnerPin: Scalars['Int'];
  /** Name for the Vessel */
  name: Scalars['String'];
  /** Serial for the probe asigned to this vessel */
  probeSerial: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBurnerRelay: BurnerRelay;
  createPumpRelay: PumpRelay;
  createTemperatureReading: TemperatureReading;
  createVessel: Vessel;
  removeBurnerRelay: BurnerRelay;
  removePumpRelay: PumpRelay;
  removeTemperatureReading: TemperatureReading;
  updateBurnerRelay: BurnerRelay;
  updatePumpRelay: PumpRelay;
  updateTemperatureReading: TemperatureReading;
};


export type MutationCreateBurnerRelayArgs = {
  createBurnerRelayInput: CreateBurnerRelayInput;
};


export type MutationCreatePumpRelayArgs = {
  createPumpRelayInput: CreatePumpRelayInput;
};


export type MutationCreateTemperatureReadingArgs = {
  createTemperatureReadingInput: CreateTemperatureReadingInput;
};


export type MutationCreateVesselArgs = {
  createVesselInput: CreateVesselInput;
};


export type MutationRemoveBurnerRelayArgs = {
  id: Scalars['Int'];
};


export type MutationRemovePumpRelayArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTemperatureReadingArgs = {
  id: Scalars['Int'];
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
  id: Scalars['Int'];
  /** The Pin related to this relay */
  pinOut: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  burnerRelay: BurnerRelay;
  burnerRelays: Array<BurnerRelay>;
  hardwareSerialNumbers: Array<Scalars['String']>;
  pumpRelay: PumpRelay;
  pumpRelays: Array<PumpRelay>;
  temperatureReading: TemperatureReading;
  temperatureReadings: Array<TemperatureReading>;
  vessels: Array<Vessel>;
};


export type QueryBurnerRelayArgs = {
  id: Scalars['Int'];
};


export type QueryPumpRelayArgs = {
  id: Scalars['Int'];
};


export type QueryTemperatureReadingArgs = {
  id: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newTemperatureReading: TemperatureReading;
};

export type TemperatureReading = {
  __typename?: 'TemperatureReading';
  /** date the reading was created */
  dateCreated: Scalars['DateTime'];
  /** The Reading Id */
  id: Scalars['Int'];
  /** The serial number of the Probe related to this reading */
  serialNumber: Scalars['String'];
  /** Last temperature read */
  temperature: Scalars['Float'];
};

export type UpdateBurnerRelayInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdatePumpRelayInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateTemperatureReadingInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type Vessel = {
  __typename?: 'Vessel';
  /** Burner under the vessel */
  burner?: Maybe<BurnerRelay>;
  /** Id of the vessel */
  id: Scalars['Int'];
  /** Last temperature read */
  lastTemperature?: Maybe<Scalars['Float']>;
  /** Name of the Vessel */
  name: Scalars['String'];
  /** Probe on this vessel */
  probe?: Maybe<Scalars['String']>;
};

export type PumpsQueryVariables = Exact<{ [key: string]: never; }>;


export type PumpsQuery = { __typename?: 'Query', pumpRelays: Array<{ __typename?: 'PumpRelay', id: number, pinOut: number }> };

export type AllTemperatureUpdatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AllTemperatureUpdatesSubscription = { __typename?: 'Subscription', newTemperatureReading: { __typename?: 'TemperatureReading', temperature: number, serialNumber: string } };

export type VesselsQueryVariables = Exact<{ [key: string]: never; }>;


export type VesselsQuery = { __typename?: 'Query', vessels: Array<{ __typename?: 'Vessel', id: number, name: string, lastTemperature?: number | null, probe?: string | null, burner?: { __typename?: 'BurnerRelay', id: number, pinOut: number } | null }> };

export type VesselsWithProbesQueryVariables = Exact<{ [key: string]: never; }>;


export type VesselsWithProbesQuery = { __typename?: 'Query', hardwareSerialNumbers: Array<string>, vessels: Array<{ __typename?: 'Vessel', id: number, name: string, lastTemperature?: number | null, probe?: string | null, burner?: { __typename?: 'BurnerRelay', id: number, pinOut: number } | null }> };


export const PumpsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pumps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pumpRelays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pinOut"}}]}}]}}]} as unknown as DocumentNode<PumpsQuery, PumpsQueryVariables>;
export const AllTemperatureUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"AllTemperatureUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newTemperatureReading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"serialNumber"}}]}}]}}]} as unknown as DocumentNode<AllTemperatureUpdatesSubscription, AllTemperatureUpdatesSubscriptionVariables>;
export const VesselsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Vessels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vessels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastTemperature"}},{"kind":"Field","name":{"kind":"Name","value":"probe"}},{"kind":"Field","name":{"kind":"Name","value":"burner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pinOut"}}]}}]}}]}}]} as unknown as DocumentNode<VesselsQuery, VesselsQueryVariables>;
export const VesselsWithProbesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VesselsWithProbes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hardwareSerialNumbers"}},{"kind":"Field","name":{"kind":"Name","value":"vessels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastTemperature"}},{"kind":"Field","name":{"kind":"Name","value":"probe"}},{"kind":"Field","name":{"kind":"Name","value":"burner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pinOut"}}]}}]}}]}}]} as unknown as DocumentNode<VesselsWithProbesQuery, VesselsWithProbesQueryVariables>;