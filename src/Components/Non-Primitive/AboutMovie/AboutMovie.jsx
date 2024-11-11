import RatedStar from '../../../assets/RatedStar.png';
import UnratedStar from '../../../assets/UnRatedStar.png';
import ImdbLogo from '../../../assets/IMDBRating.png';
import Text from '../../Primitive/Text/Text';

const AboutMovie = ({ title, studio, rating, imdbRating }) => {
    const totalStars = 5;
    rating = parseInt(rating);
    const filledStars = Math.floor(rating);
    const emptyStars = totalStars - filledStars;

    return (
        <div className='p-4 text-white bg-[#1A1A1A] rounded-lg w-full max-w-xs'>

            <Text type='heading-large' content={title} />
            <Text type='label' content={studio} customClass={'block'} />

            <div className="flex mt-2 items-center">
                {[...Array(filledStars)].map((_, index) => (
                    <img key={`filled-${index}`} src={RatedStar} alt="Rated star" className="w-4 h-4" />
                ))}
                {[...Array(emptyStars)].map((_, index) => (
                    <img key={`empty-${index}`} src={UnratedStar} alt="Unrated star" className="w-4 h-4" />
                ))}
                <Text type='default' content={rating} customClass={'ml-2'}/>
            </div>

            <div className="flex items-center mt-2">
                <img src={ImdbLogo} alt="IMDb logo" className="w-10 h-5 mr-2" />
                <Text type='default' content={imdbRating} />
            </div>
        </div>
    );
};

export default AboutMovie;
