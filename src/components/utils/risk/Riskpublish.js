import { Table, Col ,Row, message} from 'antd';
import { Menu, Dropdown, Button, Icon, Input } from 'antd';
import Riskselect from './Riskselect.js'
import React from 'react'
import axios from 'axios'
import { createStore } from 'redux'
var config=require('../../../conf.js')
const Search = Input.Search;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>)

const success = () => {
  const hide = message.loading('正在启动一键更新..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

class Riskpublish extends React.Component {
  constructor () {
    super()
    this.state = {
    selectedRowKeys: [],  // Check here to configure the default column
    data:[],
    loading: true,
    columns:[{
      title: '集群id',
      dataIndex: 'cluster_id',
    }, {
      title: '集群描述',
      dataIndex: 'cluster_desc',
    }, {
      title: '服务器名',
      dataIndex: 'host_name',
    },{
      title: '服务器ip',
      dataIndex: 'host_ip',
    },{
      title: '规则版本',
      dataIndex: 'rule_ver',
    },{
      title: '名单版本',
      dataIndex: 'list_ver',
    },{
      title: '风控版本',
      dataIndex: 'risk_ver',
    },{
      title: '工作状态',
      dataIndex: 'work_status',
    },{
      title: 'POST状态',
      dataIndex: 'post_status',
    },{
      title: 'ByPass',
      dataIndex: 'bypass_status',
    },{
      title: '上次ByPass时间',
      dataIndex: 'last_bypass_time',
    }]
  }}

  componentWillMount () {
    console.log(config.config.server_url+'/api/getclusters');
    

    axios.get(config.config.server_url+'/api/getclusters')
    .then((response)=>{
      //console.log(response.data.items[0].login)
      var datas=[];
      console.log(response.data.clusters.length)
      
      for (let i = 0; i < response.data.clusters.length; i++) {
        datas.push({
          key: i,
          cluster_id: response.data.clusters[i].cluster_id,
          cluster_desc: response.data.clusters[i].cluster_desc,
          host_name: response.data.clusters[i].server_name,
          host_ip:response.data.clusters[i].server_ip,
          rule_ver:response.data.clusters[i].server_rule,
          list_ver:response.data.clusters[i].server_list,
          risk_ver:response.data.clusters[i].server_risk_version,
          work_status:response.data.clusters[i].server_engine,
          post_status:response.data.clusters[i].server_post,
          bypass_status:response.data.clusters[i].server_bypass,
          last_bypass_time:response.data.clusters[i].server_bypass_last,
        });
      }
      this.setState({data : datas,loading:false});
      //console.log(config.name);
      
    })
  }

  



  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: 'Select All Data',
        onSelect: () => {
          this.setState({
            selectedRowKeys: [...Array(46).keys()],  // 0...45
          });
        },
      }, {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }, {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }],
      onSelection: this.onSelection,
    };
    return (
      <div>
        
        <Row>
          <Col span={5} offset={1}><Search
            placeholder="input search text"
            style={{ width: 300 }}
            onSearch={value => console.log(value)}
          /></Col>
          <Col span={2}><Riskselect name={"规则版本"} versions={[1.1,1.2,1.3]}/></Col> 
          <Col span={2}><Riskselect name={"名单版本"} versions={[1.1,1.2,1.3]}/></Col> 
          <Col span={2}><Riskselect name={"风控版本"} versions={[1.1,1.2,1.3]}/></Col>
          <Col span={10} offset={2}>
          <div>
            <Button type="primary" onClick={success}>一键更新Rule</Button>&nbsp;
            <Button type="primary" onClick={success}>一键更新List</Button>&nbsp;
            <Button type="primary" onClick={success}>一键更新Risk</Button>&nbsp;
            <Button type="danger">一键ByPass</Button>&nbsp;
            <Button type="danger">一键监控</Button>
            </div>
          </Col>
        </Row>
        <br /><br />
      <Table  {...this.state} rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} style={{margin:10}}/>
      </div>
    );
  }
}


export default Riskpublish;