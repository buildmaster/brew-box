import type { Meta } from '@storybook/react';
import { ApplicationSidebar } from './application-sidebar';
import { withRouter } from 'storybook-addon-react-router-v6';

const Story: Meta<typeof ApplicationSidebar> = {
  component: ApplicationSidebar,
  title: 'ApplicationSidebar',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '*',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
