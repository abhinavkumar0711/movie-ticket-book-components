import React from 'react';
import Divider from './Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: 'A customizable divider component.',
      },
    },
  },
  argTypes: {
    type: {
      description: 'The style of the divider',
      control: { type: 'select' },
      options: ['straight', 'dotted', 'dashes'],
    },
    orientation: {
      description: 'The orientation of the divider.',
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
};

const Template = (args) => <Divider {...args} />;

export const HorizontalSolid = Template.bind({});
HorizontalSolid.args = {
  type: 'straight',
  orientation: 'horizontal',
};

export const HorizontalDotted = Template.bind({});
HorizontalDotted.args = {
  type: 'dotted',
  orientation: 'horizontal',
};

export const HorizontalDashed = Template.bind({});
HorizontalDashed.args = {
  type: 'dashes',
  orientation: 'horizontal',
};
