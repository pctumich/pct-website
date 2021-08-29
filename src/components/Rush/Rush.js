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
      <div class="container mx-auto px-4">
        <span id="video" class="video" style={{ position: 'relative', top: '-60px' }}></span>
        <div id="header" class="mt-8">
              <h2 class="text-3xl font-bold text-center">Rush Phi Chi Theta</h2>
              <hr class="block box-content border-0 h-2 w-10/12 bg-blue-800 mb-5 mx-auto"></hr>
            </div>
        <ReactPlayer class="lg:w-3/5 lg:h-96 mx-auto overflow-hidden" width="w-60" height="h-96" url="https://www.youtube.com/watch?v=xj7DYzoTdKQ" controls={true} />
        <div>
          <p id="email-description-updates" class="mx-auto text-center pt-12 text-xl lg:w-1/2 lg:leading-10">Email any questions to pctrushquestionsf21@umich.edu and enter your U-M email below to receive updates about rush!</p>
          <div id="rush-email-container" class="mx-auto text-center">
            <div class="inline-block h-8">
              <input class="pb-1 h-full text-xl text-center border border-black" placeholder='e.g ryantoth@umich.edu' value={this.state.rushEmail} onChange={event => this.updateInputValue(event)}></input>
              {!this.state.submitted &&
                <Button class="" type="primary" onClick={this.addEmail}>Submit</Button>
              }
              {this.state.submitted &&
                <p class="">Thank you!</p>
              }
            </div>
          </div>
        </div>
        <span id="schedule" className="schedule" style={{ position: 'relative', top: '-35px' }}></span>
        <div id="header" className="mt-8">
              <h2 className="text-3xl font-bold text-center">Rush Schedule</h2>
              <hr className="block box-content border-0 h-2 w-10/12 bg-blue-800 mb-5 mx-auto"></hr>
        </div>
        {window.innerWidth < 1024 &&
          <div></div>
        }
        {window.innerWidth >= 1024 &&
          <Timeline />
        }
        <span id="tips" className="tips"></span>
        <div id="header" className="mt-8">
              <h2 className="text-3xl font-bold text-center">Tips and Tricks for a Successful Rush</h2>
              <hr className="block box-content border-0 h-2 w-10/12 bg-blue-800 mb-5 mx-auto"></hr>
            </div>
        <div className="tips">
          {Object.entries(tips).map(([key, value]) => {
            return (
              <div className="lg:w-3/4 mx-auto">
                <p class="text-xl mb-2">{key}</p>
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