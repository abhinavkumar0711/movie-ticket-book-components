import Carousel from './Carousel';
import scrollImage from '../../../assets/KungFuPandaPoster.png';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: 'A carousel component that automatically scrolls through images.',
      },
    },
  },
  argTypes: {
    imageArray: {
      description: 'Images to be shown in carousel',
      control: { type: 'array' },
    },
    category: {
      description: 'Category heading displayed above the carousel.',
      control: { type: 'text' },
    },
    interval: {
      description: 'Time interval forscrolling.',
      control: { type: 'number' },
    },
    onImageClick: {
      description: 'Function triggered when an image is clicked.',
      action: 'image clicked', 
    },
  },
};

const Template = (args) => <Carousel {...args} />;

export const DefaultCarousel = Template.bind({});
DefaultCarousel.args = {
  imageArray: [
    scrollImage,
    scrollImage,
    scrollImage,
  ],
  category: 'Default Category',
  interval: 3000,
};

export const CustomInterval = Template.bind({});
CustomInterval.args = {
  imageArray: [
    scrollImage,
    scrollImage,
    scrollImage,
  ],
  category: 'Custom Interval',
  interval: 1000, 
};

export const WithLongCategory = Template.bind({});
WithLongCategory.args = {
  imageArray: [
    scrollImage,
    scrollImage,
    scrollImage,
  ],
  category: 'New Movies',
  interval: 3000,
};
