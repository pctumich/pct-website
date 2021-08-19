import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import company_image from './pics/companies.png'

// in order: x1, y1, x2, y2
const LOGO_COORDS = [
      [467, 161, 658, 229],
      [88, 11, 247, 65],    
      [505, 264, 617, 342],
      [64, 115, 259, 161],
      [264, 151, 377, 192],
      [323, 231, 607, 265],
      [618, 216, 712, 286],
      [38, 194, 129, 235],
      [264, 151, 377, 192],
      [718, 26, 797, 84],
      [28, 301, 262, 342],
      [455, 116, 642, 157],
      [368, 51, 562, 113],
      [5, 153, 177, 204],
      [31, 78, 169, 113],
      [578, 85, 683, 125],
      [401, 321, 517, 349],
      [127, 194, 315, 264],
      [716, 193, 798, 264],
      [266, 64, 353, 144],
      [288, 276, 361, 346],
      [633, 290, 789, 350],
      [4, 37, 82, 74],
      [414, 1, 560, 47],
      [564, 13, 711, 77],
      [377, 130, 453, 219],
      [255, 12, 412, 51],
      [368, 264, 471, 320],
      [655, 136, 775, 190],
      [195, 66, 255, 123],
      [19, 234, 116, 294],
      [128, 266, 287, 302],
      [691, 86, 786, 131],
    ];

class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const style = {
            background: "white",
            position: "absolute",
            left: this.props.coords[0] + "px",
            top: this.props.coords[1] + "px",
            width: this.props.coords[2] - this.props.coords[0] + "px",
            height: this.props.coords[3] - this.props.coords[1] + "px",
            transitionProperty: "opacity",
            transitionDuration: "1.5s",
            transitionTimingFunction: "ease-out",
            transitionDelay: this.props.transition_delay + "ms"
          };
        return (
            <div class={`cover ${this.props.animated ? 'cover-transition' : ''}`} style={style}></div>
        )
    }
}

class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animated: false
        };
        this.onEnterViewport = this.onEnterViewport.bind(this)
        this.onExitViewport = this.onExitViewport.bind(this)
    }

    onEnterViewport() {
        this.setState({
          animated: true,
        });
    }
     
    onExitViewport() {
        this.setState({
            animated: false,
        });
    }

    render() {
        var delay = 0;
        const covers = LOGO_COORDS.map((coords) => {
            console.log("Coords are: ")
            console.log(coords)
            delay += 100;
            return <Cover coords={coords} animated={this.state.animated} transition_delay={delay}></Cover>
        });

        return (
            <div class="company">
                <img src={company_image}></img>
                {covers}
                <ScrollTrigger onEnter={this.onEnterViewport} ></ScrollTrigger>
            </div>
        )
    }
}

export default Companies;