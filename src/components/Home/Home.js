import React, { Component } from 'react';
import Slideshow from './slideshow'
import ReactPlayer from "react-player"
import president from './pics/president.jpg'
import company_image from './pics/companies.png'
import pillars from './pics/pillars.png'
import { Card } from 'antd'
import ImageMapper from 'react-img-mapper'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import members from './statsPics/pic1.jpg'
import employment from './statsPics/option3.jpg'
import majors from './statsPics/option4.jpg'
import ScrollTrigger from 'react-scroll-trigger';


// import one from './aboutUsPics/1.JPG'
// import two from './aboutUsPics/2.JPG'
// import three from './aboutUsPics/3.JPG'
// import four from './aboutUsPics/4.JPG'
// import five from './aboutUsPics/5.JPG'
// import six from './aboutUsPics/6.JPG'
// import seven from './aboutUsPics/7.JPG'
// import eight from './aboutUsPics/8.JPG'
// import nine from './aboutUsPics/9.JPG'
// import ten from './aboutUsPics/10.JPG'
// import eleven from './aboutUsPics/11.JPG'
// import twelve from './aboutUsPics/12.JPG'
// import thirteen from './aboutUsPics/13.JPG'
// import fourteen from './aboutUsPics/14.JPG'
// import fifteen from './aboutUsPics/15.JPG'
// import sixteen from './aboutUsPics/16.JPG'

// const aboutUsPics = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      firstTime: true
    };
  }


  render() {
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
              <div className="stat-container">
                <div className="element">
                  <ScrollTrigger className="num-info" onEnter={() => this.setState({ visible: true })} onExit={() => this.setState({ visible: false, firstTime: false })}>
                    {this.state.visible && this.state.firstTime &&
                      <CountUp end={110} start={0} suffix="+" duration={2} />
                    }
                    {!this.state.firstTime &&
                      <p style={{ margin: "0" }}>110+</p>
                    }
                    <p style={{ fontSize: "30px" }}>Members</p>
                  </ScrollTrigger>
                  <img className="image" src={members} alt="" preview={false}></img>
                </div>
                <div className="element">
                  <ScrollTrigger className="num-info" onEnter={() => this.setState({ visible: true })} onExit={() => this.setState({ visible: false, firstTime: false })}>
                    {this.state.visible && this.state.firstTime &&
                      <CountUp end={35} start={0} suffix="+" duration={2} />
                    }
                    {!this.state.firstTime &&
                      <p style={{ margin: "0" }}>35+</p>
                    }
                    <p style={{ fontSize: "30px" }}>Majors</p>
                  </ScrollTrigger>
                  <img className="image" src={majors}></img>
                </div>
                <div className="element">
                  <ScrollTrigger className="num-info" onEnter={() => this.setState({ visible: true })} onExit={() => this.setState({ visible: false, firstTime: false })}>
                    {this.state.visible && this.state.firstTime &&
                      <CountUp end={100} start={0} suffix="%" duration={2} />
                    }
                    {!this.state.firstTime &&
                      <p style={{ margin: "0" }}>100%</p>
                    }
                    <p style={{ fontSize: "30px" }}>Full-Time Employment</p>
                  </ScrollTrigger>
                  <img className="image" src={employment}></img>
                </div>
              </div>
              <ReactPlayer className="video" url="https://www.youtube.com/watch?v=BzZHfNNZFzo" controls={true} height="450px" width="800px" />
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
    )
  }
}

export default Home;