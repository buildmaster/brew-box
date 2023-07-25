import { graphql } from '../../__generated__/gql';

export const GET_ALL_PUMPS = graphql(/* GraphQL */ `
  query pumps {
    pumps {
      id
      name
      pinOut
      pumpMode
      pumpActive
    }
  }
`);
export const DELETE_PUMP = graphql(/* GraphQL */ `
  mutation deletePump($id: Int!) {
    removePump(id: $id)
  }
`);
export const CREATE_OR_UPDATE_PUMP = graphql(/* GraphQL */ `
  mutation createOrUpdatePump(
    $createOrUpdatePumpInput: CreateOrUpdatePumpInput!
  ) {
    createOrUpdatePump(createOrUpdatePumpInput: $createOrUpdatePumpInput) {
      id
      name
      pinOut
      pumpMode
      pumpActive
    }
  }
`);
export const GET_PUMP = graphql(/* GraphQL */ `
  query getPump($id: Int!) {
    pump(id: $id) {
      id
      name
      pinOut
      pumpMode
      pumpActive
    }
  }
`);
export const UPDATE_PUMP_MODE = graphql(/* */ `
  mutation updatePumpMode($id: Int!, $pumpMode: PumpMode!) {
    updatePumpMode(id: $id, pumpMode: $pumpMode) {
      id
      name
      pinOut
      pumpMode
      pumpActive
    }
  }
`);
export const SUBSCRIBE_TO_PUMP_CHANGE = graphql(/* */ `
  subscription subscribeToPumpUpdates($id: Int!) {
    pumpChange(id: $id) {
      id
      pumpActive
      pumpMode
    }
  }
`);
