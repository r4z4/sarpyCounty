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

class RentalVacancyArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSetChoice: '',
      dataSetDisplay: null,
      chartTitle: 'Historical Rental Vacancy Rate',
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
          <AreaChart
            width={730}
            height={250}
            data={consts.Sarpy_Rental_Vacancy_Ranges}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <XAxis dataKey="year" />
            <YAxis />
            <Area dataKey="rangeNEtoUS" stroke="#8884d8" strokeWidth={3} fill="#7cc0c6" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default RentalVacancyArea;
