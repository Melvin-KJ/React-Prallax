import { Parallax } from 'react-parallax';
import Temple from '../assets/Golden Temple.jpg';

const GoldenTemple = () => (
  <Parallax
    className="image"
    bgImage={Temple}
    bgImageAlt="GoldenTemple Image"
    strength={500}
  >
    <div className="content">
      <span className="Img-text">GoldenTemple</span>
    </div>
  </Parallax>
);

export default GoldenTemple;
