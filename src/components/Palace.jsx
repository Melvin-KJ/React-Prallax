import { Parallax } from 'react-parallax';
import MysorePalace from '../assets/Mysore Palace.jpg';

const Palace = () => (
  <Parallax
    className="image"
    bgImage={MysorePalace}
    bgImageAlt="Mysore Palace Image"
    strength={800}
  >
    <div className="content">
      <span className="Img-text">Taj Mahal</span>
    </div>
  </Parallax>
);

export default Palace;
