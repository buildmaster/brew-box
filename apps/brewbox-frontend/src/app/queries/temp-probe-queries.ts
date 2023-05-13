import { graphql } from '../../__generated__/gql';

export const SUBSCRIBE_TO_TEMPERATURE_UPDATES = graphql(/* GraphQL */ `
  subscription AllTemperatureUpdates {
    newTemperatureReading {
      temperature
      serialNumber
    }
  }
`);
