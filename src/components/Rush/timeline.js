import React from 'react';
import Icon from './icon'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
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


const Timeline = () => {
    return (
        <VerticalTimeline className="timeline">
            <VerticalTimelineElement
                className="component"
                icon={<Icon></Icon>}
            >
                <h1>Info Session</h1>
                <Slideshow images={[is1, is2, is3]}></Slideshow>
                <h3>Monday, January 25th | 6:00-8:00PM | Location</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="component"
                icon={<Icon></Icon>}
            >
                <h1>Coffee Chats</h1>
                <Slideshow images={[cc1, cc2, cc3, cc4]}></Slideshow>
                <h3>Monday, January 25th | 6:00-8:00PM | Location</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="component"
                icon={<Icon></Icon>}
            >
                <h1>Diverse Voices Event</h1>
                <Slideshow images={[is1, is2, is3]}></Slideshow>
                <h3>Monday, January 25th | 6:00-8:00PM | Location</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="component"
                icon={<Icon></Icon>}
            >
                <h1>Women's Event</h1>
                <Slideshow images={[we1, we2, we3]}></Slideshow>
                <h3>Monday, January 25th | 6:00-8:00PM | Location</h3>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
};

export default Timeline;
