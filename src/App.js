import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Home from './components/Home/Home';
import Rush from './components/Rush/Rush';
import Leadership from './components/Leadership/Leadership';
import Error from './components/Error';
import iris from './flower-iris.jpg';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {

    const rushMenu = (
      <Menu>
        <Menu.Item><Link to="/rush/#video">Video</Link></Menu.Item>
        <Menu.Item><Link to="/rush/#schedule">Schedule</Link></Menu.Item>
        <Menu.Item><Link to="/rush/#tips">Tips</Link></Menu.Item>
      </Menu>
    )

    const leadershipMenu = (
      <Menu>
        <Menu.Item><Link to="/leadership/#executive-board">Executive Board</Link></Menu.Item>
        <Menu.Item><Link to="/leadership/#directors">Directors</Link></Menu.Item>
      </Menu>
    )

    return (
      <div className="App">
        <div className="header">
          <div className="logo-org">
            <img className="logo" src={iris}></img>
            <h2 className="title">Phi Chi Theta</h2>
          </div>
          <div className="nav">
            <Link className="primary-nav" to="/#home">Home</Link>
            <Link className="primary-nav" to="/#aboutUs">About Us</Link>
            <Dropdown overlay={rushMenu}>
              <a className="primary-nav" onClick={e => e.preventDefault()}> Rush <DownOutlined /></a>
            </Dropdown>
            <Dropdown overlay={leadershipMenu}>
              <a className="primary-nav" onClick={e => e.preventDefault()}> Leadership <DownOutlined /></a>
            </Dropdown>
            <Link className="primary-nav" onClick={() => window.open('https://bubble.io/domain_not_supported?domain=rush.pctumich.com')}>Apply Now</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rush" component={Rush} />
          <Route path="/leadership" component={Leadership} />
          <Route component={Error} />
        </Switch>
        <div className="footer">
          <h4 className="contact-us">Follow Us</h4>
          <div className="social-media">
            <a href="https://www.facebook.com/pctumich/" target="_blank"><span class="fa fa-facebook facebook"></span></a>
            <a href="https://www.instagram.com/pctumich/" target="_blank"><span class="fa fa-instagram instagram"></span></a>
            <a href="https://www.linkedin.com/company/pctumich" target="_blank"><span class="fa fa-linkedin-square linkedin"></span></a>
          </div>
          <p className="copyright">Copyright 2021 Phi Chi Theta - Zeta Beta</p>
        </div>
      </div>
    )
  }
}

export default App;
