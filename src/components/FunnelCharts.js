import React, { Fragment, Component } from 'react';
//import {getParsedDateISO} from './utils';
import * as consts from "../constants/index.js";
import { Bar, Line, Legend, ComposedChart, Radar, PolarRadiusAxis,
  Tooltip, ResponsiveContainer, LabelList, PolarAngleAxis, PolarGrid,
  YAxis, XAxis, CartesianGrid, RadarChart, Funnel, FunnelChart } from 'recharts';

//const today = getParsedDateISO(dateString);
//To find certain rows ==>
//let res = HPI_DATA.filter(row => row.Zip.includes('oli'));

// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`
const funnelOptions = ['Owner', 'Rental', 'County',]

const fvlDisplay = (
  <ResponsiveContainer width="100%" height="100%">
    <RadarChart outerRadius={150} width={730} height={250} data={consts.SarpyData}>
      <PolarGrid />
      <PolarAngleAxis />
      <PolarRadiusAxis angle={30} domain={[200, 350]} />
      <Radar name="Sarpy" dataKey="FEMA.fvl_sarpy_severe" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Total" dataKey="FEMA.fvl_allfour_severe" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend verticalAlign="top" />
    </RadarChart>
  </ResponsiveContainer>
  )

  const fvlComposedDisplay = (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart width={730} height={250} data={consts.SarpyData[2].FEMA}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="count" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="severe" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  )

  const fvlFunnelDisplay = (
    <ResponsiveContainer width="100%" height="100%">
      <FunnelChart width={730} height={250}>
        <Tooltip />
        <Funnel
          dataKey="count"
          data={consts.FVL_Rental_Data}
          isAnimationActive
        >
          <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  )

  const fvlFunnelOwnerDisplay = (
    <ResponsiveContainer width="100%" height="100%">
      <FunnelChart width={730} height={250}>
        <Tooltip />
        <Funnel
          dataKey="count"
          data={consts.FVL_Owner_Data}
          isAnimationActive
        >
          <LabelList position="insideRight" stroke="none" dataKey="name"
          style={{ fontSize: '150%', fill: 'rgba(0, 0, 0, 0.87)' }} />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  )

  const fvlFunnelRentalDisplay = (
    <ResponsiveContainer width="100%" height="100%">
      <FunnelChart width={730} height={250}>
        <Tooltip />
        <Funnel
          dataKey="count"
          data={consts.FVL_Rental_Data}
          isAnimationActive
        >
          <LabelList position="right" fill="#000" stroke="none" dataKey="name" 
          style={{ fontSize: '150%', fill: 'rgba(0, 0, 0, 0.87)' }} />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  )

  const fvlFunnelCountyDisplay = (
    <ResponsiveContainer width="100%" height="100%">
      <FunnelChart width={730} height={250}>
        <Tooltip />
        <Funnel
          dataKey="count"
          data={consts.FVL_County_Data}
          isAnimationActive
        >
          <LabelList position="center" stroke="none" dataKey="name" 
          style={{ fontSize: '150%', fontWeight: 'bold', fill: 'rgba(0, 0, 0, 0.87)' }} />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  )

class FunnelCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: null,
      chartTitle: 'FEMA Verified Loss',
    };

    this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
    this.setState = this.setState.bind(this);
    this.handleFunnelSelectboxChange = this.handleFunnelSelectboxChange.bind(this);
  }

  handleSelectboxChange = (event) => {
      const target = event.target;
      //const name = target.name;
    
      this.setState({ "selectedZip": target.value });
  }

  handleFunnelSelectboxChange = (event) => {
    const target = event.target;
      switch(target.value) {
        case 'Owner':
          return this.setState({ display: fvlFunnelOwnerDisplay });
        case 'Rental':
          return this.setState({ display: fvlFunnelRentalDisplay });
        case 'County':
          return this.setState({ display: fvlFunnelCountyDisplay });
        default:
          return this.setState({ display: null });
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

    const { chartTitle } = this.state;

    return (
      <div style={{ "height": "600px"}}>
        <h1>{chartTitle}</h1>
        <div className="dataSets">
      <consts.SelectBox
        className="popChoice"
        label="Population"
        name="popChoice"
        options={funnelOptions}
        onChangeFunction={this.handleFunnelSelectboxChange}
      />
      </div>
        {this.state.display}
      </div>
    )
  }
}

export default FunnelCharts;
