import React from 'react'
import { Input } from 'antd';
import { Collapse } from 'antd';
const Search = Input.Search;
const Panel = Collapse.Panel;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Colonyinfo extends React.Component{
  
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
          <p>{text}</p>
        </Panel>
        
      </Collapse>
    </div>)
    }
}
export default Colonyinfo 