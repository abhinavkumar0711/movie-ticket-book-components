import React from 'react';
import Button from '../../Primitive/Button/Button';

const Counter = ({ countObject, keyProp, setCount, direction='column' }) => {
    const count = countObject[keyProp];

    return (
        <div className={`flex items-center ${direction === 'column' ? 'flex-col space-y-4' : 'flex-row space-x-4'}`}>

            <Button
                type='counter'
                text="+"
                onClick={() => setCount({ ...countObject, [keyProp]: count + 1 })}
            />
            <span className="text-white text-xl font-semibold">{count}</span>
            <Button
                type='counter'
                text="−"
                onClick={() => setCount({ ...countObject, [keyProp]: count > 0 ? count - 1 : 0 })}
            />
        </div>
    );
};

export default Counter;
