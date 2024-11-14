import './App.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

import './styles/styles.css'

import Navbar from './components/Navbar.jsx';
import TajImage from './components/Taj.jsx';
import Palace from './components/Palace.jsx';
import QutubMinar from './components/Qutub.jsx';
import Arrow from './components/Arrow.jsx';

import Textbox1 from './components/Textbox1';
import Textbox2 from './components/Textbox2';
import Textbox3 from './components/Textbox3';
import Textbox4 from './components/Textbox4';
import GoldenTemple from './components/Temple.jsx';

function App() {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      {/* Taj Mahal Component */}
      <TajImage />
      <Textbox1 />
      {/* Mysroe Palace Component */}
      <Palace />
      <Textbox2 />
      {/* Golden Temple */}
      <GoldenTemple />
      <Textbox3 />
      {/* Qutub Minar */}
      <QutubMinar />
      <Textbox4 />
      {/* Arrow scroll to top component */}
      <Arrow />
      {/* Slider from swiper-react-parallax components */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide className='slide1'>India Gate</SwiperSlide>
        <SwiperSlide className='slide2'>Red Fort</SwiperSlide>
        <SwiperSlide className='slide3'>Hampi</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
