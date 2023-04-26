import { graphql } from '../../__generated__/gql';

export const GET_ALL_VESSELS = graphql(/* GraphQL */ `
  query Vessels {
    vessels {
      id
      name
    }
  }
`);
