import Text from "../Text/Text";

const ScrollableList = ({ category, imagesObject, onImageClick }) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <Text type='heading' content={category} />
      </div>

      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {imagesObject.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-36 h-48" onClick={() => onImageClick(image) }>
            <img
              src={image}
              className="w-36 h-48 rounded-lg cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableList;
