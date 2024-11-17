import InputField from './InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    docs: {
      description: {
        component: 'A customizable input field component.',
      },
    },
  },
  argTypes: {
    id: {
      description: 'Unique Id',
      control: { type: 'text' },
    },
    placeholderText: {
      description: 'Text displayed as a placeholder inside the input field.',
      control: { type: 'text' },
    },
    onChange: {
      description: 'Function triggered on value change.',
      action: 'changed', 
    },
    value: {
      description: 'The value of the input field.',
      control: { type: 'text' },
    },
    className: {
      description: 'Additional CSS classes.',
      control: { type: 'text' },
    },
    type: {
      description: 'The type of the input field',
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel'],
    },
  },
};

const Template = (args) => <InputField {...args} />;

export const WithValue = Template.bind({});
WithValue.args = {
  placeholderText: 'Enter your name',
  value: 'John Doe',
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  placeholderText: 'Enter your password',
  type: 'password',
};
