import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = (images) => {
    const slides = images["images"]
    return (
        <div className="slideshow-container">
            <Fade pauseOnHover={false} duration={10000} arrows={false}>
                {slides.map(image => {
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

export default Slideshow;
