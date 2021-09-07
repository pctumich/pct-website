import React from 'react';
import elPrez from './pics/Krisha.jpg'
import vpi from './pics/Jason.jpg'
import vpx from './pics/Theo.jpg'
import vpf from './pics/Ian.jpg'
import vpOp1 from './pics/Jack.jpg'
import vpOp2 from './pics/Josie.jpg'
import marketing1 from './pics/Michaela.jpg'
import marketing2 from './pics/Chin.jpg'
import alumni from './pics/Linh.jpg'
import community1 from './pics/Anjali.jpg'
import community2 from './pics/Sahaja.jpg'
import fundraising1 from './pics/Carly.jpg'
import fundraising2 from './pics/Katie.jpg'
import IR1 from './pics/Yaz.jpg'
import IR2 from './pics/Ava.jpg'
import Member1 from './pics/Jajoo.jpg'
import Member2 from './pics/Erik.jpg'
import Social1 from './pics/Spiro.jpg'
import Social2 from './pics/Adi.jpg'
import Parent from './pics/Jharna.jpg'
import Prof1 from './pics/Spencer.jpg'
import Prof2 from './pics/Anne.jpg'
import Academic1 from './pics/Alexa.jpg'
import Academic2 from './pics/Mia.jpg'
import DEI1 from './pics/Jeevin.jpg'
import DEI2 from './pics/Audrey.jpg'
import tech1 from './pics/Ryan.jpg'
import tech2 from './pics/Ant.jpg'
import wellness1 from './pics/Aakash.jpg'
import wellness2 from './pics/Sarah.jpg'

const board1 = [{"name": "Krisha Monpara", "position": "President", "headshot": elPrez, "bio": "Krisha is a senior studying Economics. From Pittsburgh, Pennsylvania, she enjoys running, playing the piano, and spending time with her friends and family. Her internship experience includes Wealth Management at Cetera Financial Investors, the Women’s Advisory Program in Global Investment Banking at RBC, and will be returning full time to Amazon as a Financial Analyst in Seattle.", "link" : "https://www.linkedin.com/in/krisha-monpara123/"},
{"name": "Jason Stahlman", "position": "VP Internal", "headshot": vpi, "bio": "Jason is a senior studying Business from Twinsburg, Ohio. He enjoys playing and watching a variety of sports, listening to music, and hanging out with friends. In past summers he has interned in corporate finance, strategy and investment banking. Upon graduation he will be joining Lincoln International as an Investment Banking Analyst.", "link" : "https://www.linkedin.com/in/jasonstahlman/"},
{"name": "Theo Kardasis", "position": "VP External", "headshot": vpx, "bio": "Theo, originally from Rochester, MI, is a senior in the School of Information studying Data Analytics with minors in Business and Spanish. His past internship experiences lie at the intersection of technology and financial services, and most recently interned at American Express as a Digital Analytics Intern. In his free time, he enjoys hiking, cooking, and reading.", "link" : "https://www.linkedin.com/in/theodorekardasis/"},
]

const board2 = [{"name": "Ian Kim", "position": "VP Finance", "headshot": vpf, "bio": "Ian is a senior studying Industrial and Operations Engineering with minors in German and Computer Science. He is originally from the Boston suburbs, and has interned within a variety of industries, most recently research and advisory at Gartner. Ian’s hobbies include running, golf, basketball, cooking, shoes and travel.", "link" : "https://www.linkedin.com/in/ian-kim-ba7b3b161/"},
{"name": "Jack Xiao", "position": "VP Operations", "headshot": vpOp1, "bio": "Jack is a junior studying Business and minoring in Computer Science. He is from Lincolnshire, Illinois and enjoys playing basketball, golf, and watching Chicago sports. In past summers, he has interned in Private Equity and has cofounded a basketball camp with his former high school teammates. This upcoming summer he will be interning in Investment Banking at Lincoln International.", "link" : "https://www.linkedin.com/in/jack-xiao-33061b195/"},
{"name": "Josie Bachus", "position": "VP Operations", "headshot": vpOp2, "bio": "Josie is a junior studying business from Flossmoor, Illinois. She enjoys hanging out with friends and playing with her two yellow labradors at home. She was recently a research assistant for the University of Chicago's Behavioral Economics department and plans to pursue a job in consulting this fall.", "link" : "https://www.linkedin.com/in/josephine-bachus-90661a195/"}]

