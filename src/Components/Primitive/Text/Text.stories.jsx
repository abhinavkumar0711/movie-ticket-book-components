import React from 'react';
import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'For displaying different styles of texts.',
      },
    },
  },
  argTypes: {
    type: {
      description: 'The style of the text.',
      control: { type: 'select' },
      options: [
        'heading',
        'heading-large',
        'label',
        'label-bold',
        'paragraph',
        'price-large',
        'price-medium',
        'custom',
      ],
    },
    content: {
      description: 'The text content to be displayed.',
      control: { type: 'text' },
    },
    customClass: {
      description: 'Additional custom CSS classes for styling the text.',
      control: { type: 'text' },
    },
  },
};

const Template = (args) => <Text {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  type: 'heading',
  content: 'This is a heading',
};

export const HeadingLarge = Template.bind({});
HeadingLarge.args = {
  type: 'heading-large',
  content: 'This is a large heading',
};

export const Label = Template.bind({});
Label.args = {
  type: 'label',
  content: 'This is a label',
};

export const LabelBold = Template.bind({});
LabelBold.args = {
  type: 'label-bold',
  content: 'This is a bold label',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  type: 'paragraph',
  content: 'This is a paragraph of text',
};

export const PriceLarge = Template.bind({});
PriceLarge.args = {
  type: 'price-large',
  content: '$99',
};

export const PriceMedium = Template.bind({});
PriceMedium.args = {
  type: 'price-medium',
  content: '$49',
};

export const Custom = Template.bind({});
Custom.args = {
  type: 'custom',
  content: 'Custom styled text',
  customClass: 'text-red-500 text-xl italic',
};
