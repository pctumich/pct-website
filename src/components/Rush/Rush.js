import React, { Component } from 'react';
import ReactPlayer from "react-player"
import Timeline from './timeline'
import { Button } from 'antd'
import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

class Rush extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rushEmail: "",
      submitted: false
    };
    this.addEmail = this.addEmail.bind(this)
    this.updateInputValue = this.updateInputValue.bind(this)
  }

  updateInputValue(event) {
    this.setState({
      rushEmail: event.target.value
    });
  }

  addEmail() {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(String(this.state.rushEmail).toLowerCase()) && this.state.rushEmail.split('@')[1] === 'umich.edu') {
      const newRow = { Uniqname: this.state.rushEmail.split('@')[0] };
      this.appendSpreadsheet(newRow);
      this.setState({ submitted: true }, () => {
        setTimeout(() => {
          this.setState({ rushEmail: '', submitted: false })
        }, 4000);
      })
    }
    else {
      alert("You entered an invalid U-M email")
    }
  }

  appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
      });
      // loads document properties and worksheets
      await doc.loadInfo();
  
      const sheet = doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  render() {
    const tips = {
      "Positive Attitude": "Rush can be an intimidating process when you are rushing with hundreds of other students on campus. Remember to stay positive and know that we’re are super excited to meet and interact with every one of you. Just be yourself and have fun!",
      "Come Informed": "Coming to rush events prepared is the easiest way that we can take your rush experience to the next level. Preparing a few questions, either personal or professional, and attending rush events will ultimately enhance your rush experience and brother/sister interactions.",
      "Professional Appearance": "Although some of our events have a casual dress code, it is important to recognize that a clean-cut appearance shows respect. We want to see each and every rushee's individuality at the forefront, so if expressing yourself through fashion is of interest to you, by all means do it! Just remember, whether casual wear or business professional, try to keep it appropriate and respectful.",
      "Create a Resume": "Even if you have not yet written a formal resume, we encourage you to compile a one page document highlighting your extracurricular activities and achievements, academic accomplishments, hobbies, and anything else you think we should know. We will ask for this after our 3rd rush event. You should not bring a resume to any open events (barring Resume Workshop)."
    }
    return (
      <div className="Rush">
        <span id="video" className="video" style={{ position: 'relative', top: '-60px' }}></span>
        <div className="heading">
          <h2 className="section-title">Rush Phi Chi Theta</h2>
          <hr className="hr"></hr>
        </div>
        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=xj7DYzoTdKQ" controls={true} height="450px" width="800px" />
        <div>
          {/* <p className="email-description-questions">Email any rush questions to pctrushquestionsf21@umich.edu</p> */}
          <p className="email-description-updates">Enter your U-M email below to receive updates about rush!</p>
          <div className="rush-email-container">
            <div className="listserv">
              <input className="input" placeholder='e.g ryantoth@umich.edu' value={this.state.rushEmail} onChange={event => this.updateInputValue(event)}></input>
              <Button className="button" type="primary" onClick={this.addEmail}>Submit</Button>
            </div>
            {this.state.submitted &&
                <p className="thanks">Thank you!</p>
            }
          </div>
        </div>
        <span id="schedule" className="schedule" style={{ position: 'relative', top: '-35px' }}></span>
        <div className="heading-v2">
          <h2 className="section-title">Rush Schedule</h2>
          <hr className="hr"></hr>
        </div>
        <Timeline />
        <span id="tips" className="tips"></span>
        <div className="heading-v2">
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

}

export default Rush;