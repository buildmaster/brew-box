import { graphql } from '../../__generated__/gql';

export const GET_ALL_VESSELS = graphql(/* GraphQL */ `
  query Vessels {
    vessels {
      id
      name
      lastTemperature
      probe
      burner
    }
  }
`);

export const GET_ALL_VESSELS_WITH_PROBES = graphql(/* GraphQL */ `
  query VesselsWithProbes {
    hardwareSerialNumbers

    vessels {
      id
      name
      lastTemperature
      probe
      burner
    }
  }
`);

export const GET_VESSEL = graphql(/* GraphQL */ `
  query Vessel($id: Int!) {
    hardwareSerialNumbers
    vessel(id: $id) {
      name
      id
      lastTemperature
      probe
      burner
    }
  }
`);

export const CREATE_OR_UPDATE_VESSEL = graphql(/* GraphQL */ `
  mutation CreateOrUpdateVessel(
    $createOrUpdateVesselInput: CreateOrUpdateVesselInput!
  ) {
    createOrUpdateVessel(
      createOrUpdateVesselInput: $createOrUpdateVesselInput
    ) {
      name
    }
  }
`);

export const DELETE_VESSEL = graphql(/* GraphQL */ `
  mutation removeVessel($id: Int!) {
    removeVessel(id: $id)
  }
`);
