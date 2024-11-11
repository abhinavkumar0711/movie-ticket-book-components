const Divider = ({ type = 'straight', orientation = 'horizontal' }) => {
  const getDividerStyles = () => {

    const baseStyle = orientation === 'horizontal' ? 'w-full h-0.5' : 'h-full w-0.5';

    let borderStyle;
    if (type === 'dotted') {
      borderStyle = 'border-dotted';
    } else if (type === 'dashes') {
      borderStyle = 'border-dashed';
    } else {
      borderStyle = 'border-solid';
    }
    const borderDirection = orientation === 'horizontal' ? 'border-b' : 'border-r';

    return `${baseStyle} ${borderStyle} ${borderDirection}`;
  };

  return (
    <div className={`border-gray-400 ${getDividerStyles()}`} />
  );
};

export default Divider;
