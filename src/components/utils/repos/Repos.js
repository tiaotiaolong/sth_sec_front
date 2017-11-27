import React from 'react'
import { Input } from 'antd';
import { Collapse } from 'antd';
import axios from 'axios';

const Search = Input.Search;
const Panel = Collapse.Panel;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



class Status extends React.Component{

  constructor() {
    super()
    this.state = {
      texts : "tiao"
    }
  }

  componentWillMount () {
    axios.get('https://api.github.com/search/users?q=tiaotiaolong')
    .then((response)=>{
      this.state.texts=response.data.total_count;
    })
  }
  
  render(){
      return(
      <div>
        <Search
          placeholder="input search text"
          style={{ width: 200 }}
          onSearch={value => console.log(value)}
        />
        <Collapse accordion style={{ width: 400}}>
        <Panel header="集群一的状态信息" key="1">
          <p>{this.state.texts}</p>
        </Panel>
      </Collapse>
    </div>)
    }
}
export default Status 