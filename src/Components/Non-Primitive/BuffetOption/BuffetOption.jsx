import Counter from '../Counter/Counter'; 
import Text from '../../Primitive/Text/Text';

const BuffetOption = ({ title, subTitle, description, price, image, count, setCount }) => {
  return (
    <div className="flex justify-between bg-[black] px-4 py-4 rounded-xl space-x-4 w-full max-w-lg items-start">

      <div className={`w-[30%] h-full rounded-lg border-2 border-[#6C47DB] overflow-hidden`}>
        {image ? (
          <img src={image} className="object-cover w-full h-full" />
        ) : (
          <div className={`w-full h-full bg-gradient-to-t from-black to-[#6C47DB]`}></div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <Text type='heading-large' content={title} customClass={'block'} />
          <Text type='label' content={subTitle} customClass={'block'}/>
          <Text type='label' content={description} customClass={'block'}/>
        </div>
        <div className="mt-7">
          <Text type='default' content={'Price:'} customClass={'block'} />
          <Text type='price-medium' content={`$${price}`} />
        </div>
      </div>

      <Counter count={count} setCount={setCount} direction="column" text='' />
    </div>
  );
};

export default BuffetOption;
