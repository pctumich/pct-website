import React, { Component } from 'react';
import { Route, Switch, NavLink, Link, Redirect } from 'react-router-dom';
import { Layout, Row, Col, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.scss';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Rush from './components/Rush/Rush';
import Leadership from './components/Leadership/Leadership';
import Error from './components/Error';


const { Header, Footer } = Layout;

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

    // const aboutUsMenu = (
    //   <Menu onClick={this.onClickMenuPane}>
    //     <Menu.Item key="/#about-us">PCT</Menu.Item>
    //     <Menu.Item key="about-us/#fraternity-video">Fraternity Video</Menu.Item>
    //     <Menu.Item key="about-us/#pillars">Pillars</Menu.Item>
    //   </Menu>
    // );

    const rushMenu = (
      <Menu onClick={this.onClickMenuPane}>
        <Menu.Item key="rush/#video">Video</Menu.Item>
        <Menu.Item key="rush/#schedule">Schedule</Menu.Item>
        <Menu.Item key="rush/#deadlines">Deadlines</Menu.Item>
        <Menu.Item key="rush/#events">Events</Menu.Item>
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
      <Layout className="layout">
        <Header className="header">
            <div className="header-title">
              <NavLink to="/"><div className="logo" /></NavLink>
              <h2 className="title">Phi Chi Theta</h2>
            </div>
            <div className="header-nav">
              <Link className="primary-nav" to="/">Home</Link>
              <Link className="primary-nav" to={{pathname: '/', hash: '#aboutUs'}}>About Us</Link>
              <Dropdown overlay={rushMenu}>
                <a className="primary-nav" onClick={e => e.preventDefault()}> Rush <DownOutlined /></a>
              </Dropdown>
              <Dropdown overlay={leadershipMenu}>
                <a className="primary-nav" onClick={e => e.preventDefault()}> Leadership <DownOutlined /></a>
              </Dropdown>
            </div>
        </Header>
        <Layout>
          <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route path="/#aboutUs" component={Home}/> */}
              <Route path="/rush" component={Rush}/>
              <Route path="/leadership" component={Leadership}/>
              <Route component={Error}/>
            </Switch>
        </Layout>
        <Footer className="footer">
          <Row>
            <h3 className="f-title">Phi Chi Theta</h3>
          </Row>
          <Row>
            <Col span={8}>
              <h4 className="f-sub">Michigan's Leading Business Fraternity</h4>
              <p className="copyright">Copyright 2021 Phi Chi Theta - Zeta Beta</p>
            </Col>
            <Col span={8}>
              <h4 className="contact-us">Contact Us:</h4>
              <h5 className="contact-info">Email: ryantoth@umich.edu</h5>
              <h5 className="contact-info">Phone: 847.910.5075</h5>
            </Col>
            <Col span={8}>
              <h4 className="connect-with-us">Connect With Us</h4>
              <div className="social-media">
                <h5>Instagram</h5>
                <h5>Twitter</h5>
                <h5>LinkedIn</h5>
              </div>
            </Col>
          </Row>
        </Footer>
      </Layout>
    )
  }
}

export default App;
