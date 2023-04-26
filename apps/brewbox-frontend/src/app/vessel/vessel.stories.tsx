import type { Meta, StoryObj } from '@storybook/react';
import { Vessel } from './vessel';

const Story: Meta<typeof Vessel> = {
  component: Vessel,
  title: 'Vessel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
    },
  },
};
export default Story;
export const Primary = {
  args: {},
};
