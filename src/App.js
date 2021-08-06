import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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


  onClickMenuPane = ({ key }) => {
    let url = `http://localhost:3000/${key}`
    window.location.href = url
  };


  render() {

    const rushMenu = (
      <Menu onClick={this.onClickMenuPane}>
        <Menu.Item key="rush/#video">Video</Menu.Item>
        <Menu.Item key="rush/#schedule">Schedule</Menu.Item>
        <Menu.Item key="rush/#tips">Tips</Menu.Item>
      </Menu>
    )

    const leadershipMenu = (
      <Menu onClick={this.onClickMenuPane}>
        <Menu.Item key="leadership/#executive-board">Executive Board</Menu.Item>
        <Menu.Item key="leadership/#directors">Directors</Menu.Item>
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
            <Link className="primary-nav" onClick={() => window.location.replace("/#home")}>Home</Link>
            <Link className="primary-nav" onClick={() => window.location.replace("/#aboutUs")}>About Us</Link>
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
            <a href="https://www.facebook.com/pctumich/" target="_blank"><i class="fa fa-facebook"></i></a>
            <a href="https://www.facebook.com/pctumich/" target="_blank"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/pctumich" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div>
          <p className="copyright">Copyright 2021 Phi Chi Theta - Zeta Beta</p>
        </div>
      </div>
    )
  }
}

export default App;
