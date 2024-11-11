import logo from '../../../assets/logo.png';

function Logo({ size = 'medium' }) {
    
  const getClassName = () => {

    switch (size) {
      case 'small':
        return 'w-20 h-15'; 
      case 'medium':
        return 'w-25 h-20'; 
      case 'large':
        return 'w-36 h-24'; 
      default:
        return 'w-20 h-20'; 
    }
  };

  return (
    <img
      src={logo}
      className={`max-w-36 ${getClassName()}`}
    />
  );
}

export default Logo;
