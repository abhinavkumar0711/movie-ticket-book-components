import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import "../src/index.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS, 
        phone450: {
          name: 'Phone 450px',
          styles: {
            width: '450px',
            height: '620px', 
          },
          type: 'mobile',
        },
      },
      defaultViewport: 'phone450', 
    },
    backgrounds: {
      default: 'Figma',
      values: [
        { name: 'Figma', value: '#0C0C0C' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;
