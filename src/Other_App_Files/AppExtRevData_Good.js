// Aaron Rozanski
// ExtRev Charts work with ReCharts Library and JSON data - Eventually Database if I can get it to connect and pass params

import React, { Component } from 'react';
import './App.css';
import * as consts from "./constants/index.js";
import './CMScss.css';
import { Button } from './Buttons';
import { OptionsPane } from './OptionsPane';
import { BarChart, Bar, LineChart, Line, Legend, PieChart, Pie, ComposedChart, Area,
          Tooltip, ResponsiveContainer, RadarChart, PolarGrid, Radar,
          PolarAngleAxis, PolarRadiusAxis, YAxis, XAxis, CartesianGrid } from 'recharts';

const ineligibleDisplay  = (
  <ResponsiveContainer width="100%" height="100%">
  <LineChart width={800} height={500} data={consts.extrev}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year" padding={{ left: 5, right: 5 }} reversed />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="ineligible_cases.total" stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="ineligible_cases.self_funded" stroke="#82ca9d" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="ineligible_cases.home_state" stroke="#ff7300" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="ineligible_cases.no_signature" stroke="#d0ed57" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="ineligible_cases.internal_not_exhausted" stroke="#a4de6c" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="ineligible_cases.no_forms" stroke="#8dd1e1" activeDot={{ r: 8 }} />
  </LineChart>
  </ResponsiveContainer>
)
const caseTypeDisplay  = (
  <ResponsiveContainer width="100%" height="100%">
  <LineChart width={800} height={500} data={consts.extrev}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year" padding={{ left: 5, right: 5 }} reversed />
    <YAxis />
    <Tooltip />
    <Legend verticalAlign="top" />
    <Line type="monotone" name="Pre-Auth" dataKey='case_type.pre-auth' stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" name="Surgical" dataKey='case_type.surgical'  stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" name="DME" dataKey='case_type.DME'  stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" name="Lab Panel" dataKey='case_type.lab_panel'  stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" name="MHPAEA" dataKey='case_type.MHPAEA'  stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" name="Prescription" dataKey='case_type.prescription'  stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" name="Inpatient Stay" dataKey='case_type.inpatient_stay'  stroke="#8884d8" activeDot={{ r: 8 }} />
  </LineChart>
  </ResponsiveContainer>
)
const drugCasesDisplay  = (
  <ResponsiveContainer width="100%" height="100%">
  <LineChart width={800} height={500} data={consts.extrev}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year" padding={{ left: 5, right: 5 }} reversed />
    <YAxis />
    <Tooltip />
    <Legend verticalAlign="top" />
    <Line type="monotone" name="Humira" dataKey='drug_cases.Humira' stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" name="Otezla" dataKey='drug_cases.Otezla'  stroke="#83a6ed" activeDot={{ r: 8 }} />
    <Line type="monotone" name="Dupixent" dataKey='drug_cases.Dupixent'  stroke="#8dd1e1" activeDot={{ r: 8 }} />
    <Line type="monotone" name="Repatha" dataKey='drug_cases.Repatha'  stroke="#82ca9d" activeDot={{ r: 8 }} />
    <Line type="monotone" name="Aimovig" dataKey='drug_cases.Aimovig'  stroke="#a4de6c" activeDot={{ r: 8 }} />
    <Line type="monotone" name="Termfya" dataKey='drug_cases.Tremfya'  stroke="#d0ed57" activeDot={{ r: 8 }} />
    <Line type="monotone" name="Entyvio" dataKey='drug_cases.Entyvio'  stroke="#ffc658" activeDot={{ r: 8 }} />
  </LineChart>
  </ResponsiveContainer>
)
const totalDisplay = (
  <ResponsiveContainer width="100%" height="100%">
  <BarChart width={890} height={500} data={consts.extrev}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year" reversed />
    <YAxis dataKey="total_cases" />
    <Tooltip />
    <Legend verticalAlign="top" />
    <Bar dataKey="total_cases" fill="#ffc658" />
    <Bar dataKey="overturned" fill="#a4de6c" />
    <Bar dataKey="upheld" fill="#8dd1e1" />
  </BarChart>
  </ResponsiveContainer>
)

