import React, { Fragment, Component } from 'react';
//import {getParsedDateISO} from './utils';
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

class LandUseDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSetChoice: '',
      dataSetDisplay: null,
      chartTitle: 'Housing and Land Use Projections',
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

    const { chartTitle } = this.state;

    return (
      <div style={{ "height": "600px"}}>
        <h1>{chartTitle}</h1>
  <ResponsiveContainer width="100%" height="100%">
  <BarChart width={890} height={500} data={consts.SarpyDataLandUse}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend verticalAlign="top" />
    <Bar dataKey="needed" fill="#7dc05b" />
    <Bar dataKey="designated" fill="#90175d" />
  </BarChart>
  </ResponsiveContainer>
  </div>
    )
  }
}

export default LandUseDisplay;
