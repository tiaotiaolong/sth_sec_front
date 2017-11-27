import { Modal, Button, Input ,Row,Col,Tag,Select} from 'antd';
import React from 'react'
import { connect } from 'react-redux'
const Option = Select.Option;

class Riskaddnew extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    console.log(this.props.datas[2])
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>{this.props.button_name}</Button>
        <Modal
          title={this.props.button_name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Row>
          <Col span={2} ><Tag color="black">风控规则ID : 9</Tag></Col>
        </Row>
        <br />
        <Row>
          <Col ><Input placeholder="URL" /></Col>
        </Row>
        <br />
        <Row>
          <Col ><Input placeholder="业务描述" /></Col>
        </Row>
        <br />
        <Row>
          <Col ><Input placeholder="用户字段名" /></Col>
        </Row>
        <br />
        <Row>
          <Col span={10}><Select defaultValue="手机号" style={{ width: 300 }}>
                    <Option value="手机号">手机号</Option>
                    <Option value="微信开放账户">微信开放账户</Option>
                    <Option value="QQ开放账户">QQ开放账户</Option>
                    <Option value="邮箱账户">邮箱账户</Option>
                    <Option value="其他账户类型">其他账户类型</Option>
          </Select></Col>
          <Col span={4} offset={6}><Tag color="black">用户账户类型</Tag></Col>
        </Row>
        <br />
        <Row>
          <Col span={10}><Select defaultValue="ByPass模式" style={{ width: 300 }}>
                    <Option value="ByPass模式">ByPass模式</Option>
                    <Option value="评级模式">评级模式</Option>
                    <Option value="主动干预模式">主动干预模式</Option>
          </Select></Col>
          <Col span={4} offset={6}><Tag color="black">风控模式</Tag></Col>
        </Row>
        <br />
        <Row>
          <Col span={10}><Select defaultValue="active" style={{ width: 300 }}>
                    <Option value="active">active</Option>
                    <Option value="login">login</Option>
                    <Option value="register">register</Option>
          </Select></Col>
          <Col span={4} offset={6}><Tag color="black">风险规则类型</Tag></Col>
        </Row>
        <br />
        <Row>
          <Col span={10}><Select defaultValue="GET" style={{ width: 300 }}>
                    <Option value="GET">GET</Option>
                    <Option value="POST">POST</Option>
                    <Option value="JSON">JSON</Option>
          </Select></Col>
          <Col span={4} offset={6}><Tag color="black">用户字段区域</Tag></Col>
        </Row>
        <br />
        <Row>
          <Col span={10}><Select defaultValue="HEADER" style={{ width: 300 }}>
                    <Option value="HEADER">HEADER</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="GET">GET</Option>
                    <Option value="POST">POST</Option>
          </Select></Col>
          <Col span={4} offset={6}><Tag color="black">风险评级区域</Tag></Col>
        </Row>
        
       

        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    datas: state.datas,
  }
  // 这里的state是react-redux store中的state，前面我们已经写过相关的代码，return { loading: false }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDatas: (datas) => {
      dispatch({ type: 'ADD_RISKVERSION_DATA', datas: 10 })
    }
  }
}

Riskaddnew=connect(mapStateToProps,mapDispatchToProps)(Riskaddnew)
export default Riskaddnew;