import Button from '../Button/Button';
import Text from '../Text/Text';

const ModalOptions = ({ isOpen, onClose, options }) => {

  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose(null);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50" onClick={handleOverlayClick}>
      <div className="bg-[#170d35] p-6 rounded-xl max-w-[350px] w-full text-center mb-4">

        <div className='mb-4'>
          <Text type='heading-large' content='Select an Option' />
        </div>

        {options.map((option, index) => (
          <Button
            key={index}
            type='primary'
            text={option}
            buttonClass='w-full mb-4 flex justify-center'
            onClick={() => {
              onClose(option);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ModalOptions;
