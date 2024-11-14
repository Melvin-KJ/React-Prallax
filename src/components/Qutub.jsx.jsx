 import { Parallax } from 'react-parallax';
 import Qutub from '../assets/qutub minar.jpg';

 const QutubMinar = () => (
   <Parallax
     className="image"
     bgImage={Qutub}
     bgImageAlt="Qutub Minar Image"
     strength={600}
   >
     <div className="content">
       <span className="Img-text">Qutub Minar</span>
     </div>
   </Parallax>
 );

 export default QutubMinar;
