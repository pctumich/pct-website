import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const SlideshowMobile = (images) => {
    const slides = images["images"]
    return (
        <div className="w-11/12 h-48 mx-auto">
            <Fade pauseOnHover={false} duration={10000} arrows={false}>
                {slides.map(image => {
                    return (
                        <div className="flex-auto w-full">
                            <div class="w-full h-1/5 overflow-hidden relative bg-white">
                                <img class="h-48 mx-auto" src={image} alt="" /> 
                                {/* absolute text-center w-full h-full m-0 object-cover */}
                            </div>
                        </div>
                    )
                })}
            </Fade>
        </div>
    )
};

export default SlideshowMobile;
