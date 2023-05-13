import { graphql } from '../../__generated__/gql';

export const GET_ALL_TEMP_PROBES = graphql(/* GraphQL */ `
  query Pumps {
    pumpRelays {
      id
      pinOut
    }
  }
`);
