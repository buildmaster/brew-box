import type { Meta } from '@storybook/react';
import { VesselTable } from './vessel-table';
import { GET_ALL_VESSELS_WITH_PROBES } from '../queries/vessel-queries';
import { withRouter } from 'storybook-addon-react-router-v6';

const Story: Meta<typeof VesselTable> = {
  component: VesselTable,
  title: 'VesselTable',
  decorators: [withRouter],
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
                  probe: 'probe_value_missing',
                  burner: 2,
                },
                {
                  id: 2,
                  name: 'NO Burner defined',
                  probe: 'probe_value_missing',
                },
                {
                  id: 3,
                  name: 'no probe defined',
                  burner: 2,
                },
                {
                  id: 4,
                  name: 'MASH',
                  probe: 'mock_probe_1',
                  burner: 4,
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
