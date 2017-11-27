import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftMenu from './components/realapp/LeftMenu';
import TopMenu from './components/realapp/TopMenu';
import { Row, Col } from 'antd';


class App extends Component{
  render(){
    return <div>
      <TopMenu></TopMenu>
      <div>
        <Row type="flex" justify="space-around" >
          <Col span={1}><LeftMenu></LeftMenu></Col>
          <Col span={21} offset={2} style={{marginTop:80}}>{this.props.children}</Col>
        </Row>
      </div>
    </div>
  }
}

export default App;
