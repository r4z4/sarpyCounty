import React, { Fragment, Component } from 'react';
//import {getParsedDateISO} from './utils';
import HPI_DATA from '../constants/data/HpiByZip.json';
import ZipCodes from '../constants/data/NE_ZipCodeList.json';
import * as consts from "../constants/index.js";
import { BarChart, Bar, LineChart, Line, Legend, Cell, ComposedChart, Area, AreaChart,
  Tooltip, ResponsiveContainer, LabelList, Label,
  YAxis, XAxis, CartesianGrid } from 'recharts';

const dateString = (new Date()).toISOString(); 
//const today = getParsedDateISO(dateString);
//To find certain rows ==>
//let res = HPI_DATA.filter(row => row.Zip.includes('oli'));

// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`

class LineChartHpi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSetChoice: '',
      dataSetDisplay: null,
      selectedZip: '68124',
      chartTitle: 'HPI',
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
  componentDidMount() {
      console.log('compDidMount');
  }

  render() {

    const { chartTitle, selectedZip } = this.state;
    let selectedZipData = HPI_DATA['HpiByZip'][`${selectedZip}`]

    return (
      <div style={{ "height": "600px"}}>
        <h1>{chartTitle}</h1>
      <div className="dataSets">
      <consts.SelectBox
        className="zipChoice"
        label="Zip Code"
        name="zipChoice"
        options={ZipCodes.zips}
        onChangeFunction={this.handleSelectboxChange}
      />
      </div>
    <ResponsiveContainer width="100%" height="90%">
    <LineChart width={300} height={300} data={selectedZipData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey='Year' />
      <YAxis dataKey='HPI' type="number" domain={['dataMin', 'dataMax']}/>
      <Legend align="right" verticalAlign="middle" layout="vertical" />
      <Tooltip />
      <Line type="monotone" dataKey="HPI" name="HPI" stroke="#82ca9d" strokeWidth={3} activeDot={{ r: 8 }} />
    </LineChart>
    </ResponsiveContainer>
    </div>
    )
  }
}

export default LineChartHpi;
