import { graphql } from '../../__generated__/gql';

export const GET_ALL_VESSELS = graphql(/* GraphQL */ `
  query Vessels {
    vessels {
      id
      name
      lastTemperature
      probe
      burner {
        id
        pinOut
      }
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
      burner {
        id
        pinOut
      }
    }
  }
`);
