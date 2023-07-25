import type { Meta } from '@storybook/react';
import { Pump } from './pump';

const Story: Meta<typeof Pump> = {
  component: Pump,
  title: 'Pump',
};
export default Story;

export const Primary = {
  args: {
    Title: 'hi',
    PumpOn: false,
    PumpMode: 'ON',
  },
};
