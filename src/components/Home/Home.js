import React, { useEffect, useState } from 'react';
import Slideshow from './slideshow'
import ReactPlayer from "react-player"
import president from './pics/president.jpg'
import company_image from './pics/companies.png'
import pillars from './pics/pillars.png'

const easeOutQuad = t => t * (2 - t);
const frameDuration = 1000 / 60;

const CountUpAnimation = ({ children, duration = 2000 }) => {
  const countTo = parseInt(children, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, []);

  return Math.floor(count);
};

const Home = () => {
  return (
    <div>
      <span id="home" className="homeSpan" style={{ position: 'absolute', top: '-3%' }}></span>
      <div className="Home">
        <Slideshow></Slideshow>
        <div className="president-welcome">
          <div className="heading">
            <h2 className="section-title">President's Welcome</h2>
            <hr className="hr"></hr>
          </div>
          <div className="content">
            <div className="img-name">
              <img className="img" src={president} alt=""></img>
              <h3 className="name">Krisha Monpara '22</h3>
            </div>
            <div className="welcome">
              <p className="text">On behalf of all of our members, it is my pleasure to welcome you to the official website of Phi Chi Theta at the University of Michigan. PCT is a co-ed professional business fraternity filled with driven, empathetic people. We are a diverse family of brothers and sisters that have actively committed ourselves to the betterment of each other, and the greater Michigan community.</p>
              <p className="text">The members of this organization have been a constant inspiration in my life. From the contagious drive towards excellence within distinct professional careers to the value of upperclassmen giving back to underclassmen to help them attain incredible achievements in a variety of business fields, PCT has never failed to inspire me to be the best version of myself. Ultimately, the true value of PCT is in the quality of people that make up our family. Our members are tirelessly committed to helping each other grow professionally, academically, and socially, pledge semester and beyond. Whether it be late night interview prep or even a time of emotional stress, PCT members are there to support you in any way they can. Especially in this world of uncertainty, I am proud to know that every single brother and sister in PCT will always be there for each other.</p>
              <p className="text">I hope you will continue browsing our website to learn more about who we are, what we stand for, and where you can fit in. If you have any questions, please contact me at kmonpara@umich.edu. We look forward to meeting you!</p>
              <p className="signature">Best,</p>
              <p className="signature">Krisha Monpara</p>
              <p className="signature">President - PCT Zeta Beta Class of 2022</p>
            </div>
          </div>
        </div>
        <span id='aboutUs' style={{ position: 'relative', top: '-50px' }}></span>
        <div className="about-us">
          <div className="heading">
            <h2 className="section-title">About Us</h2>
            <hr className="hr"></hr>
          </div>
          <div className="content">
            <p className="text">Phi Chi Theta (PCT) is a National Co-ed Professional Fraternity in Business and Economics. It was founded on June 16, 1924 in Chicago, Illinois. Today, the Phi Chi Theta National Chapter is comprised of 41 Collegiate and Alumni Chapters with over 23,000 members across the country.</p>
            <div className="container">
              <div className="company">
                <div className="statistics">
                  <div className="element">
                    <p className="title">Members</p>
                    <p><CountUpAnimation>110</CountUpAnimation>+</p>
                  </div>
                  <div className="element">
                    <p className="title">Majors</p>
                    <p><CountUpAnimation>110</CountUpAnimation>+</p>
                  </div>
                  <div className="element">
                    <p className="title">Full-Time Employment</p>
                    <p><CountUpAnimation>100</CountUpAnimation>%</p>
                  </div>
                </div>
                <img className="image" src={company_image}></img>
              </div>
              <ReactPlayer className="video" url="https://www.youtube.com/watch?v=BzZHfNNZFzo" controls={true} height="450px" width="800px" />
            </div>
          </div>
        </div>
        <span id="pillars"></span>
        <div className="pillars">
          <div className="heading">
            <h2 className="section-title">Pillars of PCT</h2>
            <hr className="hr"></hr>
          </div>
          <div className="content">
            <img className="pillars-img" src={pillars} preview={false}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;