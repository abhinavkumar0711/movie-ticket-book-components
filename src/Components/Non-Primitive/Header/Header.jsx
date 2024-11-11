import Button from '../../Primitive/Button/Button'
import profileImage from '../../../assets/ProfileSection.png'
import bellIcon from '../../../assets/BellIcon.png';
import Logo from '../../Primitive/Logo/Logo';

const Header = ({ onProfileClick, onNotificationClick }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#0E0E0E] mt-5">

      <Button
        type='icon-without-border'
        image={profileImage}
        onClick={onProfileClick}
        contentClass='w-16 h-16'
        buttonClass='w-16 h-16'
      />

      <Logo size='small' />

      <Button
        type='icon-primary'
        image={bellIcon}
        onClick={onNotificationClick}
      />

    </div>
  );
};

export default Header;
