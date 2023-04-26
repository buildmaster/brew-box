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
};

export type CreateVesselInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createVessel: Vessel;
};


export type MutationCreateVesselArgs = {
  createVesselInput: CreateVesselInput;
};

export type Query = {
  __typename?: 'Query';
  vessels: Array<Vessel>;
};

export type Vessel = {
  __typename?: 'Vessel';
  /** Id of the vessel */
  id: Scalars['Int'];
  /** Name of the Vessell */
  name: Scalars['String'];
};

export type VesselsQueryVariables = Exact<{ [key: string]: never; }>;


export type VesselsQuery = { __typename?: 'Query', vessels: Array<{ __typename?: 'Vessel', id: number, name: string }> };


export const VesselsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Vessels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vessels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<VesselsQuery, VesselsQueryVariables>;