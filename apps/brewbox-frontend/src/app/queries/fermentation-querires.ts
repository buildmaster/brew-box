import { graphql } from '../../__generated__/gql';

export const GET_FERMENTATION = graphql(/* GraphQL */ `
  query getFermentation {
    fermentation {
      tempC
      tempF
      gravity
    }
  }
`);

export const SUBSCRIBE_TO_FERMENTATION_UPDATES = graphql(/* GraphQL */ `
  subscription subscribeToFermentationUpdates {
    fermentationReading {
      tempC
      tempF
      gravity
    }
  }
`);
