import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
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

  render() {
    return (
      <Layout className="layout">
        <Header className="header">
        <NavLink to="/"><div className="logo" /></NavLink>
              <Row>
                <Col xs={0} sm={20} md={20} lg={16}>
                  <NavLink className="primary-nav" to="/">Home</NavLink>
                  <NavLink className="primary-nav" to="/about-us">About Us</NavLink>
                  <NavLink className="primary-nav" to="/rush">Rush</NavLink>
                  <NavLink className="primary-nav" to="/leadership">Leadership</NavLink>
                </Col>
              </Row>
        </Header>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-us" component={AboutUs}/>
            <Route exact path="/rush" component={Rush}/>
            <Route exact path="/leadership" component={Leadership}/>
            <Route component={Error}/>
          </Switch>
      </Layout>
    )
  }
}

export default App;
