import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
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

  onClickAboutUs = ({ key }) => {
    console.log(`Click on item ${key}`);
  };
  

  render() {

    const aboutUsMenu = (
      <Menu onClick={this.onClickAboutUs}>
        <Menu.Item key="1">PCT</Menu.Item>
        <Menu.Item key="2">Fraternity Video</Menu.Item>
        <Menu.Item key="3">Pillars</Menu.Item>
      </Menu>
    );

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
              {/* <NavLink className="primary-nav" to="/about-us">About Us</NavLink> */}
              <NavLink className="primary-nav" to="/rush">Rush</NavLink>
              <NavLink className="primary-nav" to="/leadership">Leadership</NavLink>
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
      </Layout>
    )
  }
}

export default App;
