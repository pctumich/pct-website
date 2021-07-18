import React from 'react';
import { Layout, Image, Row, Col } from 'antd';
import Slideshow from './slideshow'
import ReactMarkdown from 'react-markdown'
import './Home.css'
// import new_members from './pics/new_members.jpg'
import president from './pics/president.jpg'
import company_image from './pics/companies.png'
import pillars from './pics/pillars.png'

const { Content } = Layout;


const Home = () => {
  return (
    <div>
      <Slideshow></Slideshow>
      <Row className="row-home">
        <Col className="text-col" span={24}>
          <h2 className="heading-title">President's Welcome</h2>
          <hr className="hr-title"></hr>
        </Col>
        <Col span={12}>
          <Image className="image-president" src={president} preview={false}></Image>
          <h3 className="name-president">Krisha Monpara '22</h3>
        </Col>
        <Col className="text-col" span={12}>
        <p className="text-president">On behalf of all of our members, it is my pleasure to welcome you to the official website of Phi Chi Theta at the University of Michigan. PCT is a co-ed professional business fraternity filled with driven, empathetic people. We are a diverse family of brothers and sisters that have actively committed ourselves to the betterment of each other, and the greater Michigan community.</p>
          <p className="text-president">The members of this organization have been a constant inspiration in my life. From the contagious drive towards excellence within distinct professional careers to the value of upperclassmen giving back to underclassmen to help them attain incredible achievements in a variety of business fields, PCT has never failed to inspire me to be the best version of myself. Ultimately, the true value of PCT is in the quality of people that make up our family. Our members are tirelessly committed to helping each other grow professionally, academically, and socially, pledge semester and beyond. Whether it be late night interview prep or even a time of emotional stress, PCT members are there to support you in any way they can. Especially in this world of uncertainty, I am proud to know that every single brother and sister in PCT will always be there for each other.</p>
          <p className="text-president">I hope you will continue browsing our website to learn more about who we are, what we stand for, and where you can fit in. If you have any questions, please contact me at kmonpara@umich.edu. We look forward to meeting you!</p>
          <p className="text-president-signature">Best,</p>
          <p className="text-president-signature">Krisha Monpara</p>
          <p className="text-president-signature">President - PCT Zeta Beta Class of 2022</p>
        </Col>
      </Row>
      <span id="aboutUs"></span>
      <Row className="row-home">
        <Col className="text-col" span={24}>
          <h2 className="heading-title">About Us</h2>
          <hr className="hr-title"></hr>
          <p className="text-about">Phi Chi Theta (PCT) is a National Co-ed Professional Fraternity in Business and Economics. It was founded on June 16, 1924 in Chicago, Illinois.</p> 
          <p className="text-about">The mission of PCT is to:</p>
          <p className="text-about-indent">1. Provide an opportunity to develop and practice those professional leadership skills and abilities necessary to succeed in the business community</p>
          <p className="text-about-indent">2. Provide a local and national network to share resources, ideas and concepts; Instill in its membership those values, codes and creeds which will enable participation in a rapidly changing world</p>
          <p className="text-about-indent">3. Enable members to develop the business astuteness necessary to achieve high esteem and success in their chosen fields.</p>
          <p className="text-about">Today, the Phi Chi Theta National Chapter is comprised of 41 Collegiate and Alumni Chapters with over 23,000 members across the country. Phi Chi Theta is a member of and affiliated with the Association to Advance Collegiate Schools of Business (AACSB), the Professional Fraternity Association (PFA), and the Professional Fraternity Executive Association (PFEA).</p>
          <Image className="image-company" src={company_image} preview={false}></Image>
        </Col>
      </Row>
      <span id="pillars"></span>
      <Row className="row-home">
        <Col className="text-col" span={24}>
          <h2 className="heading-title">Pillars of PCT</h2>
          <hr className="hr-title"></hr>
          <Image className="image-company" src={pillars} preview={false}></Image>
        </Col>
      </Row>
    </div>
  );
}

export default Home;