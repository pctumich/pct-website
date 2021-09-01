import React from 'react';
import { Redirect } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from './pics/slide1.jpg'
import slide2 from './pics/slide2.jpg'
import slide3 from './pics/slide3.jpg'
import slide4 from './pics/slide4.jpg'
import slide5 from './pics/slide5.jpg'
import slide6 from './pics/slide6.jpg'

const images = [slide1, slide4, slide6, slide5, slide3, slide2]

const Slideshow = () => {
    return (
        <div className="slide-container">
            <div className="text-container">
                <h1 className="text-title">
                    PHI CHI THETA 
                    <hr className="text-hr"></hr>
                </h1>
                <h3 className="text-description">Michigan's Leading Professional Business Fraternity</h3>
                <button className="text-button" onClick={() => window.open('https://rush.pctumich.com/')}>Apply Now</button>
            </div>
            <Fade pauseOnHover={false} duration={5000} arrows={false}>
                {images.map(image => {
                        return (
                            <div className="each-fade">
                                <div>
                                    <img src={image} alt="" />
                                </div>
                            </div>
                        )
                    })}
            </Fade>
        </div>
    )
};


// const Slideshow = () => {
//     return (
//         <div class="shadow-2xl relative w-auto h-60">
//             <div class="absolute font-serif z-40 top-2/4 left-2/4 leading-5">
//                 <h1 class="text-6xl font-bold text-white">
//                     PHI CHI THETA 
//                     <hr class="h-3 text-white bg-white"></hr>
//                 </h1>
//                 <h3 class="text-color text-center text-lg">Michigan's Leading Professional Business Fraternity</h3>
//                 <button class="text-button" onClick={() => window.open('https://bubble.io/domain_not_supported?domain=rush.pctumich.com')}>Apply Now</button>
//             </div>
//             <Fade pauseOnHover={false} duration={5000} arrows={false}>
//                 {images.map(image => {
//                         return (
//                             <div class="w-screen flex-auto">
//                                 <div class="relative bg-white shadow-2xl">
//                                     <img class="absolute text-center w-full h-full" src={image} alt="" />
//                                 </div>
//                             </div>
//                         )
//                     })}
//             </Fade>
//         </div>
//     )
// };

export default Slideshow;
