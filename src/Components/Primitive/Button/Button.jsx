import backArrowIcon from '../../../assets/backArrow.png';

const Button = ({
  type = 'primary',
  text = 'Proceed',
  image,
  disabled = false,
  onClick,
  buttonClass = '',
  contentClass = '',
}) => {

  const getButtonStyles = () => {
  switch (type) {
    case 'primary':
      return `bg-[#6C47DB] text-white px-6 py-3 rounded-xl`;
    case 'secondary':
      return 'bg-[black] text-white px-6 py-3 rounded-xl';
    case 'selection':
      return `bg-black border-2 border-[#6C47DB] text-[#6C47DB] px-6 py-3 rounded-xl`;
    case 'icon-primary':
      return `bg-black border-2 border-[#6C47DB] text-[#6C47DB] p-3 rounded-full flex items-center justify-center w-12 h-12`;
    case 'icon-without-border':
      return `p-3 w-12 h-12`;
    case 'back-button':
      return `bg-white text-[#6C47DB] p-2 w-9 h-10 flex items-center justify-center rounded-sm`;
    case 'counter':
      return 'border-2 border-white text-white text-xl w-12 h-12 flex items-center justify-center rounded-full';
    case 'custom':
      return buttonClass;
    default:
      return `bg-[#6C47DB] text-white px-6 py-3 rounded-xl ml-10 mr-10`;
  }
};

  const renderContent = () => {
    if (type === 'back-button') {
      return <img src={backArrowIcon} alt="back" className={backButtonClass} />;
    }

    if (image && type.includes('icon')) {
      return <img src={image} alt="icon" className={`w-full h-full ${contentClass}`} />;
    }
    

    return (
      <span className={textClassName}>
        {text}
      </span>
    );
  };

  const backButtonClass = `${contentClass} w-4 h-4`;
  const iconClassName = `${contentClass}`
  const textClassName = `${type === 'counter' ? 'text-xl' : ''} ${contentClass}`
  const buttonClassName = `${getButtonStyles()} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} flex items-center justify-center max-w-md ${buttonClass}`

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
