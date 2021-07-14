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
    <Content>
      <Slideshow></Slideshow>
      <Row className="row-home">
        <Col className="text-col" span={24}>
          <h2 className="heading-title">President's Welcome</h2>
          <hr className="hr-title"></hr>
        </Col>
        <Col className="text-col" span={12}>
          <p className="text-president">On behalf of all of our members, it is my pleasure to welcome you to the official website of Phi Chi Theta at the University of Michigan. PCT is a co-ed professional business fraternity filled with driven, empathetic people. We are a diverse family of brothers and sisters that have actively committed ourselves to the betterment of each other, and the greater Michigan community.</p>
          <br></br>
          <p className="text-president">As a Pittsburgh, Pennsylvania native, I came to the University of Michigan not knowing anyone. I was hopeful to find strong friendships and a community that could make this large university feel like home. My experience pledging PCT as a first semester freshman led me to that and so much more. Immediately, I was surrounded by compassionate, like-minded, intelligent individuals. The exposure and support I gained from PCT allowed me to cultivate my passions and even led me to change my major from Pre-Medical Studies to Economics. Beyond that, I found my family.</p>
          <br></br>
          <p className="text-president">The members of this organization have been a constant inspiration in my life. From the contagious drive towards excellence within distinct professional careers to the value of upperclassmen giving back to underclassmen to help them attain incredible achievements in a variety of business fields, PCT has never failed to inspire me to be the best version of myself. Ultimately, the true value of PCT is in the quality of people that make up our family. Our members are tirelessly committed to helping each other grow professionally, academically, and socially, pledge semester and beyond. Whether it be late night interview prep or even a time of emotional stress, PCT members are there to support you in any way they can. Especially in this world of uncertainty, I am proud to know that every single brother and sister in PCT will always be there for each other.</p>
          <br></br>
          <p className="text-president">Thank you so much for visiting this site, and taking the time to learn more about Phi Chi Theta at the University of Michigan. I hope to see you at our upcoming rush events. Please check out our Rush page to learn more about the application process, and please do not hesitate to reach out with any questions.</p>
          <br></br>
          <p className="text-president">Wishing you and your loved ones health and happiness!</p>
          <br></br>
          <p className="text-president">Best,</p>
          <br></br>
          <p className="text-president">Krisha Monpara</p>
          <br></br>
          <p className="text-president">President - PCT Zeta Beta Class of 2022</p>
        </Col>
        <Col span={12}>
          <Image className="image-president" src={president} preview={false}></Image>
        </Col>
      </Row>
      <span id="aboutUs"></span>
      <Row className="row-home">
        <Col className="text-col" span={24}>
          <h2 className="heading-title">About Us</h2>
          <hr className="hr-title"></hr>
          <ReactMarkdown className="text-about">Phi Chi Theta is a National Coeducational Professional Fraternity in Business and Economics. Phi Chi Theta was founded on June 16, 1924 in Chicago, Illinois. The mission of Phi Chi Theta is to:

            Provide an opportunity to develop and practice those professional leadership skills and abilities necessary to succeed in the business community; Provide a local and national network to share resources, ideas and concepts; Instill in its membership those values, codes and creeds which will enable participation in a rapidly changing world: and Enable members to develop the business astuteness necessary to achieve high esteem and success in their chosen fields.

            Today, the Phi Chi Theta National Chapter is comprised of 41 Collegiate and Alumni Chapters with over 23,000 members across the country. Phi Chi Theta is a member of and affiliated with the Association to Advance Collegiate Schools of Business (AACSB), the Professional Fraternity Association (PFA), and the Professional Fraternity Executive Association (PFEA).</ReactMarkdown>
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
    </Content>
  );
}

export default Home;