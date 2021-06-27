import React from 'react';
import { Layout, Col, Row, Image } from 'antd';
import './Leadership.css'
import elPrez from './pics/Krisha.jpg'
import vpi from './pics/Jason.jpg'
import vpx from './pics/Theo.jpg'
import vpf from './pics/Ian.jpg'
import vpOp1 from './pics/Jack.jpg'
import vpOp2 from './pics/Josie.jpg'
import marketing1 from './pics/Michaela.jpg'
// import marketing2 from './pics/Chin.jpg'
// import alumni from './pics/Linh.jpg'
// import community1 from './pics/Anjali.jpg'
// import community2 from './pics/Sahaja.jpg'
// import fundraising1 from './pics/Carly.jpg'
// import fundraising2 from './pics/Katie.jpg'
// import IR1 from './pics/Yaz.jpg'
// import IR2 from './pics/Ava.jpg'
// import Member1 from './pics/Jajoo.jpg'
// import Member2 from './pics/Erik.jpg'
// import Social1 from './pics/Spiro.jpg'
import Social2 from './pics/Adi.jpg'
import Parent from './pics/Jharna.jpg'
// import Prof1 from './pics/Spencer.jpg'
import Prof2 from './pics/Anne.jpg'
import Academic1 from './pics/Alexa.jpg'
// import Academic2 from './pics/Mia.jpg'
import DEI1 from './pics/Jeevin.jpg'
// import DEI2 from './pics/Audrey.jpg'
import tech1 from './pics/Ryan.jpg'
// import tech2 from './pics/Ant.jpg'
// import wellness1 from './pics/Aakash.jpg'
import wellness2 from './pics/Sarah.jpg'


const { Content } = Layout;

