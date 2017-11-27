import { Menu, Icon, Button } from 'antd';
import React from 'react';
import {Link} from 'react-router';

import { Layout, Breadcrumb} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class LeftMenu extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark"  mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span ><Link to="/repos" style={{ color:'#ffffff' }}>集群状态监控</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span><Link to="/repos" style={{ color:'#ffffff' }}>集群状态监控</Link></span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">商乐楷</Menu.Item>
              <Menu.Item key="4">董博</Menu.Item>
              <Menu.Item key="5">唐天龙</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="code" /><span>规则名单管理</span></span>}
            >
              <Menu.Item key="6"><Link to="riskversion">WAF规则管理</Link></Menu.Item>
              <Menu.Item key="7"><Link to="riskversion">WAF名单管理</Link></Menu.Item>
              <Menu.Item key="8"><Link to="riskversion">WAF复合审批</Link></Menu.Item>
              <Menu.Item key="9"><Link to="riskpublish">WAF规则下发</Link></Menu.Item>
            
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="exception" /><span>风控管理</span></span>}
            >
      
              <Menu.Item key="11"><Link to="riskversion">风控规则管理</Link></Menu.Item>
              <Menu.Item key="12"><Link to="riskpublish">风控规则下发</Link></Menu.Item>
              <Menu.Item key="13">Gate管理</Menu.Item>
            </SubMenu>
            <Menu.Item key="14">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        
      </Layout>
    );
  }
}



export default LeftMenu;