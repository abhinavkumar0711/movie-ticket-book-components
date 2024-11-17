import React from 'react';
import Button from './Button';
import backArrowIcon from '../../../assets/backArrow.png';

export default {
  title: 'Components/Button', 
  component: Button, 
  parameters: {
    docs: {
      description: {
        component: 'Button Component with different styles',
      },
    },
  },
  argTypes: {
    type: {
      description: 'Defines the style type of the button.',
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'selection',
        'icon-primary',
        'icon-without-border',
        'back-button',
        'counter',
        'custom',
      ],
    },
    text: {
      description: 'Text content displayed inside the button.',
      control: { type: 'text' },
    },
    image: {
      description: 'Image displayed in icon buttons.',
      control: { type: 'text' },
    },
    disabled: {
      description: 'Disables the button if set to true.',
      control: { type: 'boolean' },
    },
    buttonClass: {
      description: 'Custom class for the button wrapper.',
      control: { type: 'text' },
    },
    contentClass: {
      description: 'Custom class for the button content.',
      control: { type: 'text' },
    },
    onClick: {
      description: 'Function triggered when the button is clicked.',
      action: 'clicked',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  text: 'Proceed',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  text: 'Cancel',
  disabled: false,
};

export const Selection = Template.bind({});
Selection.args = {
  type: 'selection',
  text: 'Select',
  disabled: false,
};

export const IconPrimary = Template.bind({});
IconPrimary.args = {
  type: 'icon-primary',
  image: backArrowIcon,
  disabled: false,
};

export const IconWithoutBorder = Template.bind({});
IconWithoutBorder.args = {
  type: 'icon-without-border',
  image: backArrowIcon,
  disabled: false,
};

export const BackButton = Template.bind({});
BackButton.args = {
  type: 'back-button',
  image: backArrowIcon,
  disabled: false,
};

export const Custom = Template.bind({});
Custom.args = {
  type: 'custom',
  text: 'Custom Style',
  buttonClass: 'bg-red-500 text-white px-4 py-2 rounded',
  disabled: false,
};
