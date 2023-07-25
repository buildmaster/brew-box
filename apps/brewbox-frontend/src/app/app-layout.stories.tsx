import type { Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import {
  GET_ALL_VESSELS,
  GET_ALL_VESSELS_WITH_PROBES,
} from './queries/vessel-queries';
import { DashboardPage } from './dashboard-page/dashboard-page';
import { VesselTable } from './vessel-table/vessel-table';
import { AppLayout } from './app-layout';
import { PumpTable } from './pump-table/pump-table';
import { GET_ALL_PUMPS } from './queries/pump-queries';

const Story: Meta<typeof AppLayout> = {
  component: AppLayout,
  title: 'Layouts/AppLayout',
  decorators: [withRouter],
};
export default Story;

export const DashboardSingleVessel = {
  args: {},
  parameters: {
    reactRouter: {
      routePath: '/dashboard',
      outlet: <DashboardPage />,
    },
    apolloClient: {
      // do not put MockedProvider here.
      // You can, but its preferred to do it in preview.js
      mocks: [
        {
          request: {
            query: GET_ALL_VESSELS,
          },
          result: {
            data: {
              vessels: [
                { id: 1, name: 'HLT' },
                { id: 2, name: 'Mash Tun' },
                { id: 3, name: 'Kettle' },
              ],
            },
          },
        },
      ],
    },
  },
};
export const DashboardThreeVessels = {
  args: {},
  parameters: {
    reactRouter: {
      routePath: '/',
      outlet: <DashboardPage />,
    },
    apolloClient: {
      // do not put MockedProvider here.
      // You can, but its preferred to do it in preview.js
      mocks: [
        {
          request: {
            query: GET_ALL_VESSELS,
          },
          result: {
            data: {
              vessels: [
                { id: 1, name: 'HLT' },
                { id: 2, name: 'Mash Tun' },
                { id: 3, name: 'Kettle' },
              ],
            },
          },
        },
      ],
    },
  },
};
export const VesselTableThreeVessels = {
  args: {},
  parameters: {
    reactRouter: {
      routePath: '/vessels',

      outlet: <VesselTable />,
    },
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
export const PumpTableTwoPumps = {
  args: {},
  parameters: {
    reactRouter: {
      routePath: '/pumps',

      outlet: <PumpTable />,
    },
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
                  pinOut: 4,
                },
              ],
            },
          },
        },
      ],
    },
  },
};
