import React, { Component } from 'react';
import Slideshow from './slideshow'
import ReactPlayer from "react-player"
import president from './pics/president.jpg'
import personalGrowth from './pics/personalGrowth.jpg'
import CountUp from "react-countup";
import members from './statsPics/pic1.jpg'
import employment from './statsPics/option3.jpg'
import majors from './statsPics/option4.jpg'
import philanthropy from './pics/philanthropy.jpg'
import tailgate from './pics/tailgate.jpg'
import prof1 from './pics/prof1.jpg'
import prof2 from './pics/prof2.jpg'
import ScrollTrigger from 'react-scroll-trigger';
import Companies from './companies'
import { Card, Collapse } from 'antd'
import { url } from 'vfile-message';

const { Panel } = Collapse

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      firstTime: true,
      slide: false
    };
  }

  render() {
    return (
      <div class="">
        <span id="home" className="homeSpan" style={{ position: 'absolute', top: '-3%' }}></span>
        <div className="Home">
          <Slideshow></Slideshow>
          <div id="president-welcome" className="flex flex-col pt-6">
            <div id="header" className="mt-2">
              <h2 className="text-3xl font-bold text-center">President's Welcome</h2>
              <hr className="block box-content border-0 h-1 w-10/12 bg-black mb-5 mx-auto"></hr>
            </div>
            <div className="flex flex-wrap justify-center w-10/12 mx-auto mb-6">
              <div className="hidden sm:inline-block align-middle img w-6/12">
                <img className="h-auto object-cover shadow-md" src={president} alt="President Headshot"></img>
              </div>
              <div className="hidden sm:inline-block align-middle w-6/12 sm:text-sm xl:text-lg">
                <p className="text whitespace-pre-wrap break-words overflow-x-auto mb-6">On behalf of all of our members, it is my pleasure to welcome you to the official website of Phi Chi Theta at the University of Michigan. PCT is a co-ed professional business fraternity filled with driven, empathetic people. We are a diverse family of brothers and sisters that have actively committed ourselves to the betterment of each other, and the greater Michigan community.</p>
                <p className="text whitespace-pre-wrap break-words overflow-x-auto mb-6">The members of this organization have been a constant inspiration in my life. From the contagious drive towards excellence to upperclassmen giving back to help underclassmen excel in a variety of business fields, PCT continues to inspire me to be the best version of myself. Ultimately, the true value of PCT is in the quality of people that make up our family. Our members are committed to helping each other grow professionally, academically, and socially, pledge semester and beyond. Whether it be late night interview prep or even a time of emotional stress, PCT members are there to support you in any way they can.</p>
                <p className="text whitespace-pre-wrap break-words overflow-x-auto mb-6">I encourage you to continue browsing through our website to learn more about our organization. Please reach out to pctboard@umich.edu if you have any questions. We look forward to meeting you!</p>
                <p className="mb-0">Best,</p>
                <p className="mb-0">Krisha Monpara</p>
                <p className="mb-0">President - PCT Zeta Beta Class of 2022</p>
              </div>
              {/* Mobile President's welcome stacked on picture */}
              <div className="justify-center w-10/12 mb-10 mx-auto sm:hidden">
                <img className="self-end object-cover h-72" src={president} alt="President Headshot"></img>
              </div>
              <div className="justify-center my-5 mx-auto sm:hidden">
                <p className="text whitespace-pre-wrap break-words overflow-x-auto mb-6">On behalf of all of our members, it is my pleasure to welcome you to the official website of Phi Chi Theta at the University of Michigan. PCT is a co-ed professional business fraternity filled with driven, empathetic people. We are a diverse family of brothers and sisters that have actively committed ourselves to the betterment of each other, and the greater Michigan community.</p>
                <p className="text whitespace-pre-wrap break-words overflow-x-auto mb-6">The members of this organization have been a constant inspiration in my life. From the contagious drive towards excellence to upperclassmen giving back to help underclassmen excel in a variety of business fields, PCT continues to inspire me to be the best version of myself. Ultimately, the true value of PCT is in the quality of people that make up our family. Our members are committed to helping each other grow professionally, academically, and socially, pledge semester and beyond. Whether it be late night interview prep or even a time of emotional stress, PCT members are there to support you in any way they can.</p>
                <p className="text whitespace-pre-wrap break-words overflow-x-auto mb-6">I encourage you to continue browsing through our website to learn more about our organization. Please reach out to pctboard@umich.edu if you have any questions. We look forward to meeting you!</p>
                <p className="mb-0">Best,</p>
                <p className="mb-0">Krisha Monpara</p>
                <p className="mb-0">President - PCT Zeta Beta Class of 2022</p>
              </div>
            </div>
          </div>
          <span id='aboutUs' style={{ position: 'relative', top: '-50px' }}></span>
          <div class="flex-auto flex-col pt-4">
            <div class="heading">
            <h2 class="text-3xl font-bold text-center">About Us</h2>
              <hr class="block box-content border-0 h-1 w-10/12 bg-black mb-5 mx-auto"></hr>
            </div>
            <div class="flex-auto flex-c">
              <p class="w-10/12 mx-auto lg:text-lg pb-8">Phi Chi Theta (PCT) is a National Co-ed Professional Fraternity in Business and Economics. It was founded on June 16, 1924 in Chicago, Illinois. Today, the Phi Chi Theta National Chapter is comprised of 41 Collegiate and Alumni Chapters with over 23,000 members across the country.</p>
              <div class="sm:flex flex-auto flex-row flex-nowrap justify-evenly align-center mx-auto w-10/12">
                <div class="flex justify-center align-center mb-10">
                  <ScrollTrigger className="text-center h-70 w-96 z-40 text-white absolute pt-20 text-3xl" onEnter={() => this.setState({ visible: true })} onExit={() => this.setState({ visible: false, firstTime: false })}>
                    {this.state.visible && this.state.firstTime &&
                      <CountUp end={110} start={0} suffix="+" duration={2} />
                    }
                    {!this.state.firstTime &&
                      <p class="m-0">110+</p>
                    }
                    <p>Members</p>
                  </ScrollTrigger>
                  <img className="sm:w-96 sm:h-70 relative filter brightness-50 saturate-80 m-0" src={members} alt="" preview={false}></img>
                </div>
                <div className="flex justify-center align-center mb-10">
                  <ScrollTrigger className="text-center h-70 w-96 z-40 text-white absolute pt-20 text-3xl" onEnter={() => this.setState({ visible: true })} onExit={() => this.setState({ visible: false, firstTime: false })}>
                    {this.state.visible && this.state.firstTime &&
                      <CountUp end={35} start={0} suffix="+" duration={2} />
                    }
                    {!this.state.firstTime &&
                      <p class="m-0">35+</p>
                    }
                    <p>Majors</p>
                  </ScrollTrigger>
                  <img className="sm:w-96 sm:h-70 relative filter brightness-50 saturate-80 m-0" src={majors}></img>
                </div>
                <div className="flex justify-center align-center mb-10">
                  <ScrollTrigger className="text-center h-70 w-96 z-40 text-white absolute pt-20 text-3xl" onEnter={() => this.setState({ visible: true })} onExit={() => this.setState({ visible: false, firstTime: false })}>
                    {this.state.visible && this.state.firstTime &&
                      <CountUp end={100} start={0} suffix="%" duration={2} />
                    }
                    {!this.state.firstTime &&
                      <p class="m-0">100%</p>
                    }
                    <p class="">Full-Time Employment</p>
                  </ScrollTrigger>
                  <img className="sm:w-96 sm:h-70 relative filter brightness-50 saturate-80 m-0" src={employment}></img>
                </div>
              </div>
              <div class="heading">
                <h2 class="text-3xl font-bold text-center">Alumni Placement</h2>
                <hr class="block box-content border-0 h-1 w-10/12 bg-black mb-5 mx-auto"></hr>
              </div>
              <p class="w-10/12 mx-auto lg:w-3/4 lg:text-lg pb-8">PCT members come from a wide range of backgrounds and experiences, and there is a high chance that someone shares your career interests. Here are a few of the post grad opportunities you can find our members at. </p>
              <Companies animated={false}></Companies>
              {/* <ReactPlayer class="lg:w-3/5 lg:h-96 mx-auto overflow-hidden pb-10" width="w-60" height="h-full" url="https://www.youtube.com/watch?v=BzZHfNNZFzo" controls={true}/> */}
            </div>
            <div class="pb-4"></div>
          </div>
          <span id="pillars"></span>
          <div class="heading">
              <h2 class="text-3xl font-bold text-center pt-8">Pillars of PCT</h2>
              <hr class="block box-content border-0 h-1 w-10/12 bg-black mb-10 mx-auto"></hr>
            </div>
          <div class="flex-auto flex-col lg:mx-48">
              {/* <div className="content"> */}
              <ScrollTrigger class="flex-auto justify-center -mb-10" onEnter={() => this.setState({ slide: true })}>
                <Collapse class="text-center">
                  <Panel className={this.state.slide ? "slide-in-1" : ""} header="Professional Growth" key="1">
                    <div class="w-10/12 lg:w-6/12">
                      <p className="text-xl">Individual Mentorship<hr></hr></p>
                      <p className="description">Every semester, underclassmen are assigned an upperclassmen mentor in their major or industry of interest to guide them with course selection, resume feedback, interview practice, company / club applications and much more! This is a great opportunity for younger members to become friends with and learn from older members.</p>
                      <p className="text-xl">Industry Overviews<hr></hr></p>
                      <p className="description">At this event, upperclassmen present to the fraternity about their experiences in different industries, including investment banking, management consulting, private equity, marketing, advertising, technology and more. It offers members a unique and in-depth perspective into career paths they may be interested in.</p>
                      <p className="text-xl">Company Visits<hr></hr></p>
                      <p className="description">Every year, members engage with alumni across various industries and companies to learn about internship and job opportunities. Additionally, members go on weekend trips to Detroit and Chicago for networking events with companies in various industries, including banking, consulting, and tech.</p>
                      <p className="text-xl">Interview Prep<hr></hr></p>
                      <p className="description">Underclassmen are encouraged to reach out to upperclassmen to conduct mock interviews. In addition, we organize a mock "superday" once a semester where members are given several mock interviews by upperclassmen for industries they are interested in and receive valuable feedback afterwards.</p>
                    </div>
                    <div className="hidden lg:block w-4/12">
                      <img class="w-16 md:w-16 lg:w-16" className="pillar-img" src={prof1} alt="" style={{marginTop: "5%"}}></img>
                      <img class="w-16 md:w-16 lg:w-16" className="pillar-img" src={prof2} alt="" style={{marginTop: "7%"}}></img>
                      <img class="w-16 md:w-16 lg:w-16" className="pillar-img" src={prof1} alt="" style={{marginTop: "7%"}}></img>
                    </div>
                  </Panel>
                  <Panel className={this.state.slide ? "slide-in-2" : ""} header="Community" key="2">
                    <div className="w-10/12 lg:w-6/12">
                      <p className="text-xl">Membership and Social Events<hr></hr></p>
                      <p className="description">We host and participate in a variety of social events, including football game tailgates, bowling nights, IM sports, secret santa, karaoke nights, potluck dinners and more. </p>
                      <p className="text-xl">Family Wars<hr></hr></p>
                      <p className="description">All members are grouped into one of four sub-families based on their lineage. Throughout the semester, families have friendly competitions with one another at events like our campus-wide scavenger hunt, family hangouts, and more!</p>
                      <p className="text-xl">Philanthropy<hr></hr></p>
                      <p className="description">Our annual 5K was started by a PCT member in 2015 to support the Matthew Bittker Foundation, an organization his family started in memory of his brother to support pediatric cancer research. We’ve held the 5K every year since to support the foundation and give back to the greater community.</p>
                      <p className="description">Additionally, we participate in the Detroit Partnership Day every year to give back to the Detroit community and organize several of our own service events. We’ve also organized events with Habitat for Humanity, Ronald McDonald House, Business Clothing Drive, and more. </p>
                    </div>
                    <div className="hidden lg:block w-4/12">
                      <img className="pillar-img" style={{marginTop: "9%"}} src={tailgate} alt=""></img>
                      <img className="pillar-img" style={{marginTop: "9%"}} src={philanthropy} alt=""></img>
                    </div>
                  </Panel>
                  <Panel className={this.state.slide ? "slide-in-3" : ""} header="Diversity, Equity, & Inclusion Mindset" key="3">
                    <div className="w-10/12 lg:w-6/12">
                      <p className="text-xl">Committee Creation<hr></hr></p>
                      <p className="text-xl">Education Sessions<hr></hr></p>
                      <p className="text-xl">Cultural Conversations<hr></hr></p>
                      <p className="text-xl">Donations<hr></hr></p>
                    </div>
                  </Panel>
                  <Panel className={this.state.slide ? "slide-in-4" : ""} header="Personal Growth" key="4">
                    <div class="w-10/12 lg:w-6/12">
                      <p class="text-xl">Wellness<hr></hr></p>
                      <p class="description">Our Directors of Member Wellness organize several events a semester to promote mental and physical wellness during the semester. A few include mental health workshops, sleep workshops, and yoga and fitness classes. </p>
                      <p class="text-xl">Learning<hr></hr></p>
                      <p class="description">We embrace learning, whether it be through professional workshops, personal and mock interviews, or even leadership positions.</p>
                      <p class="text-xl">People and Fraternity Pride<hr></hr></p>
                      <p class="description">We pride ourselves on being the best business fraternity we can be. We hope members develop lifelong friendships that reach far beyond the scope of Michigan and our fraternity.</p>
                    </div>
                    <div class="hidden lg:block w-5/12">
                      <img class="w-16 md:w-72 lg:w-72 lg:mx-auto lg:pt-12" src={personalGrowth} alt=""></img>
                    </div>
                  </Panel>
                </Collapse>
                </ScrollTrigger>
                <div class="pt-20"></div>
            </div>
          </div>
        </div>
        )
  }
}

        export default Home;