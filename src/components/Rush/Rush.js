import React from 'react';
import ReactPlayer from "react-player"
import Timeline from './timeline'

const Rush = () => {
    return (
      <div className="Rush">
          <span id="video" className="video"></span>
          <div className="heading">
            <h2 className="section-title">Rush Phi Chi Theta</h2>
            <hr className="hr"></hr>
          </div>
          <ReactPlayer className="video" url="https://jxiao313.wistia.com/medias/zk8ezur0vw"/>
          <span id="schedule" className="schedule"></span>
          <div className="heading">
            <h2 className="section-title">Rush Schedule</h2>
            <hr className="hr"></hr>
          </div>
          <Timeline/>
          <span id="events" className="events"></span>
          <div className="heading">
            <h2 className="section-title">Rush Events</h2>
            <hr className="hr"></hr>
          </div>
          <span id="tips" className="tips"></span>
          <div className="heading">
            <h2 className="section-title">Rush Tips</h2>
            <hr className="hr"></hr>
          </div>
      </div>
    );
}

export default Rush;