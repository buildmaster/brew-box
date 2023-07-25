import type { Meta } from '@storybook/react';
import { PumpTable } from './pump-table';
import { GET_ALL_PUMPS } from '../queries/pump-queries';
import { withRouter } from 'storybook-addon-react-router-v6';

const Story: Meta<typeof PumpTable> = {
  component: PumpTable,
  title: 'PumpTable',
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
            query: GET_ALL_PUMPS,
          },
          result: {
            data: {
              pumps: [
                {
                  id: 1,
                  name: 'Pump 1',
                  pinOut: 2,
                },
                {
                  id: 2,
                  name: 'Pump 2',
                  pinOut: null,
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
            query: GET_ALL_PUMPS,
          },
          result: {
            data: {
              pumps: [],
            },
          },
        },
      ],
    },
  },
};
