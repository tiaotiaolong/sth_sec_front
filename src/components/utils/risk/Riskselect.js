import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { Select } from 'antd';
const Option = Select.Option;


//const versions=[1.3,1.2,1.1];


class Riskselect extends React.Component{

    static defaultProps = {
        versions:[],
        name:''
      }
    

    render(){
    
    return (
        <Select defaultValue={this.props.name} style={{ width: 120 }} >
        {
            
            this.props.versions.map((key,version)=>{
            return (
                <Option value={key}>{this.props.versions[version]}</Option>
            )
        })
        }
        </Select>
    )
}

}

export default Riskselect;