import React, { Component } from 'react';
import './App.css';
import './styles/Sarpy.css';
import * as consts from "./constants/index.js";
import LineChartHpi from './components/LineChartHpi';
import LandUseDisplay from './components/LandUseDisplay';
import UnitsLostDisplay from './components/UnitsLostDisplay';
import PopulationCharts from './components/PopulationCharts';
import FunnelCharts from './components/FunnelCharts';
import RentalVacancyArea from './components/RentalVacancyArea';
import HousingDemandSankey from './components/HousingDemandSankey';


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
      selectedZip: '',
    };

    this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
    this.handleZipSelectboxChange = this.handleZipSelectboxChange.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }
  
  getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}

handleZipSelectboxChange(event) {
  const target = event.target;
  const name = target.name;

  this.setState({ 'selectedZip': target.value });
  }

handleSelectboxChange(event) {
  const target = event.target;
  const name = target.name;

  this.setState(() => ({[name]: event.target.value}));

  switch (event.target.value) {
    case 'FEMA Verified Loss':
      return this.setState({ dataSetDisplay: <FunnelCharts /> });
    case 'Housing Land Use Projections':
      return this.setState({ dataSetDisplay: <LandUseDisplay /> });
    case 'Population':
      return this.setState({ dataSetDisplay: <PopulationCharts /> });
    case 'Summary Data':
      return this.setState({ dataSetDisplay: null });
    case 'Units Lost':
      return this.setState({ dataSetDisplay: <UnitsLostDisplay /> });
    case 'Housing Demand':
      return this.setState({ dataSetDisplay: <HousingDemandSankey /> });
    case 'Historical Rental Vacancy Rate':
      return this.setState({ dataSetDisplay: <RentalVacancyArea /> });
    case 'HPI':
      return this.setState({ dataSetDisplay: <LineChartHpi /> });
    default:
      return this.setState({ dataSetDisplay: null });
  }
}

clearErrors() {
  this.setState({ errors: '' });
  console.log('err');
}

  componentDidMount() {
      console.log('compDidMount');
  }

  render() {
    const { stateCode, businessYear, dataSets, userSelection, 
      selectionResultData, fieldArray, filterData } = this.state;
    return (
      <div className="page">
        <h1>Sarpy County Housing Data</h1>
        <br />
        <br />
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
        
          <div className="testCharts">
              {(this.state.dataSetDisplay) ?
              (<div className="display">{this.state.dataSetDisplay}</div>)
              :
              (<h2>Please Select a Data Set from the Menu</h2>)
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
