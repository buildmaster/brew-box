import type { Meta } from '@storybook/react';
import { FermentationDashboard } from './fermentation-dashboard';
import { withRouter } from 'storybook-addon-react-router-v6';
import { GET_FERMENTATION } from '../queries/fermentation-querires';

const Story: Meta<typeof FermentationDashboard> = {
  component: FermentationDashboard,
  title: 'FermentationDashboard',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/fermentation',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
  parameters: {
    apolloClient: {
      // do not put MockedProvider here.
      // You can, but its preferred to do it in preview.js
      mocks: [
        {
          request: {
            query: GET_FERMENTATION,
          },
          result: {
            data: {
              fermentation: {
                tempC: '4.016691987166748',
                tempF: '39.230045576900146',
                gravity: '1.0000569695743484',
              },
            },
          },
        },
      ],
    },
  },
};
