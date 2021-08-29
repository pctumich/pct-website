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
// import community1 from './pics/Anjali.jpg'
// import community2 from './pics/Sahaja.jpg'
import fundraising1 from './pics/Carly.jpg'
import fundraising2 from './pics/Katie.jpg'
import IR1 from './pics/Yaz.jpg'
import IR2 from './pics/Ava.jpg'
import Member1 from './pics/Jajoo.jpg'
import Member2 from './pics/Erik.jpg'
// import Social1 from './pics/Spiro.jpg'
import Social2 from './pics/Adi.jpg'
import Parent from './pics/Jharna.jpg'
import Prof1 from './pics/Spencer.jpg'
import Prof2 from './pics/Anne.jpg'
import Academic1 from './pics/Alexa.jpg'
import Academic2 from './pics/Mia.jpg'
import DEI1 from './pics/Jeevin.jpg'
// import DEI2 from './pics/Audrey.jpg'
import tech1 from './pics/Ryan.jpg'
// import tech2 from './pics/Ant.jpg'
import wellness1 from './pics/Aakash.jpg'
import wellness2 from './pics/Sarah.jpg'

const board = [{"name": "Krisha Monpara", "position": "President", "headshot": elPrez, "bio": "Krisha is a junior studying Economics. From Pittsburgh, Pennsylvania, she enjoys running, playing the piano, and spending time with her friends and family. Her internship experience includes Wealth Management at Cetera Financial Investors, the Women’s Advisory Program in Global Investment Banking at RBC, and as an incoming Financial Analyst at Amazon in Seattle."},
{"name": "Jason Stahlman", "position": "VP Internal", "headshot": vpi, "bio": "Jason is a junior studying Business from Twinsburg, Ohio. He enjoys playing and watching a variety of sports, listening to music, and hanging out with friends. In past summers he has interned in corporate finance and strategy. This upcoming summer he will be interning in Investment Banking at Lincoln International."},
{"name": "Theo Kardasis", "position": "VP External", "headshot": vpx, "bio": "Theo, originally from Rochester, MI, is a junior in the School of Information studying Data Analysis and minoring in Business and Spanish. In his free time, he loves to hike, cook, and watch YouTube. His past internship experiences lie within strategy and insights, and he will be interning as a Digital Analytics Intern at American Express this coming summer."},
{"name": "Ian Kim", "position": "VP Finance", "headshot": vpf, "bio": "Ian is a junior studying Industrial and Operations Engineering. Originally from Westford, Massachusetts, Ian enjoys watching Boston Sports, cooking, running and spending time with friends. In past summers, Ian has worked for T-Mobile in Germany, and for a supply chain startup in Chicago. This summer he will be working in Tech Consulting as a Summer Associate at Gartner."},
{"name": "Jack Xiao", "position": "VP Operations", "headshot": vpOp1, "bio": "Jack is a junior studying Business and minoring in Computer Science. He is from Lincolnshire, Illinois and enjoys playing basketball, golf, and watching Chicago sports. In past summers, he has interned in Private Equity and has cofounded a basketball camp with his former high school teammates. This upcoming summer he will be interning in Investment Banking at Lincoln International."},
{"name": "Josie Bachus", "position": "VP Operations", "headshot": vpOp2, "bio": "Josephine is a sophomore studying Business and Psychology from Flossmoor, Illinois. She enjoys reading mystery novels, trips to the thrift store, and hanging out with her dog, as well as hanging out with her friends. She is interested in the intersection of business and psychology with a focus in consulting."}]

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
{"position": "Director of Diversity, Equity, and Inclusion", "name": "Audrey Thedford", "headshot": ""},
{"position": "Director of Internal Relations", "name": "Yasmine Zadeh", "headshot": IR1},
{"position": "Director of Internal Relations", "name": "Ava Ben-David", "headshot": IR2},
{"position": "Director of Social Engagement", "name": "Spiro Kass", "headshot": ""},
{"position": "Director of Social Engagement", "name": "Adi Middha", "headshot": Social2},
{"position": "Fundraising Director", "name": "Carly May", "headshot": fundraising1},
{"position": "Fundraising Director", "name": "Katie Derrough", "headshot": fundraising2},
{"position": "Marketing Director", "name": "Michaela Nam", "headshot": marketing1},
{"position": "Marketing Director", "name": "Achintya Saxena", "headshot": marketing2},
{"position": "Director of Community Outreach", "name": "Anjali Vemuri", "headshot": ""},
{"position": "Director of Community Outreach", "name": "Sahaja Pinnu", "headshot": ""},
{"position": "Director of Technology", "name": "Ryan Toth", "headshot": tech1},
{"position": "Director of Technology", "name": "Anthony Zhu", "headshot": ""}]

const Leadership = () => {
    return (
      <div class="flex-auto container mx-auto px-4">
          <span id="executive-board" style={{position:'relative', top: '-60px'}}></span>
          <div class="">
            <div class="mt-0.5">
              <h2 className="text-3xl font-bold text-center">Executive Board</h2>
              <hr className="block box-content border-0 h-2 w-10/12 bg-blue-800 mb-px-20 mx-auto"></hr>
            </div>
            <div class="flex-auto justify-center">
              {board.map((obj,index) => {
                return (
                  <div class="flex-auto flex-col w-80 h-auto" key={index}>
                    <img class="h-80 w-80 text-center object-cover" src={obj.headshot} alt=""></img>
                    <h2 class="text-center">{obj.name}</h2>
                    <h4 class="text-center">{obj.position}</h4>
                    <p class="text-left w-70">{obj.bio}</p>
                  </div>
              )})}
            </div>
          </div>
          <span id="directors" style={{position:'relative', top: '-10px'}}></span>
          <div class="directors">
            <div class="heading">
              <h2 class="section-title">Directors</h2>
              <hr class="hr"></hr>
            </div>
            <div class="flex-auto flex-row flex-wrap justify-evenly overflow-hidden">
              {directors.map((obj, index) => {
                return (
                  <div class="flex-auto flex-col w-80 h-auto" key={index}>
                    <img class="h-80 w-80 text-center object-cover" src={obj.headshot} alt=""></img>
                    <h2 class="text-center">{obj.name}</h2>
                    <h4 class="text-center">{obj.position}</h4>
                  </div>
              )})}
            </div>
          </div>
      </div>
    );
}

export default Leadership;