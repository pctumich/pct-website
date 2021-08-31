import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ScrollTrigger from 'react-scroll-trigger';
import Slideshow from './slideshow'
import cc1 from './pics/coffeeChat1.jpg'
import cc2 from './pics/coffeeChat2.jpg'
import cc3 from './pics/coffeeChat3.jpg'
import cc4 from './pics/coffeeChat4.jpg'
import is1 from './pics/infoSession1.jpg'
import is2 from './pics/infoSession2.jpg'
import is3 from './pics/infoSession3.jpg'
import we1 from './pics/womenEvent1.jpg'
import we2 from './pics/womenEvent2.jpg'
import we3 from './pics/womenEvent3.jpg'
import dei1 from './pics/dei1.jpg'
import dei2 from './pics/dei2.jpg'
import dei3 from './pics/dei3.jpg'
import logo from '../../logo.svg';

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: true
        };
        this.updateAnimate = this.updateAnimate.bind(this)
    }

    updateAnimate() {
        this.setState({ animate: false })
    }

    render() {
        return (
            <VerticalTimeline className="timeline" animate={this.state.animate}>
                <VerticalTimelineElement className="component" iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={logo}/>}>
                    <p className="event-name">Info Session</p>
                    <Slideshow images={[is1, is2, is3]}></Slideshow>
                    <div className="event-info">
                        <div className="container">
                            <p>Sunday, September 12th</p>
                            <p className="bar">|</p>
                            <p>3:30-4:00PM</p>
                        </div>
                        <p>Ross: Robertson Auditorium</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="component">
                    <p className="event-name">Diverse Voices Event</p>
                    <Slideshow images={[dei1, dei2, dei3]}></Slideshow>
                    <div className="event-info">
                        <div className="container">
                            <p>Tuesday, September 14th</p>
                            <p className="bar">|</p>
                            <p>5:00-7:00PM</p>
                        </div>
                        <p>Ross: R2240</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="component">
                    <p className="event-name">Women's Event</p>
                    <Slideshow images={[we1, we2, we3]}></Slideshow>
                    <div className="event-info">
                        <div className="container">
                            <p>Wednesday, September 15th</p>
                            <p className="bar">|</p>
                            <p>4:30-6:30PM</p>
                        </div>
                        <p>Ross: R0230</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="component">
                    <p className="event-name">Coffee Chats</p>
                    <Slideshow images={[cc1, cc2, cc3, cc4]}></Slideshow>
                    <div className="event-info">
                        <div className="container">
                            <p>Thursday, September 16th</p>
                            <p className="bar">|</p>
                            <p>5:00-7:00PM</p>
                        </div>
                        <p>Ross: R1210, R1230, R1240</p>
                    </div>
                    <ScrollTrigger onEnter={this.updateAnimate}></ScrollTrigger>
                </VerticalTimelineElement>
            </VerticalTimeline>
        )
    }
}

export default Timeline;