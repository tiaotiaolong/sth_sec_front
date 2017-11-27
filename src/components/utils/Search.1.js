import React from 'react';
import { Input } from 'antd';
const Search = Input.Search;

class Colonysearch extends React.Component{

    render(){
        return (

            <Search
            placeholder="input search text"
            style={{ width: 200 }}
            onSearch={value => console.log(value)}
          />

        )
    }
}

export default Colonysearch;