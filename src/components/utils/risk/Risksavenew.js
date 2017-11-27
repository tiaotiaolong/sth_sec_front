import { Modal, Button ,Input,Tag} from 'antd';
import React from 'react'
const { TextArea } = Input;

class Risksavenew extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>保存为新版本</Button>
        <Modal
          title="将当前的风控规则保存为新版本"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          
          <Tag color="black">规则版本 : 1.5</Tag>
          <br/><br/>
          <p>请为当前的风控版本添加注释，以便您进行版本回退</p>
          <TextArea rows={4} />
        </Modal>
      </div>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}

export default Risksavenew;