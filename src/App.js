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
import logo from './logo.svg';
import NavBar from './components/navbar';


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
      <div id="app">
        <NavBar></NavBar>
        {/* <div class="flex flex-row">
          <div class="flex flex-initial flex-row">
            <Link to="/#home"><img class="w-16" src={logo}></img></Link>
            <Link class="text-xl"to="/#home"><p class="text-xl">Phi Chi Theta</p></Link>
          </div>
          <div class="nav">
            <Link class="primary-nav" to="/#home">Home</Link>
            <Link class="primary-nav" to="/#aboutUs">About Us</Link>
            <Dropdown overlay={rushMenu}>
              <a class="primary-nav" onClick={e => e.preventDefault()}> Rush <DownOutlined /></a>
            </Dropdown>
            <Dropdown overlay={leadershipMenu}>
              <a class="primary-nav" onClick={e => e.preventDefault()}> Leadership <DownOutlined /></a>
            </Dropdown>
            <Link class="primary-nav" onClick={() => window.open('https://bubble.io/domain_not_supported?domain=rush.pctumich.com')}>Apply Now</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rush" component={Rush} />
          <Route path="/leadership" component={Leadership} />
          <Route component={Error} />
        </Switch> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rush" component={Rush} />
          <Route path="/leadership" component={Leadership} />
          <Route component={Error} />
        </Switch>
        <div class="text-center bg-white shadow-2xl shadow-inner pt-6">
          <p class="text-black h-7 text-3xl font-bold">Follow Us</p>
          <div class="space-x-4 mx-auto w-1/2 h-14">
            <a href="https://www.facebook.com/pctumich/" target="_blank"><span class="fa fa-facebook text-5xl"></span></a>
            <a href="https://www.instagram.com/pctumich/" target="_blank"><span class="fa fa-instagram text-5xl"></span></a>
            <a href="https://www.linkedin.com/company/pctumich" target="_blank"><span class="fa fa-linkedin-square text-5xl"></span></a>
          </div>
          <p class="text-black pt-4 pb-6">Copyright 2021 Phi Chi Theta - Zeta Beta</p>
        </div>
      </div>
    )
  }
}

export default App;
