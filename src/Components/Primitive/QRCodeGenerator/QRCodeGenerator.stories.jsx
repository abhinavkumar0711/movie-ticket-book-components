import QRCodeGenerator from './QRCodeGenerator';

export default {
  title: 'Components/QRCodeGenerator',
  component: QRCodeGenerator,
  parameters: {
    docs: {
      description: {
        component: 'A QR Code generator component.',
      },
    },
  },
  argTypes: {
    value: {
      description: 'Value or URL of the QR Code',
      control: { type: 'text' },
    },
    size: {
      description: 'Size of the QR',
      control: { type: 'number' },
    },
    bgColor: {
      description: 'Background color of the QR Code.',
      control: { type: 'color' },
    },
    fgColor: {
      description: 'Foreground color of the QR Code.',
      control: { type: 'color' },
    },
  },
};

const Template = (args) => <QRCodeGenerator {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'https://www.google.com',
  size: 300,
  bgColor: '#ffffff',
  fgColor: '#000000',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  value: 'https://www.google.com',
  size: 300,
  bgColor: '#000000',
  fgColor: '#ff0000',
};
