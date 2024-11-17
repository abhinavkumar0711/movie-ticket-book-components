import { useEffect, useState } from 'react';
import Text from '../Text/Text';
import Button from '../Button/Button';

const Carousel = ({ imageArray, category, interval = 3000, onImageClick }) => {

    const [currIndx, setCurrIndx] = useState(0);

    useEffect(() => {

        const autoScroll = setInterval(() => {
            setCurrIndx((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, interval);

        return () => clearInterval(autoScroll);
    }, []);

    return (
        <div className="p-4">

            <div className="flex items-center justify-between mb-3">
                <Text type='heading' content={category} />
            </div>

            <div className="w-full overflow-hidden rounded-lg">

                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currIndx * 100}%)` }} >
                    {imageArray.map((image, index) => (
                        <div key={index} className="min-w-full flex justify-center">
                            <img
                                src={image}
                                className="w-full h-64 object-cover rounded-lg"
                                onClick={() => onImageClick()}
                            />
                        </div>
                    ))}
                </div>

                <div className="bottom-2 left-0 right-0 flex justify-center space-x-2 mt-2">

                    {imageArray.map((_, index) => (
                        <Button
                            key={index}
                            type='custom'
                            onClick={() => setCurrIndx(index)}
                            text=''
                            buttonClass={`w-2 h-2 rounded-full ${currIndx === index ? 'bg-white' : 'bg-gray-500'}`}
                        ></Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
