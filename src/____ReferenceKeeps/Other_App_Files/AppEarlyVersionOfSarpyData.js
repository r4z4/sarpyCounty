// Aaron Rozanski
// Sarpy County Housing Data - Recharts - NIFA

import React, { Component } from 'react';
import './App.css';
import * as consts from "./constants/index.js";
import PropTypes from 'prop-types';
import './CMScss.css';
import { Button } from './Buttons';
import { OptionsPane } from './OptionsPane';
import JsonFunction from "json-function";
import { BarChart, Bar, LineChart, Line, Legend, PieChart, Pie, Cell, ComposedChart, Area, Sankey, AreaChart,
          Tooltip, ResponsiveContainer, RadarChart, PolarGrid, Radar, Funnel, FunnelChart, LabelList, Label,
          PolarAngleAxis, PolarRadiusAxis, YAxis, XAxis, CartesianGrid } from 'recharts';
import DemoSankeyNode from './constants/DemoSankeyNode.js';


const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSetChoice: '',
      dataSetDisplay: null,
      optionsPane: false,
      optionsPanePop: false,
      chartTitle: '',
      insDataYear: '2020',
      dataYear: '2020',
      errors: '',
    };
/*
    this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
    this.filterData = this.filterData.bind(this);
    this.filterDataPop = this.filterDataPop.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
*/
    /*this.insurerDistributionDisplay = this.insurerDistributionDisplay.bind(this);
    this.iroDistributionDisplay = this.iroDistributionDisplay.bind(this);*/
  }

  
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
/*
handleSelectboxChange(event) {
  const target = event.target;
  const name = target.name;

  this.setState(() => ({[name]: event.target.value}));

  switch (event.target.value) {
    case 'FEMA Verified Loss':
      return this.setState({ dataSetDisplay: fvlFunnelCountyDisplay, optionsPane: true, optionsPanePop: false, chartTitle: 'FEMA Verified Loss' });
    case 'Housing Land Use Projections':
      return this.setState({ dataSetDisplay: landUseDisplay, optionsPane: false, optionsPanePop: false, chartTitle: 'Housing and Land Use Projections' });
    case 'Population':
      return this.setState({ dataSetDisplay: populationBarDisplay, optionsPane: false, optionsPanePop: true, chartTitle: 'Population Projections' });
    case 'Summary Data':
      return this.setState({ dataSetDisplay: null, optionsPane: false, optionsPanePop: false, chartTitle: '' });
    case 'Units Lost':
      return this.setState({ dataSetDisplay: fvlFunnelUnitsLostDisplay, optionsPane: false, optionsPanePop: false, chartTitle: 'Units Lost' });
    case 'Housing Demand':
      return this.setState({ dataSetDisplay: housingDemandSankey, optionsPane: false, optionsPanePop: false, chartTitle: 'Housing Demand' });
    case 'Historical Rental Vacancy Rate':
      return this.setState({ dataSetDisplay: historicalRentVacancyArea, optionsPane: false, optionsPanePop: false, chartTitle: 'Historical Rental Vacancy Rate' });
    default:
      return this.setState({ dataSetDisplay: null });
  }
}

clearErrors() {
  this.setState({ errors: '' });
  console.log('err');
}

filterData(e) {
console.log(e.target.value);
  switch(e.target.value) {
    case 'Owner':
      return this.setState({ dataSetDisplay: fvlFunnelOwnerDisplay });
    case 'Rental':
      return this.setState({ dataSetDisplay: fvlFunnelRentalDisplay });
    case 'County':
      return this.setState({ dataSetDisplay: fvlFunnelCountyDisplay });
    default:
      return this.setState({ dataSetDisplay: fvlFunnelCountyDisplay });
  }
}

filterDataPop(e) {
  console.log(e.target.value);
    switch(e.target.value) {
      case 'Bar':
        return this.setState({ dataSetDisplay: populationBarDisplay });
      case 'Composed':
        return this.setState({ dataSetDisplay: populationComposedDisplay });
      case 'Line':
        return this.setState({ dataSetDisplay: populationDisplay });
      case 'Pie':
        return this.setState({ dataSetDisplay: populationPieDisplay });
      case 'Pie SbS':
        return this.setState({ dataSetDisplay: populationPieSideDisplay });
      default:
        return this.setState({ dataSetDisplay: populationBarDisplay });
    }
  }
*/

/*handleSelectboxChange(event) {
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
*/
  componentDidMount() {
      console.log('compDidMount');
  }

  render() {
    const { stateCode, businessYear, dataSets, userSelection, 
      selectionResultData, fieldArray, filterData, AllData } = this.state;
      const ID = JsonFunction.select(consts.Patient, "PatientID");
    return (
      <div className="page">
        <h1>Sarpy County Housing Data</h1>
        <br />
        <br />
        {/* 
        <form>
          <div className="dataSets">
          <consts.SelectBox
            className="dataSetChoice"
            label="Data Set"
            name="dataSetChoice"
            options={consts.sarpyDataSets}
            onChangeFunction={this.handleSelectboxChange}
          />
          </div>
        </form>
        <h1>{this.state.chartTitle}</h1>
        <div className="optionsPane">
          {(this.state.optionsPane) ? 
          (<div>
            <Button
            onClick={this.filterData}
            className='filterButton'
            value='Owner'
            />
            <Button
            onClick={this.filterData}
            className='filterButton'
            value='Rental'
            />
            <Button
            onClick={this.filterData}
            className='filterButton'
            value='County'
            />
            </div>)
          :
          ('')
          }

          {(this.state.optionsPanePop) ? 
          (<div>
            <Button
            onClick={this.filterDataPop}
            className='filterButton'
            value='Composed'
            />
            <Button
            onClick={this.filterDataPop}
            className='filterButton'
            value='Line'
            />
            <Button
            onClick={this.filterDataPop}
            className='filterButton'
            value='Bar'
            />
            <Button
            onClick={this.filterDataPop}
            className='filterButton'
            value='Pie'
            />
            <Button
            onClick={this.filterDataPop}
            className='filterButton'
            value='Pie SbS'
            />
            </div>)
          :
          ('')
          }
          </div>
          */}
        <div className="testCharts">
          {(this.state.dataSetDisplay) ?
          (<div className="display">{this.state.dataSetDisplay}</div>)
          :
          (
          <div> 
            Hello  
             {consts.JSONTable(ID)}
             
          </div>  
          )

          }
          </div>
         
        </div>
    )
  }
}

export default App;

/*
const optionsPane = (
  <div className="optionsPane">
          <Button
          onClick={this.filterData}
          className='filterButton'
          value='Owner'
          />
          <Button
          onClick={this.filterData}
          className='filterButton'
          value='Rental'
          />
          <Button
          onClick={this.filterData}
          className='filterButton'
          value='County'
          />
  </div>
  )
  */


{/*
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
*/
/*
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
        */}