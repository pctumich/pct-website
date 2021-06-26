import React from 'react';
import { Fade } from 'react-slideshow-image';
import './slideshow.css'
import 'react-slideshow-image/dist/styles.css'
import slide_1 from './pics/DylanPrime1.jpg'
import slide_2 from './pics/RyanToth3.jpg'
import slide_3 from './pics/IanKim.jpg'


const Slideshow = () => {
    return (
        <div className="slide-container">
            <Fade>
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
    )
};

export default Slideshow;