const Leadership = () => {
    return (
      <Content className="content">
          <span id="executive-board" className="executive-board"></span>
          <h1 className="heading">Executive Board</h1>
          <Row className="leadership-row">
            <Col className="leadership-col" span={8}>
              <Image className="image" src={elPrez} preview={false}></Image>
              <h2 className="board-name">Krisha Monpara</h2>
              <h4 className="board-position">President</h4>
              <p className="board-bio">Krisha is a junior studying Economics. From Pittsburgh, Pennsylvania, she enjoys running, playing the piano, and spending time with her friends and family. Her internship experience includes Wealth Management at Cetera Financial Investors, the Women’s Advisory Program in Global Investment Banking at RBC, and as an incoming Financial Analyst at Amazon in Seattle.</p>
            </Col>
            <Col className="leadership-col" span={8}>
              <Image className="image" src={vpi} preview={false}></Image>
              <h2 className="board-name">Jason Stahlman</h2>
              <h4 className="board-position">VP Internal</h4>
              <p className="board-bio">Jason is a junior studying Business from Twinsburg, Ohio. He enjoys playing and watching a variety of sports, listening to music, and hanging out with friends. In past summers he has interned in corporate finance and strategy. This upcoming summer he will be interning in Investment Banking at Lincoln International. </p>
            </Col>
            <Col className="leadership-col" span={8}>
              <Image className="image" src={vpx} preview={false}></Image>
              <h2 className="board-name">Theo Kardasis</h2>
              <h4 className="board-position">VP External</h4>
              <p className="board-bio">Theo, originally from Rochester, MI, is a junior in the School of Information studying Data Analysis and minoring in Business and Spanish. In his free time, he loves to hike, cook, and watch YouTube. His past internship experiences lie within strategy and insights, and he will be interning as a Digital Analytics Intern at American Express this coming summer. </p>
            </Col>
          </Row>
          <Row className="leadership-row">
            <Col className="leadership-col" span={8}>
              <Image className="image" src={vpf} preview={false}></Image>
              <h2 className="board-name">Ian Kim</h2>
              <h4 className="board-position">VP Finance</h4>
              <p className="board-bio">Ian is a junior studying Industrial and Operations Engineering. Originally from Westford, Massachusetts, Ian enjoys watching Boston Sports, cooking, running and spending time with friends. In past summers, Ian has worked for T-Mobile in Germany, and for a supply chain startup in Chicago. This summer he will be working in Tech Consulting as a Summer Associate at Gartner.</p>
            </Col>
            <Col className="leadership-col" span={8}>
              <Image className="image" src={vpOp1} preview={false}></Image>
              <h2 className="board-name">Jack Xiao</h2>
              <h4 className="board-position">VP Operations</h4>
              <p className="board-bio">Jack is a sophomore studying Business and Computer Science. He is from Lincolnshire, Illinois and enjoys playing basketball, golf, and watching Chicago sports. He is working at Jansen Investments in Chicago and has an interest in Investment Banking.</p>
            </Col>
            <Col className="leadership-col" span={8}>
              <Image className="image" src={vpOp2} preview={false}></Image>
              <h2 className="board-name">Josie Bachus</h2>
              <h4 className="board-position">VP Operations</h4>
              <p className="board-bio">Josephine is a sophomore studying Business and Psychology from Flossmoor, Illinois. She enjoys reading mystery novels, trips to the thrift store, and hanging out with her dog, as well as hanging out with her friends. She is interested in the intersection of business and psychology with a focus in consulting.</p>
            </Col>
          </Row >
          <span id="directors" className="directors"></span>
          <h1 className="heading">Directors</h1>
          <Row className="leadership-row">
            <Col className="leadership-col" span={6}>
              <Image className="image" src={Parent} preview={false}></Image>
              <h2 className="director-name">Jharna Tripathi</h2>
              <h4 className="director-position">Director of New Member Engagement</h4>
            </Col>
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={alumni} preview={false}></Image>
              <h2 className="director-name">Linh Phan</h2>
              <h4 className="director-position">Director of Alumni Relations</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={Prof1} preview={false}></Image>
              <h2 className="director-name">Spencer Semple</h2>
              <h4 className="director-position">Director of Professional Development</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              <Image className="image" src={Prof2} preview={false}></Image>
              <h2 className="director-name">Anne Early</h2>
              <h4 className="director-position">Director of Professional Development</h4>
            </Col>
          </Row>
          <Row className="leadership-row">
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={Member1} preview={false}></Image>
              <h2 className="director-name">Aakash Jajoo</h2>
              <h4 className="director-position">Director of Member Engagement</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={Member2} preview={false}></Image>
              <h2 className="director-name">Erik Whilborn</h2>
              <h4 className="director-position">Director of Member Engagement</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              <Image className="image" src={Academic1} preview={false}></Image>
              <h2 className="director-name">Alexa Finuoli</h2>
              <h4 className="director-position">Academic Director</h4>
            </Col>
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={Academic1} preview={false}></Image>
              <h2 className="director-name">Mia Vuckovic</h2>
              <h4 className="director-position">Academic Director</h4> */}
            </Col>
          </Row>
          <Row className="leadership-row">
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={wellness1} preview={false}></Image>
              <h2 className="director-name">Aakash Menon</h2>
              <h4 className="director-position">Director of Member Wellness</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              <Image className="image" src={wellness2} preview={false}></Image>
              <h2 className="director-name">Sarah Morris</h2>
              <h4 className="director-position">Director of Member Wellness</h4>
            </Col>
            <Col className="leadership-col" span={6}>
              <Image className="image" src={DEI1} preview={false}></Image>
              <h2 className="director-name">Jeevin Singh</h2>
              <h4 className="director-position">Director of Diversity, Equity, and Inclusion</h4>
            </Col>
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={DEI2} preview={false}></Image>
              <h2 className="director-name">Audrey Thedford</h2>
              <h4 className="director-position">Director of Diversity, Equity, and Inclusion</h4> */}
            </Col>
          </Row>
          <Row className="leadership-row">
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={IR1} preview={false}></Image>
              <h2 className="director-name">Yasmine Zadeh</h2>
              <h4 className="director-position">Director of Internal Relations</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={IR2} preview={false}></Image>
              <h2 className="director-name">Ava Ben-David</h2>
              <h4 className="director-position">Director of Internal Relations</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={Social1} preview={false}></Image>
              <h2 className="director-name">Spiro Kass</h2>
              <h4 className="director-position">Director of Social Engagement</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              <Image className="image" src={Social2} preview={false}></Image>
              <h2 className="director-name">Adi Middha</h2>
              <h4 className="director-position">Director of Social Engagement</h4>
            </Col>
          </Row>
          <Row className="leadership-row">
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={fundraising1} preview={false}></Image>
              <h2 className="director-name">Carly May</h2>
              <h4 className="director-position">Fundraising Director</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={fundraising2} preview={false}></Image>
              <h2 className="director-name">Katie Derrough</h2>
              <h4 className="director-position">Fundraising Director</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              <Image className="image" src={marketing1} preview={false}></Image>
              <h2 className="director-name">Michaela Nam</h2>
              <h4 className="director-position">Marketing Director</h4>
            </Col>
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={marketing2} preview={false}></Image>
              <h2 className="director-name">Achintya Saxena</h2>
              <h4 className="director-position">Marketing Director</h4> */}
            </Col>
          </Row>
          <Row className="leadership-row">
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={community1} preview={false}></Image>
              <h2 className="director-name">Anjali Vemuri</h2>
              <h4 className="director-position">Director of Community Outreach</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={community2} preview={false}></Image>
              <h2 className="director-name">Sahaja Pinnu</h2>
              <h4 className="director-position">Director of Community Outreach</h4> */}
            </Col>
            <Col className="leadership-col" span={6}>
              <Image className="image" src={tech1} preview={false}></Image>
              <h2 className="director-name">Ryan Toth</h2>
              <h4 className="director-position">Director of Technology</h4>
            </Col>
            <Col className="leadership-col" span={6}>
              {/* <Image className="image" src={tech2} preview={false}></Image>
              <h2 className="director-name">Anthony Zhu</h2>
              <h4 className="director-position">Director of Technology</h4> */}
            </Col>
          </Row>
      </Content>
    );
}

export default Leadership;