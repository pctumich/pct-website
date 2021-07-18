import React from 'react';
import { Fade } from 'react-slideshow-image';
import './slideshow.css'
import 'react-slideshow-image/dist/styles.css'
import slide_1 from './pics/DylanPrime1.jpg'
import slide_2 from './pics/RyanToth3.jpg'
import slide_3 from './pics/IanKim.jpg'


const Slideshow = () => {
    return (
        <div>
            <div className="slide-container">
                <div className="text-container">
                    <h1 className="text-title">
                        PHI CHI THETA 
                        <hr className="text-hr"></hr>
                    </h1>
                    <h3 className="text-description">Michigan's Leading Professional Business Fraternity</h3>
                </div>
                <Fade pauseOnHover={false} duration={7000}>
                    <div className="each-fade">
                        <div>
                            <img src={slide_1} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <img src={slide_2} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <img src={slide_3} />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
};

export default Slideshow;
