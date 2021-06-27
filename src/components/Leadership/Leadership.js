import React from 'react';
import { Layout, Col, Row, Image } from 'antd';
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
          <Row>
            <Col span={8}>
              <Image src={elPrez} preview={false}></Image>
              <h2 className="board-name">Krisha Monpara</h2>
              <h4 className="board-position">President</h4>
              <p className="board-bio">Krisha is a junior studying Economics. From Pittsburgh, Pennsylvania, she enjoys running, playing the piano, and spending time with her friends and family. Her internship experience includes Wealth Management at Cetera Financial Investors, the Women’s Advisory Program in Global Investment Banking at RBC, and as an incoming Financial Analyst at Amazon in Seattle.</p>
            </Col>
            <Col span={8}>
              <Image src={vpi} preview={false}></Image>
              <h2 className="board">Jason Stahlman</h2>
              <h4 className="board-position">VP Internal</h4>
              <p className="board-bio"></p>
            </Col>
            <Col span={8}>
              <Image src={vpx} preview={false}></Image>
              <h2 className="board">Theo Kardasis</h2>
              <h4 className="board-position">VP External</h4>
              <p className="board-bio"></p>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Image src={vpf} preview={false}></Image>
              <h2 className="board">Ian Kim</h2>
              <h4 className="board-position">VP Finance</h4>
              <p className="board-bio"></p>
            </Col>
            <Col span={8}>
              <Image src={vpOp1} preview={false}></Image>
              <h2 className="board">Jack Xiao</h2>
              <h4 className="board-position">VP Operations</h4>
              <p className="board-bio"></p>
            </Col>
            <Col span={8}>
              <Image src={vpOp2} preview={false}></Image>
              <h2 className="board">Josie Bachus</h2>
              <h4 className="board-position">VP Operations</h4>
              <p className="board-bio"></p>
            </Col>
          </Row>
          <span id="directors" className="directors"></span>
          <h1 className="heading">Directors</h1>
          <Row>
            <Col span={6}>
              <Image src={Parent} preview={false}></Image>
            </Col>
            <Col span={6}>
              {/* <Image src={alumni} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              {/* <Image src={Prof1} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              <Image src={Prof2} preview={false}></Image>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              {/* <Image src={Member1} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              {/* <Image src={Member2} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              <Image src={Academic1} preview={false}></Image>
            </Col>
            <Col span={6}>
              {/* <Image src={Academic2} preview={false}></Image> */}
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              {/* <Image src={wellness1} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              <Image src={wellness2} preview={false}></Image>
            </Col>
            <Col span={6}>
              <Image src={DEI1} preview={false}></Image>
            </Col>
            <Col span={6}>
              {/* <Image src={DEI2} preview={false}></Image> */}
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              {/* <Image src={IR1} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              {/* <Image src={IR2} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              {/* <Image src={Social1} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              <Image src={Social2} preview={false}></Image>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              {/* <Image src={fundraising1} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              {/* <Image src={fundraising2} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              <Image src={marketing1} preview={false}></Image>
            </Col>
            <Col span={6}>
              {/* <Image src={marketing2} preview={false}></Image> */}
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              {/* <Image src={community1} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              {/* <Image src={community2} preview={false}></Image> */}
            </Col>
            <Col span={6}>
              <Image src={tech1} preview={false}></Image>
            </Col>
            <Col span={6}>
              {/* <Image src={tech2} preview={false}></Image> */}
            </Col>
          </Row>
      </Content>
    );
}

export default Leadership;