import { Table } from 'antd';
import React from 'react'

const columns = [{
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
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    cluster_id: `${i}`,
    cluster_desc: "蓝汛",
    host_name: "BJS-0987",
    host_ip:"127.0.0.1",
    rule_ver:1.25,
    list_ver:1.36,
    work_status:'拦截模式',
    post_status:'拦截模式',
    bypass_status:'从未',
    last_bypass_time:'2006-09-08',
  });
}

class Rulemanage extends React.Component {
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
  };
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
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    );
  }
}

export default Rulemanage;