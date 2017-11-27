import { Table, Col ,Row, message} from 'antd';
import { Menu, Dropdown, Button, Icon, Input } from 'antd';
import { connect } from 'react-redux'
import { createStore } from 'redux'
import Riskselect from './Riskselect.js'
import Riskaddnew from './Riskaddnew.js'
import Risksavenew from './Risksavenew.js'
import React ,{PropTypes}from 'react'
import axios from 'axios'
import {addRiskverisonData} from '../../../reducers/act_reduce.js'
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


class Riskversion extends React.Component {

  constructor () {
    super()
    this.state = {
    selectedRowKeys: [],  // Check here to configure the default column
    data:[],
    loading: true,
    columns:[{
      title: 'URL',
      dataIndex: 'risk_url_name',
    }, {
      title: '业务描述',
      dataIndex: 'risk_url_desc',
    }, {
      title: '风控规则类型',
      dataIndex: 'risk_RType',
    },{
      title: '风控模式',
      dataIndex: 'risk_model',
    },{
      title: '用户账户类型',
      dataIndex: 'risk_AccountType',
    },{
      title: '用户字段名',
      dataIndex: 'risk_user_id',
    },{
      title: '用户字段区域',
      dataIndex: 'risk_method',
    },{
      title: '风险评级区域',
      dataIndex: 'risk_ratearea',
    }]
  }}

  componentWillMount () {
    //console.log(config.config.server_url+'/api/getclusters');
    

    axios.get(config.config.server_url+'/api/getrisk')
    .then((response)=>{
      //console.log(response.data.items[0].login)
      var datas=[];
      //console.log(response.data.clusters.length)
      
      for (let i = 0; i < response.data.risk.length; i++) {
        datas.push({
          key: i,
          risk_url_name: response.data.risk[i].risk_url_name,
          risk_url_desc: response.data.risk[i].risk_url_desc,
          risk_RType: response.data.risk[i].risk_RType,
          risk_model:response.data.risk[i].risk_model,
          risk_AccountType:response.data.risk[i].risk_AccountType,
          risk_user_id:response.data.risk[i].risk_user_id,
          risk_method:response.data.risk[i].risk_method,
          risk_ratearea:response.data.risk[i].risk_ratearea,
        });
      }
      //修改当前状态
      this.setState({data : datas,loading:false});
      //将当前状态添加到Store
      this.addDataStore();

    })
  }

  //自定义的一些函数：
  //将当前数据加入到store中，维护其他组件可用性
  addDataStore(){
    console.log(this.state.data)
    this.props.addDataStore(this.state.data)
  }


   onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    console.log(this.state.data[selectedRowKeys[0]]);
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
    console.log(this.props.data)
    return (
      <div>
        <Row>
          <Col span={1} offset={1}>
            <Riskaddnew button_name={'添加新的风控规则'}/>
          </Col>
          
          <Col span={4} offset={1}>
            <Risksavenew />
          </Col>

          <Col span={2} offset={14}>
            <Riskaddnew button_name={'编辑当前的风控规则'} />
          </Col>
        </Row>
        <br />
      <Table  {...this.state} rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} style={{margin:10}}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    datas: state.datas
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addDataStore: (datas) => {
//       dispatch({ type: 'ADD_RISKVERSION_DATA', datas: datas })
//     }
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    addDataStore: (datas) => {
      dispatch(addRiskverisonData(datas))
    }
  }
}


Riskversion=connect(mapStateToProps,mapDispatchToProps)(Riskversion)
export default Riskversion;

