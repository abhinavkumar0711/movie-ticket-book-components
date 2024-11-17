const Seats = ({ id, type, onClick }) => {
  
    const onSeatClick = () => {
        type === 'available' || 'userBooked' ? onClick(id) : null;
    }

    const getSeatStyles = () => {
    switch (type) {
      case 'available':
        return 'bg-gray-500 cursor-pointer';
      case 'booked':
        return 'bg-[#6C47DB] cursor-not-allowed';
      case 'userBooked':
        return 'bg-[#C66E1D] cursor-pointer';
      default:
        return '';
    }
  };

  return (
    <div
      id={id}
      className={`w-8 h-8 m-1 rounded ${getSeatStyles()}`}
      onClick={onSeatClick}
    />
  );
};

export default Seats;
