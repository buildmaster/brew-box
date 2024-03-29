import { graphql } from '../../__generated__/gql';

export const SUBSCRIBE_TO_TEMPERATURE_UPDATES = graphql(/* GraphQL */ `
  subscription AllTemperatureUpdates($serialNumber: String!) {
    newTemperatureReading(serialNumber: $serialNumber) {
      temperature
      serialNumber
    }
  }
`);
export const GET_ALL_TEMP_PROBES = graphql(/* GraphQL */ `
  query TemperatureProbes {
    hardwareSerialNumbers
  }
`);
