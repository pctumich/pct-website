import React from 'react';
import ReactPlayer from "react-player"
import Timeline from './timeline'

const Rush = () => {
    const tips = {
      "Positive Attitude": "Rush can be an intimidating process when you are rushing with hundreds of other students on campus. Remember to stay positive and know that we’re are super excited to meet and interact with every one of you. Just be yourself and have fun!",
      "Come Informed" : "Coming to rush events prepared is the easiest way that we can take your rush experience to the next level. Preparing a few questions, either personal or professional, and attending rush events will ultimately enhance your rush experience and brother/sister interactions.",
      "Professional Appearance": "Although some of our events have a casual dress code, it is important to recognize that a clean-cut appearance shows respect. We want to see each and every rushee's individuality at the forefront, so if expressing yourself through fashion is of interest to you, by all means do it! Just remember, whether casual wear or business professional, try to keep it appropriate and respectful.",
      "Create a Resume" : "Even if you have not yet written a formal resume, we encourage you to compile a one page document highlighting your extracurricular activities and achievements, academic accomplishments, hobbies, and anything else you think we should know. We will ask for this after our 3rd rush event. You should not bring a resume to any open events (barring Resume Workshop)."
    }
//https://jxiao313.wistia.com/medias/zk8ezur0vw
    return (
      <div className="Rush">
          <span id="video" className="video"></span>
          <div className="heading">
            <h2 className="section-title">Rush Phi Chi Theta</h2>
            <hr className="hr"></hr>
          </div>
          <ReactPlayer className="video" url="https://www.youtube.com/watch?v=xj7DYzoTdKQ" controls={true}/>
          <span id="schedule" className="schedule"></span>
          <div className="heading">
            <h2 className="section-title">Rush Schedule</h2>
            <hr className="hr"></hr>
          </div>
          <Timeline/>
          <span id="tips" className="tips"></span>
          <div className="heading">
            <h2 className="section-title">Tips and Tricks for a Successful Rush</h2>
            <hr className="hr"></hr>
          </div>
          <div className="tips">
            {Object.entries(tips).map(([key, value]) => {
              return (
                <div className="container">
                  <p className="tip">{key}</p>
                  <p className="content">{value}</p>
                </div>
              )
            })}
          </div>
      </div>
    );
}

export default Rush;