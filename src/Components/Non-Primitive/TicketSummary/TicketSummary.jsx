import React from 'react';
import Divider from '../../Primitive/Divider/Divider';
import Text from '../../Primitive/Text/Text';

const TicketSummary = ({
    movieName,
    ticketCount,
    ticketAmount,
    selectedBuffetItems,
    selectedBuffetAmount,
    seatNumbers,
    theatreName,
    totalAmount,
    sessionTime
}) => {
    const formattedTicketCount = Object.entries(ticketCount)
        .map(([type, count]) => `${count} ${type}`)
        .join(', ');
    const formattedBuffetItems = Object.entries(selectedBuffetItems)
        .map(([item, count]) => `${count} ${item}`)
        .join(', ');
    const formattedSeatNumbers = seatNumbers.join(', ');

    return (
        <div className="bg-[#000000] p-6 rounded-lg max-w-[400px] text-white flex">
            <div className="flex-[0.7] space-y-3">
                <Text type="label" content={`Movie: ${movieName}`} customClass="block" />
                
                <Text 
                    type="label-bold" 
                    content={`Ticket Count: ${formattedTicketCount}`} 
                    customClass="block"
                />
                
                <Text 
                    type="label-bold" 
                    content={` ($${ticketAmount})`} 
                    customClass="text-green-400 inline" 
                />

                <Text type="label" content={`Session: ${sessionTime}`} customClass="block" />

                <Text 
                    type="label-bold" 
                    content={`Seat Number: ${formattedSeatNumbers}`} 
                    customClass="block"
                />

                <Text 
                    type="label" 
                    content={`Buffet Products: ${formattedBuffetItems}`} 
                    customClass="block"
                />

                <Text 
                    type="label-bold" 
                    content={` ($${selectedBuffetAmount})`} 
                    customClass="text-green-400 inline" 
                />

                <Text 
                    type="label" 
                    content={`Movie Theater: ${theatreName}`} 
                    customClass="block"
                />
            </div>

            <Divider type="dashes" orientation="vertical" />

            <div className="flex-[0.3] flex flex-col items-center justify-center text-right ml-1">
                <Text type="label-bold" content="Total Amount" customClass="block" />
                <Text type="price-medium" content={`$${totalAmount}`} customClass="block" />
            </div>
        </div>
    );
};

export default TicketSummary;
