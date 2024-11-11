import LikeIcon from '../../../assets/Like.png';
import HomeIcon from '../../../assets/HomeIcon.png';
import TicketsIcon from '../../../assets/ticket.png';
import Button from '../../Primitive/Button/Button';

const BottomNavigationBar = ({ onHeartClick, onHomeClick, onTicketClick, currentTab='home' }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-[450px] bg-black bg-opacity-60 backdrop-blur-xl py-4 flex justify-around items-center h-16 rounded-l-full rounded-r-full overflow-hidden">
      <Button 
        type={currentTab === 'favorites' ? `icon-primary` : 'icon-without-border'}
        image={LikeIcon}
        onClick={onHeartClick} 
      />
      <Button 
        type={currentTab === 'home' ? `icon-primary` : 'icon-without-border'}
        image={HomeIcon}
        onClick={onHomeClick} 
      />
      <Button 
        type={currentTab === 'tickets' ? `icon-primary` : 'icon-without-border'}
        image={TicketsIcon}
        onClick={onTicketClick} 
      />
    </div>
  );
};

export default BottomNavigationBar;
