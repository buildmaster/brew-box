import type { Meta, StoryObj } from '@storybook/react';
import { PumpForm } from './pump-form';
import { withRouter } from 'storybook-addon-react-router-v6';

const Story: Meta<typeof PumpForm> = {
  component: PumpForm,
  title: 'PumpForm',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/pumps/new',
    },
  },
};
export default Story;

export const New: StoryObj<typeof PumpForm> = {
  args: {
    pump: {
      name: '',
      pinOut: 3,
    },
  },
  parameters: {},
};
export const Existing: StoryObj<typeof PumpForm> = {
  args: {
    pump: {
      id: 1,
      name: 'Vessel Name',
      pinOut: 3,
    },
  },
  parameters: {},
};
