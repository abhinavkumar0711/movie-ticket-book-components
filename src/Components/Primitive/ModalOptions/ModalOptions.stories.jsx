import { useState } from 'react';
import ModalOptions from './ModalOptions';

export default {
  title: 'Components/ModalOptions',
  component: ModalOptions,
  parameters: {
    docs: {
      description: {
        component: 'A modal component with options.',
      },
    },
  },
  argTypes: {
    isOpen: {
      description: 'Modal show/hide.',
      control: { type: 'boolean' },
    },
    onClose: {
      description: 'function triggered when any option clicked',
      action: 'closed',
    },
    options: {
      description: 'An array of options displayed as buttons in the modal.',
      control: { type: 'array' },
    },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleClose = (selectedOption) => {
    setIsOpen(false);
    args.onClose(selectedOption);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          background: '#6C47DB',
        }}
      >
        Open Modal
      </button>
      <ModalOptions {...args} isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  options: ['Theater 1', 'Theater 2', 'Theater 3'],
};