import React, { Fragment, Component } from 'react';
//import {getParsedDateISO} from './utils';
import * as consts from "../constants/index.js";
import { FunnelChart, Funnel, Tooltip, ResponsiveContainer, LabelList} from 'recharts';

//const today = getParsedDateISO(dateString);
//To find certain rows ==>
//let res = HPI_DATA.filter(row => row.Zip.includes('oli'));

// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`

class UnitsLostDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSetDisplay: null,
      chartTitle: 'Units Lost',
    };

    //this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
  }

  render() {

    const { chartTitle } = this.state;

    return (
      <div style={{ "height": "600px"}}>
        <h1>{chartTitle}</h1>
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart width={730} height={250}>
            <Tooltip />
              <Funnel
                dataKey="count"
                data={consts.UnitsLost}
                isAnimationActive
              >
              <LabelList position="insideRight" fill="#000" stroke="none" dataKey="name"
               style={{ fontSize: '150%', fontWeight: 'bold', fill: 'rgba(0, 0, 0, 0.87)' }} />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default UnitsLostDisplay;
