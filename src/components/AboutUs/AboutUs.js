import React from 'react';
import { Layout, Row, Col, Image } from 'antd';
import ReactMarkdown from 'react-markdown'
import ReactPlayer from "react-player"
import './AboutUs.css'
import PCTLogo from './pics/AboutUs.jpg'
const { Content } = Layout;

const AboutUs = () => {
  return (
    <Content className="content">
      <span id="pct" className="pct"></span>
      <Row>
        <Col className="text-about-col" span={11}>
        <h2 className="heading">About Phi Chi Theta</h2>
          <ReactMarkdown className="text-about">Phi Chi Theta is a National Coeducational Professional Fraternity in Business and Economics. Phi Chi Theta was founded on June 16, 1924 in Chicago, Illinois. The mission of Phi Chi Theta is to:

            Provide an opportunity to develop and practice those professional leadership skills and abilities necessary to succeed in the business community; Provide a local and national network to share resources, ideas and concepts; Instill in its membership those values, codes and creeds which will enable participation in a rapidly changing world: and Enable members to develop the business astuteness necessary to achieve high esteem and success in their chosen fields.

            Today, the Phi Chi Theta National Chapter is comprised of 41 Collegiate and Alumni Chapters with over 23,000 members across the country. Phi Chi Theta is a member of and affiliated with the Association to Advance Collegiate Schools of Business (AACSB), the Professional Fraternity Association (PFA), and the Professional Fraternity Executive Association (PFEA).</ReactMarkdown>
        </Col>
        <Col className="pctlogo-col" span={11}>
          <Image src={PCTLogo} preview={false}></Image>
        </Col>
      </Row>
      <span id="fraternity-video" className="fraternity-video"></span>
      <h2 className="heading">PCT At Michigan</h2>
      <Col className="video-col">
        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=9eBxa_B8EO8"/>
      </Col>
      <span id="pillars" className="pillars">Pillars</span>
      {/* Opportunity to do something cooooool here with the UI */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Content>
  );
}

export default AboutUs;