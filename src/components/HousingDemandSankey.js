import React, { Fragment, Component } from 'react';
//import {getParsedDateISO} from './utils';
import * as consts from "../constants/index.js";
import { Tooltip, ResponsiveContainer, Sankey } from 'recharts';
import DemoSankeyNode from './DemoSankeyNode.js';

//const today = getParsedDateISO(dateString);
//To find certain rows ==>
//let res = HPI_DATA.filter(row => row.Zip.includes('oli'));

// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`

const SankeyDataT = {
  "nodes": [
    {"name": "Total Housing Units"},
    {"name": "Owner Units"},
    {"name": "Rental Units"},
    {"name": "Workforce"},
    {"name": "Low-Income Owner"},
    {"name": "Low-Income Rental"},
  ],
  links: [
    { source: 0, target: 1, value: 3618 },
    { source: 0, target: 2, value: 1961 },
    { source: 0, target: 3, value: 2900 },
    { source: 1, target: 4, value: 187 },
    { source: 2, target: 5, value: 278 },
  ]
};

class HousingDemandSankey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSetChoice: '',
      dataSetDisplay: null,
      chartTitle: 'Housing Demand',
    };

    this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
  }

handleSelectboxChange = (event) => {
      const target = event.target;
      //const name = target.name;
    
      this.setState({ "selectedZip": target.value });
  }

clearErrors() {
  this.setState({ errors: '' });
  console.log('err');
}

  render() {

    const { chartTitle } = this.state;

    return (
      <div style={{ "height": "600px"}}>
        <h1>{chartTitle}</h1>
        <ResponsiveContainer width="100%" height="100%">
          <Sankey
            width={960}
            height={500}
            data={SankeyDataT}
            node={<DemoSankeyNode containerWidth={960} />}
            nodePading={50}
            margin={{
              left: 200,
              right: 200,
              top: 100,
              bottom: 100,
            }}
            link={{ stroke: '#77c878' }}
          >
          <Tooltip />
          </Sankey>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default HousingDemandSankey;
