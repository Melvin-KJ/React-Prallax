import { Parallax } from 'react-parallax';
import TajMahal from '../assets/Taj Mahal.jpg'

const TajImage = () => (
  <Parallax
    className='image'
    bgImage={TajMahal}
    bgImageAlt="Taj Mahal Image"
    strength={500}
  >
   <div className='content'>
    <span className='Img-text'>
        Taj Mahal 
    </span>
   </div>
  </Parallax>
);

export default TajImage;