const directors = [{"position": "Director of New Member Engagement", "name": "Jharna Tripathi", "headshot": Parent},
{"position": "Director of Alumni Relations", "name": "Linh Phan", "headshot": alumni},
{"position": "Director of Professional Development", "name": "Spencer Semple", "headshot": Prof1},
{"position": "Director of Professional Development", "name": "Anne Early", "headshot": Prof2},
{"position": "Director of Member Engagement", "name": "Aakash Jajoo", "headshot": Member1},
{"position": "Director of Member Engagement", "name": "Erik Whilborn", "headshot": Member2},
{"position": "Academic Director", "name": "Alexa Finuoli", "headshot": Academic1},
{"position": "Academic Director", "name": "Mia Vuckovic", "headshot": Academic2},
{"position": "Director of Member Wellness", "name": "Aakash Menon", "headshot": wellness1},
{"position": "Director of Member Wellness", "name": "Sarah Morris", "headshot": wellness2},
{"position": "Director of Diversity, Equity, and Inclusion", "name": "Jeevin Singh", "headshot": DEI1},
{"position": "Director of Diversity, Equity, and Inclusion", "name": "Audrey Thedford", "headshot": DEI2},
{"position": "Director of Internal Relations", "name": "Yasmine Zadeh", "headshot": IR1},
{"position": "Director of Internal Relations", "name": "Ava Ben-David", "headshot": IR2},
{"position": "Director of Social Engagement", "name": "Spiro Kass", "headshot": Social1},
{"position": "Director of Social Engagement", "name": "Adi Middha", "headshot": Social2},
{"position": "Fundraising Director", "name": "Carly May", "headshot": fundraising1},
{"position": "Fundraising Director", "name": "Katie Derrough", "headshot": fundraising2},
{"position": "Marketing Director", "name": "Michaela Nam", "headshot": marketing1},
{"position": "Marketing Director", "name": "Achintya Saxena", "headshot": marketing2},
{"position": "Director of Community Outreach", "name": "Anjali Vemuri", "headshot": community1},
{"position": "Director of Community Outreach", "name": "Sahaja Pinnu", "headshot": community2},
{"position": "Director of Technology", "name": "Ryan Toth", "headshot": tech1},
{"position": "Director of Technology", "name": "Anthony Zhu", "headshot": tech2}]

const Leadership = () => {
    return (
      <div className="Leadership">
          <span id="executive-board" style={{position:'relative', top: '-60px'}}></span>
          <div className="board flex-wrap">
            <div id="header" className="mt-8">
              <h2 className="text-3xl font-bold text-center">Executive Board</h2>
              <hr className="block box-content border-0 h-1 w-10/12 bg-black mb-5 mx-auto"></hr>
            </div>

            {/* Normal view with cards in a row */}
            <div className="hidden container sm:flex">
              {board1.map((obj,index) => {
                return (
                  <div className="trooper" key={index}>
                    <a href={obj.link} target="_blank"><img className="img" src={obj.headshot} alt=""></img></a>
                    <h2 className="name">{obj.name}</h2>
                    <h4 className="position">{obj.position}</h4>
                    <p className="bio">{obj.bio}</p>
                  </div>
              )})}
            </div>

            {/* use individual cards in a column for mobile */}
            <div className="w-10/12 mx-auto sm:hidden">
              {board1.map((obj,index) => {
                return (
                  <div class="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
                    <a href={obj.link} target="_blank"><img class="headshot w-full" src={obj.headshot} alt={obj.name + " headshot"}></img></a>
                    <div class="px-6 py-4">
                      <h2 className="name font-bold text-xl mb-2">{obj.name}</h2>
                      <h4 className="position font-bold text-xl mb-2">{obj.position}</h4>
                      <p className="bio text-gray-700 text-base">{obj.bio}</p>
                    </div>
                  </div>
              )})}
            </div>

            {/* Normal view with cards side by side */}
            <div className="hidden container sm:flex">
              {board2.map((obj,index) => {
                return (
                  <div className="trooper" key={index}>
                    <a href={obj.link} target="_blank"><img className="img" src={obj.headshot} alt=""></img></a>
                    <h2 className="name">{obj.name}</h2>
                    <h4 className="position">{obj.position}</h4>
                    <p className="bio">{obj.bio}</p>
                  </div>
              )})}
            </div>

            {/* use individual cards in a column for mobile */}
            <div className="w-10/12 mx-auto sm:hidden">
              {board2.map((obj,index) => {
                return (
                  <div class="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
                    <a href={obj.link} target="_blank"><img class="headshot w-full" src={obj.headshot} alt={obj.name + " headshot"}></img></a>
                    <div class="px-6 py-4">
                      <h2 className="name font-bold text-xl mb-2">{obj.name}</h2>
                      <h4 className="position font-bold text-xl mb-2">{obj.position}</h4>
                      <p className="bio text-gray-700 text-base">{obj.bio}</p>
                    </div>
                  </div>
              )})}
            </div>
          </div>

          <span id="directors" style={{position:'relative'}}></span>
          <div className="directors">
            <div id="header" className="mt-8">
              <h2 className="text-3xl font-bold text-center">Directors</h2>
              <hr className="block box-content border-0 h-1 w-10/12 bg-black mb-5 mx-auto"></hr>
            </div>

            {/* Normal view with cards side by side */}
            <div className="hidden container mx-auto sm:flex">
              {directors.map((obj, index) => {
                return (
                  <div className="trooper" key={index}>
                    <img className="img" src={obj.headshot} alt=""></img>
                    <h2 className="name">{obj.name}</h2>
                    <h4 className="position">{obj.position}</h4>
                  </div>
              )})}
            </div>

            {/* use individual cards in a column for mobile */}
            <div className="w-72 mx-auto sm:hidden">
              {directors.map((obj,index) => {
                return (
                  <div class="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
                    <img class="headshot h-72 w-full object-cover" src={obj.headshot} alt={obj.name + " headshot"}></img>
                    <div class="px-6 py-4">
                      <h2 className="name text-center font-medium text-xl mb-2">{obj.name}</h2>
                      <h4 className="position text-center font-normal text-xl mb-2">{obj.position}</h4>
                    </div>
                  </div>
              )})}
            </div>

          </div>
      </div>
    );
}

export default Leadership;