const SOURCE_FILE_INS = consts.extrevins;
const SOURCE_FILE_IRO = consts.extreviro;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSetChoice: '',
      dataSetDisplay: null,
      optionsPane: false,
      insDataYear: '2020',
      dataYear: '2020',
      errors: '',
    };

    this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
    this.filterData = this.filterData.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.insurerDistributionDisplay = this.insurerDistributionDisplay.bind(this);
    this.iroDistributionDisplay = this.iroDistributionDisplay.bind(this);
    this.iroDistributionRadarDisplay = this.iroDistributionRadarDisplay.bind(this);
  }

  insurerDistributionDisplay() {
    let dataYear = this.state.dataYear;
    console.log(dataYear);
    return (
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={880} height={500}>
      <Legend verticalAlign="top" />
      <Pie data={SOURCE_FILE_INS[dataYear]} dataKey="dist_value_step" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
      <Pie data={SOURCE_FILE_INS[dataYear]} dataKey="dist_value" nameKey="name" cx="50%" cy="50%" innerRadius={100} outerRadius={120} fill="#82ca9d" label />
    </PieChart>v
    </ResponsiveContainer>
    )};

    iroDistributionDisplay() {
      let dataYear = this.state.dataYear;
      console.log(dataYear);
      return (
      <ResponsiveContainer width="100%" height="100%">
      <PieChart width={880} height={500}>
        <Legend verticalAlign="top" />
        <Pie data={SOURCE_FILE_IRO[dataYear]} dataKey="dist_value_step" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
        <Pie data={SOURCE_FILE_IRO[dataYear]} dataKey="dist_value" nameKey="name" cx="50%" cy="50%" innerRadius={100} outerRadius={120} fill="#82ca9d" label />
      </PieChart>
      </ResponsiveContainer>
      )};

      iroDistributionRadarDisplay() {
        let dataYear = this.state.dataYear;
        console.log(dataYear);
        return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius={150} width={730} height={250} data={consts.extreviro[dataYear]}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 15]} />
            <Radar name="Standard" dataKey="dist_value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Expedited" dataKey="dist_value_expedited" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend verticalAlign="top" />
          </RadarChart>
        </ResponsiveContainer>
        )};

      aaDisplay() {
        let percent_aa = (consts.extrev.aa_cases / consts.extrev.totalcases) * 100;
        return (
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart width={890} height={500} data={consts.extrev}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" reversed />
          <YAxis/>
          <Tooltip />
          <Legend verticalAlign="top" />
          <Bar dataKey="aa_cases" fill="#8884d8" />
          <Line dataKey="aa_overturned" fill="orange" />
          <Area dataKey="aa_percent" fill="blue" />
        </ComposedChart>
        </ResponsiveContainer>
      )};
  
  getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}
/* Generic Convert Data Method to Recharts 0-Indexed Array of Objects
convertData(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) 
    let obj = { month: data[i].month };
    // loop throgh comodities
    for (let j = 0; j < data[i].commodities.length; j++) {
      let commodity = data[i].commodities[j];
      obj[commodity.name] = commodity.moves;
    }
    arr.push(obj);
  }
  return arr;
}
*/

clearErrors() {
  this.setState({ errors: '' });
}

filterData(value) {
  this.setState({ dataYear: value }, () => this.clearErrors());
  (this.state.dataSetChoice == "Insurer Distribution") ? this.setState({ dataSetDisplay: this.insurerDistributionDisplay()}) : this.clearErrors();
  (this.state.dataSetChoice == "IRO Distribution") ? this.setState({ dataSetDisplay: this.iroDistributionRadarDisplay()}) : this.clearErrors();
 // this.setState({ dataSetDisplay: this.insurerDistributionDisplay() }); Cant figure this fucking double click out callback func not working
}


