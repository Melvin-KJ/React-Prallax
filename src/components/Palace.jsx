import { Parallax } from 'react-parallax';
import MysorePalace from '../assets/Mysore Palace.jpg';

const Palace = () => (
  <Parallax
    className="image"
    bgImage={MysorePalace}
    bgImageAlt="Mysore Palace Image"
    strength={500}
  >
    <div className="content">
      <span className="Img-text">Mysore Palace</span>
    </div>
  </Parallax>
);

export default Palace;
