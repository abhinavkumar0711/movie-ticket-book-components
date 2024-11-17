import React from 'react';
import Button from '../../Primitive/Button/Button';

const Counter = ({ count, setCount, direction = 'column', text='Adult' }) => {
    
    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        setCount(Math.max(count - 1, 0)); 
    };

    return (
        <div className={`flex items-center ${direction === 'column' ? 'flex-col space-y-4' : 'flex-row space-x-4'}`}>

            <Button
                type='counter'
                text="+"
                onClick={incrementCount}
            />
            <div className='flex flex-col justify-center items-center'>
                <span className="text-white text-xl font-semibold block">{count}</span>
                <span className="text-white text-xl font-semibold block">{text}</span>

            </div>
            <Button
                type='counter'
                text="−"
                onClick={decrementCount}
            />
        </div>
    );
};

export default Counter;
