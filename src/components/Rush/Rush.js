import React from 'react';
import ReactPlayer from "react-player"
import { Layout, Col } from 'antd';
const { Content } = Layout;

const Rush = () => {
    return (
      <Content className="content">
          <span id="video" className="video"></span>
          <h2 className="rush-header">Rush Phi Chi Theta</h2>
          <Col className="video-col">
            <ReactPlayer className="video" url="https://jxiao313.wistia.com/medias/zk8ezur0vw"/>
          </Col>
          <span id="schedule" className="schedule"></span>
          <h2 className="rush-header">Rush Schedule</h2>
          <span id="deadlines" className="deadlines"></span>
          <h2 className="rush-header">Rush Deadlines</h2>
          <span id="events" className="events"></span>
          <h2 className="rush-header">Rush Events</h2>
          <span id="tips" className="tips"></span>
          <h2 className="rush-header">Rush Tips</h2>
      </Content>
    );
}

export default Rush;