handleSelectboxChange(event) {
  const target = event.target;
  const name = target.name;

  this.setState(() => ({[name]: event.target.value}));

  switch (event.target.value) {
    case 'Ineligible Cases':
      return this.setState({ dataSetDisplay: ineligibleDisplay, optionsPane: false });
    case 'Cases By Type':
      return this.setState({ dataSetDisplay: caseTypeDisplay, optionsPane: false });
    case 'Total Cases':
      return this.setState({ dataSetDisplay: totalDisplay, optionsPane: false });
    case 'Drug Cases':
      return this.setState({ dataSetDisplay: drugCasesDisplay, optionsPane: false });
    case 'Air Ambulance':
      return this.setState({ dataSetDisplay: this.aaDisplay(), optionsPane: false });
    case 'Insurer Distribution':
      return this.setState({ dataSetDisplay: this.insurerDistributionDisplay(), optionsPane: true });
    case 'IRO Distribution':
      return this.setState({ dataSetDisplay: this.iroDistributionRadarDisplay(), optionsPane: true });
    default:
      return this.setState({ dataSetDisplay: null });
  }
}

  componentDidMount() {
      console.log('compDidMount');
  }

  render() {
    const { stateCode, businessYear, dataSets, userSelection, 
      selectionResultData, fieldArray, convertedData } = this.state;
    return (
      <div className="page">
        <h1>Nebraska External Review Statistics</h1>
        <br />
        <br />
        <form>
          <div className="dataSets">
          <consts.SelectBox
            className="dataSetChoice"
            label="Data Set"
            name="dataSetChoice"
            options={consts.dataSets}
            onChangeFunction={this.handleSelectboxChange}
          />
          <Button
          onClick={this.filterData}
          className='filterButton'
          value='Filter'
          />
          </div>
        </form>
        <div className="testCharts">
          {(this.state.dataSetDisplay) ? 
          (<div className="display"><h3>{this.state.dataYear} - {this.state.dataSetChoice}</h3>{this.state.dataSetDisplay}</div>)
          :
          (<h2>Please Select a Data Set from the Menu</h2>)
          }
          </div>
          {(this.state.optionsPane) ? 
          (<OptionsPane 
            className='yearButton'
            name='yearSet'
            onClick={this.filterData}
          />)
          :
          ('')
          }
        
        </div>
     );
    }
  }

export default App;

const optionsPane = ({ filterData }) => (
  <div className="optionsPane">
          <Button
          onClick={filterData}
          className='filterButton'
          value='2020'
          />
          <Button
          onClick={filterData}
          className='filterButton'
          value='2019'
          />
          <Button
          onClick={filterData}
          className='filterButton'
          value='2018'
          />
          <Button
          onClick={filterData}
          className='filterButton'
          value='2017'
          />
          <Button
          onClick={filterData}
          className='filterButton'
          value='2016'
          />
          <Button
          onClick={filterData}
          className='filterButton'
          value='2015'
          />
          <Button
          onClick={filterData}
          className='filterButton'
          value='2014'
          />
          <Button
          onClick={filterData}
          className='filterButton'
          value='2013'
          />
  </div>
)
/*
const renderLineChart = (
  <LineChart width={400} height={400} data={consts.testData}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
*/

/*
  const MovieTable = ({ list, fetchReviewsForMovie}) =>
  <div className="table">
    {list.map(item =>
      <div key={item.body} className="table-row">
        <span style={largeColumn}>
        <img src={item.label} alt="" height={100} />
        </span>
        <span style={largeColumn}>
         <h1>{item.label}</h1> 
         Year: {item.label}<br />
         Directed by {item.label}
        </span>
        <span style={smallColumn}>
          <Button
            onClick={() => fetchReviewsForMovie(item.id)}
            className="button-inline"
          >
            Get Reviews
          </Button>
        </span>
      </div>
    )}
  </div>
*/
/*
<ResponsiveContainer width="100%" height="100%">
<RadarChart outerRadius={90} width={730} height={250} data={consts.extrev}>
  <PolarGrid />
  <PolarAngleAxis dataKey="year" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Overturned" dataKey="overturned" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Upheld" dataKey="upheld" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>
</ResponsiveContainer>

/*
const Button = ({
  onClick,
  className = '',
  children,
}) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>
*/


