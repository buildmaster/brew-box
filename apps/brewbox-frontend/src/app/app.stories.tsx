import type { Meta } from '@storybook/react';
import { App } from './app';
import { GET_ALL_VESSELS } from './queries/vessel-queries';
const Story: Meta<typeof App> = {
  component: App,
  title: 'App',
};
export default Story;

export const SingleVessel = {
  args: {},
  parameters: {
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
              vessel: [{ id: 1, name: 'HLT' }],
            },
          },
        },
      ],
    },
  },
};
export const ThreeVessels = {
  args: {},
  parameters: {
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
              vessel: [
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
