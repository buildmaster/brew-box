import { graphql } from '../../__generated__/gql';

export const GET_ALL_PUMPS = graphql(/* GraphQL */ `
  query Pumps {
    pumpRelays {
      id
      pinOut
    }
  }
`);
