import { Menu, Icon ,Button} from 'antd';
import React, { Component } from 'react';
import logo from '../../images/logo.png';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class TopMenu extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (

      <Menu
        theme="dark"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <Menu.Item key="mail">      
          <Icon type="mail" />安全首页
        </Menu.Item>
        <Menu.Item key="app" >
          <Icon type="appstore" />安全WiKi
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />HIDS Wazuh</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
          
        </SubMenu>
      </Menu>
    );
  }
}



export default TopMenu;