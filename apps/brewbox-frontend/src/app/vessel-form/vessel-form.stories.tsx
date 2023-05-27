import type { Meta, StoryObj } from '@storybook/react';
import { VesselForm } from './vessel-form';
import { GET_ALL_TEMP_PROBES } from '../queries/temp-probe-queries';
import { withRouter } from 'storybook-addon-react-router-v6';

const Story: Meta<typeof VesselForm> = {
  component: VesselForm,
  title: 'VesselForm',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/vessel/new',
    },
  },
};
export default Story;

export const New: StoryObj<typeof VesselForm> = {
  args: {
    vessel: {
      name: '',
      probe: '',
    },
    hardwareSerialNumbers: ['mock_probe_1', 'mock_probe_2'],
  },
  parameters: {},
};
export const Existing: StoryObj<typeof VesselForm> = {
  args: {
    vessel: {
      id: 1,
      name: 'Vessel Name',
      probe: 'mock_probe_2',
      burner: 3,
    },
    hardwareSerialNumbers: ['mock_probe_1', 'mock_probe_2'],
  },
  parameters: {},
};
