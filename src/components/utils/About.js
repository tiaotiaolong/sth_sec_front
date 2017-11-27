import { Steps } from 'antd';
import React from 'react';
const Step = Steps.Step;

class About extends React.Component{
  render(){
      return (
        <div className="stepsss">
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </div>
      )
    }
}
export default About;
