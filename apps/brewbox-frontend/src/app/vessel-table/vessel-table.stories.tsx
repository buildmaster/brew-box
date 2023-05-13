import type { Meta } from '@storybook/react';
import { VesselTable } from './vessel-table';
import { GET_ALL_VESSELS_WITH_PROBES } from '../queries/vessel-queries';

const Story: Meta<typeof VesselTable> = {
  component: VesselTable,
  title: 'VesselTable',
};
export default Story;

export const Filled = {
  args: {},
  parameters: {
    apolloClient: {
      // do not put MockedProvider here.
      // You can, but its preferred to do it in preview.js
      mocks: [
        {
          request: {
            query: GET_ALL_VESSELS_WITH_PROBES,
          },
          result: {
            data: {
              hardwareSerialNumbers: ['mock_probe_1', 'mock_probe_2'],
              vessels: [
                {
                  id: 1,
                  name: 'HLT',
                  probe: { serial: 'probe_value_missing' },
                  burner: { pinOut: 2 },
                },
                {
                  id: 2,
                  name: 'MASH',
                  probe: { serial: 'mock_probe_1' },
                  burner: { pinOut: 4 },
                },
              ],
            },
          },
        },
      ],
    },
  },
};
export const Empty = {
  args: {},
  parameters: {
    apolloClient: {
      // do not put MockedProvider here.
      // You can, but its preferred to do it in preview.js
      mocks: [
        {
          request: {
            query: GET_ALL_VESSELS_WITH_PROBES,
          },
          result: {
            data: {
              hardwareSerialNumbers: ['mock_probe_1', 'mock_probe_2'],
              vessels: [],
            },
          },
        },
      ],
    },
  },
};
