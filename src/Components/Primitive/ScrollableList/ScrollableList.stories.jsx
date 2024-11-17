import ScrollableList from './ScrollableList';
import scrollImage from '../../../assets/KungFuPandaPoster.png';

export default {
  title: 'Components/ScrollableList',
  component: ScrollableList,
  parameters: {
    docs: {
      description: {
        component: 'A scrollable horizontal list with clickable images and a category title.',
      },
    },
  },
  argTypes: {
    category: {
      description: 'The title of the category displayed above the scrollable list.',
      control: { type: 'text' },
    },
    imagesObject: {
      description: 'Array of image URLs to display in the list.',
      control: { type: 'array' },
    },
    onImageClick: {
      description: 'Function triggered when an image is clicked.',
      action: 'image clicked',
    },
  },
};

const Template = (args) => <ScrollableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  category: 'Featured Movies',
  imagesObject: [
    scrollImage,
    scrollImage,
    scrollImage,
    scrollImage,
    scrollImage,
  ],
};
