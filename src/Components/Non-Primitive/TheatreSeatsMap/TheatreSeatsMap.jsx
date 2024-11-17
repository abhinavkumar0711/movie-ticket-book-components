import React from "react";
import Seats from "../Seats/Seats";

const TheatreSeatsMap = ({ availableSeats, setAvailableSeats, ticketCount, seatsSelected, setSeatsSelected, rowsInTheatre=8, columnsInTheatre=10 }) => {

  const rowsArray = Array.from({ length: rowsInTheatre }, (_, i) => String.fromCharCode(97 + i));
  const rows = rowsArray.join('');
  const cols = Array.from({ length: columnsInTheatre }, (_, i) => i + 1)

  const handleSeatClick = (seatId) => {

    if (seatsSelected.includes(seatId)) {
      setAvailableSeats((prevAvailableSeats) => ({
        ...prevAvailableSeats,
        [seatId]: 'available',
      }));
  
      const updatedSeatsSelected = seatsSelected.filter(seat => seat !== seatId);
      setSeatsSelected(updatedSeatsSelected);
      console.log(updatedSeatsSelected);
      return;
    }

    const newSeatsSelected = [...seatsSelected];
    if (newSeatsSelected.length >= ticketCount) {

      const previouslySelectedSeat = newSeatsSelected?.[0];
      setAvailableSeats((prevAvailableSeats) => ({
        ...prevAvailableSeats,
      [previouslySelectedSeat]: 'available',
      }));
      newSeatsSelected.shift();
    }
    newSeatsSelected.push(seatId);
    setSeatsSelected(newSeatsSelected);

    setAvailableSeats((prevAvailableSeats) => ({
      ...prevAvailableSeats,
      [seatId]: 'userBooked',
    }));
  };

  return (

    

    <div className="flex justify-center px-4"> 
      <div className="grid grid-cols-10 gap-1">
        {rows.split('').map((row, rowIndex) => (

          <React.Fragment key={row}>
            {cols.map((col, colIndex) => {
              const seatId = `${row}${col}`;
              const seatType = availableSeats[seatId] || 'available';

              return (
                <Seats
                  key={seatId}
                  id={seatId}
                  type={seatType}
                  onClick={() => handleSeatClick(seatId)}
                />
              );
            })}
            {rowIndex === 3 && <div className="col-span-10 h-8" />} 
          </React.Fragment>

        ))}
      </div>
    </div>
  );
};

export default TheatreSeatsMap;
