import React, { Component } from 'react';
import { Route, Switch, NavLink, Link, Redirect } from 'react-router-dom';
import { Layout, Row, Col, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';
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

    const aboutUsMenu = (
      <Menu onClick={this.onClickMenuPane}>
        <Menu.Item key="about-us/#pct">PCT</Menu.Item>
        <Menu.Item key="about-us/#fraternity-video">Fraternity Video</Menu.Item>
        <Menu.Item key="about-us/#pillars">Pillars</Menu.Item>
      </Menu>
    );

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
          <Row>
            <NavLink to="/"><div className="logo" /></NavLink>
            <h2 className="title">Phi Chi Theta</h2>
          </Row>
          <Row className="nav-bar-row">
            <Col className="nav-bar-col">
              <NavLink className="primary-nav" to="/">Home</NavLink>
              <Dropdown overlay={aboutUsMenu}>
                <a className="primary-nav" onClick={e => e.preventDefault()}> About Us <DownOutlined /></a>
              </Dropdown>
              <Dropdown overlay={rushMenu}>
                <a className="primary-nav" onClick={e => e.preventDefault()}> Rush <DownOutlined /></a>
              </Dropdown>
              <Dropdown overlay={leadershipMenu}>
                <a className="primary-nav" onClick={e => e.preventDefault()}> Leadership <DownOutlined /></a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about-us" component={AboutUs}/>
              <Route exact path="/rush" component={Rush}/>
              <Route exact path="/leadership" component={Leadership}/>
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
