import InputField from './Components/Primitive/InputField/InputField';
import Logo from './Components/Primitive/Logo/Logo';
import scrollImage from './assets/KungFuPandaPoster.png';
import backArrow from './assets/backArrow.png';
import LikeImage from './assets/Like.png';
import ScrollableList from "./Components/Primitive/ScrollableList/ScrollableList";
import Carousel from "./Components/Primitive/Carousel/Carousel";
import Header from "./Components/Non-Primitive/Header/Header";
import BottomNavigationBar from './Components/Non-Primitive/BottomNavigationBar/BottomNavigationBar';
import AboutMovie from './Components/Non-Primitive/AboutMovie/AboutMovie';
import { useState } from 'react';
import ModalOptions from './Components/Primitive/ModalOptions/ModalOptions';
import PageProgressIndicator from './Components/Non-Primitive/PageProgressIndicator/PageProgressIndicator';
import Counter from './Components/Non-Primitive/Counter/Counter';
import BuffetOption from './Components/Non-Primitive/BuffetOption/BuffetOption';
import Button from './Components/Primitive/Button/Button';
import TicketSummary from './Components/Non-Primitive/TicketSummary/TicketSummary';
import Divider from './Components/Primitive/Divider/Divider';
import Screen from './assets/TheatreScreen.png';
import TheatreSeatsMap from './Components/Non-Primitive/TheatreSeatsMap/TheatreSeatsMap';
import FeatureInProgress from './Components/Primitive/FeatureInProgress/FeatureInProgress'
import profileImage from './assets/ProfileSection.png'
import Text from './Components/Primitive/Text/Text';

function Test() {

  const imgObj = [scrollImage, scrollImage, scrollImage, scrollImage, scrollImage, scrollImage, scrollImage]
  const [modalOpen, setModalOpen] = useState(false);
  const onModalClose = (selectedOption) => {
    setModalOpen(false);
  }
  const availableSeatsMap = {
    a1: 'available', a2: 'available', a3: 'booked', a4: 'available', a5: 'booked', a6: 'available', a7: 'available', a8: 'booked', a9: 'booked', a10: 'available',
    b1: 'booked', b2: 'available', b3: 'booked', b4: 'available', b5: 'available', b6: 'available', b7: 'booked', b8: 'available', b9: 'booked', b10: 'available',
    c1: 'available', c2: 'available', c3: 'booked', c4: 'available', c5: 'booked', c6: 'available', c7: 'available', c8: 'booked', c9: 'booked', c10: 'available',
    d1: 'booked', d2: 'available', d3: 'booked', d4: 'available', d5: 'available', d6: 'booked', d7: 'available', d8: 'available', d9: 'booked', d10: 'available',
    e1: 'available', e2: 'available', e3: 'booked', e4: 'available', e5: 'booked', e6: 'available', e7: 'available', e8: 'booked', e9: 'booked', e10: 'available',
    f1: 'booked', f2: 'available', f3: 'booked', f4: 'available', f5: 'available', f6: 'booked', f7: 'available', f8: 'available', f9: 'booked', f10: 'available',
    g1: 'available', g2: 'available', g3: 'booked', g4: 'available', g5: 'booked', g6: 'available', g7: 'available', g8: 'booked', g9: 'booked', g10: 'available',
    h1: 'booked', h2: 'available', h3: 'booked', h4: 'available', h5: 'available', h6: 'booked', h7: 'available', h8: 'available', h9: 'booked', h10: 'available',

  };
  const [count, setCount] = useState(0);
  const [availableSeats, setAvailableSeats] = useState(availableSeatsMap);
  const [seatsSelected, setSeatsSelected] = useState([]);
  const [currentTab, setCurrentTab] = useState('home')
  const [buffetObject, setBuffetObject] = useState({ 'large': 4, 'small': 1, 'medium': 3 });

  const heartClicked = () => {
    setCurrentTab('favorites');
  }

  const doSomething = () => {
    console.log('printing 1 correctly');
  }

  return (
    <div className="relative h-screen max-w-[450px] mx-auto bg-gradient-to-b from-[#0a0712] via-[#06000ecc] to-[#000000] blur-[12.6] overflow-y-auto no-doc-scroll scrollbar-hide flex flex-col px-2 rounded-3xl scroll mb-20">

      <Header />
      {/* <FeatureInProgress onBackClick={doSomething} /> */}

      <TheatreSeatsMap
           availableSeats={availableSeats}
           setAvailableSeats={setAvailableSeats}
           ticketCount={3}
           seatsSelected={seatsSelected}
           setSeatsSelected={setSeatsSelected}
         />

      <TicketSummary
        movieName={'kung fu pands'}
        ticketCount={{ adult: 2, children: 1 }}
        ticketAmount={200}
        selectedBuffetItems={{ large: 4, medium: 0, doubleMedium: 3, small:5 }}
        selectedBuffetAmount={100}
        seatNumbers={['a1', 'a2']}
        theatreName={'kung fu pands'}
        totalAmount={2390}
        sessionTime={`9-10 PM`}
      />
      <Carousel imageArray={imgObj} category={'highlights'} onImageClick={() => console.log('Tsext 123')} />

        <div className='flex flex-row justify-center gap-x-5 bg-black p-5'>
            <Counter count={count} setCount={setCount} direction='row'/>
                <Divider orientation='vertical' />
            <Counter count={count} setCount={setCount} direction='row'/>
        </div>
      <ScrollableList imagesObject={imgObj} category={'New Movies'} />

      <AboutMovie title='Kung Fu Panda' rating={5} imdbRating='8.5' studio='animation studio' />

      <ModalOptions isOpen={modalOpen} onClose={onModalClose} options={['1', '2', '3', '4', '5', '8', '10']} />
      <button
        className='text-red-600'
        onClick={() => {
          console.log('im getting called')
          setModalOpen(true);
        }}>Click Me</button>

      <BuffetOption
        title='Food Option1'
        subTitle='fries + softdrink'
        description='family meal which includes ...'
        price={30}
        image={scrollImage}
        count={count}
        setCount={setCount}
      />


      {/* <FeatureInProgress /> 
      <Text type='cusom' customClass={'text-red-500'} content='hello world' />
      <InputField type='text' placeholderText='sadfasdf' /> */}

      {/* 
      
      <Button type='secondary' disabled={false} arrow={true} text={'+'} buttonClass='ml-10 mr-10' />
      <Button type='primary' />
          
          <Counter count={count} setCount={setCount} direction='column' />
          <PageProgressIndicator currentPage={2} totalPages={2}/>
          <ScrollableList category='Latest Movies' imagesObject={imgObj}/>
          <ScrollableList category='Highly Watched' imagesObject={imgObj}/>
          <MovieTitle title='Kung Fu Panda' rating='5' imdbRating='8.5' studio='animation studio'/>

          
          
        

          */}

      <BottomNavigationBar onHeartClick={heartClicked} currentTab={currentTab} />


    </div>

  );
}

export default Test;