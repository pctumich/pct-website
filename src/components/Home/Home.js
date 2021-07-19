import React from 'react';
import { Layout, Image, Row, Col } from 'antd';
import Slideshow from './slideshow'
// import new_members from './pics/new_members.jpg'
import president from './pics/president.jpg'
import company_image from './pics/companies.png'
import pillars from './pics/pillars.png'


const Home = () => {
  return (
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
      <span id='aboutUs'></span>
      <div className="about-us">
        <div className="heading">
          <h2 className="section-title">About Us</h2>
          <hr className="hr"></hr>
        </div>
        <div className="content">
          <p className="text">Phi Chi Theta (PCT) is a National Co-ed Professional Fraternity in Business and Economics. It was founded on June 16, 1924 in Chicago, Illinois.</p>
          <p className="text">The mission of PCT is to:</p>
          <p className="text-indent">1. Provide an opportunity to develop and practice those professional leadership skills and abilities necessary to succeed in the business community</p>
          <p className="text-indent">2. Provide a local and national network to share resources, ideas and concepts; Instill in its membership those values, codes and creeds which will enable participation in a rapidly changing world</p>
          <p className="text-indent">3. Enable members to develop the business astuteness necessary to achieve high esteem and success in their chosen fields.</p>
          <p className="text">Today, the Phi Chi Theta National Chapter is comprised of 41 Collegiate and Alumni Chapters with over 23,000 members across the country. Phi Chi Theta is a member of and affiliated with the Association to Advance Collegiate Schools of Business (AACSB), the Professional Fraternity Association (PFA), and the Professional Fraternity Executive Association (PFEA).</p>
          <img className="company-img" src={company_image}></img>
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
  );
}

export default Home;