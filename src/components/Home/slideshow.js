import React from 'react';
import { Redirect } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from './pics/slide1.jpg'
import slide2 from './pics/slide2.jpg'
import slide3 from './pics/slide3.jpg'
import slide4 from './pics/slide4.jpg'
import slide5 from './pics/slide5.jpg'

const images = [slide1, slide4, slide5, slide3, slide2]

const Slideshow = () => {
    return (
        <div className="slide-container">
            <div className="text-container">
                <h1 className="text-title">
                    PHI CHI THETA 
                    <hr className="text-hr"></hr>
                </h1>
                <h3 className="text-description">Michigan's Leading Professional Business Fraternity</h3>
                <button className="text-button" onClick={() => window.open('https://bubble.io/domain_not_supported?domain=rush.pctumich.com')}>Apply Now</button>
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

export default Slideshow;
