import '../src/styles.css';
import { withThemeByClassName } from '@storybook/addon-styling';
import { Preview } from '@storybook/react';
import { MockedProvider } from '@apollo/client/testing';
import { themes } from '@storybook/theming';
const preview: Preview = {
  parameters: {
    apolloClient: {
      MockedProvider,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    previewTabs: {
      'storybook/docs/panel': { index: -1 },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};
export default preview;
