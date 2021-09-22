// Aaron Rozanski
// Sarpy County Housing Data - Recharts - NIFA

import React, { Component } from 'react';
import './App.css';
import * as consts from "./constants/index.js";
import PropTypes from 'prop-types';
import './CMScss.css';
import { Button } from './Buttons';
import { OptionsPane } from './OptionsPane';
import { BarChart, Bar, LineChart, Line, Legend, PieChart, Pie, Cell, ComposedChart, Area, Sankey, AreaChart,
          Tooltip, ResponsiveContainer, RadarChart, PolarGrid, Radar, Funnel, FunnelChart, LabelList, Label,
          PolarAngleAxis, PolarRadiusAxis, YAxis, XAxis, CartesianGrid } from 'recharts';
import DemoSankeyNode from './constants/DemoSankeyNode.js';


const unitsLostData = [
  {
    "name":"Total Units Lost",
    "count":399,
    "fill":"#8884d8"
  },
  {
    "name":"Low-to-Mid Income",
    "count":340,
    "fill":"#45716d"
  },
  {
    "name":"Mobile Homes",
    "count":200,
    "fill":"#8ccc02"
  }
]

const ownerData = [
            {
              "name":"Owners Requiring Assistance",
              "count":719,
              "fill":"#8884d8"
            },
            {
              "name":"Owners with FVL Over $25,000",
              "count":217,
              "fill":"#8dd1e1"
            },
            {
              "name":"Owners with FVL Level Severe",
              "count":170,
              "fill":"#a4de6c"
            }
          ]

const rentalData = [
            {
              "name":"Rentals Requiring Assistance",
              "count":263,
              "fill":"#8884d8"
            },
            {
              "name":"Rentals with FVL Over $5,000",
              "count":139,
              "fill":"#8dd1e1"
            },
            {
              "name":"Rentals with FVL Level Severe",
              "count":89,
              "fill":"#a4de6c"
            }
          ]

const countyData = [
            {
              "name":"Severe Cases - All 4 Counties",
              "count":316,
              "fill":"#90175d"
            },
            {
              "name":"Severe Cases - Sarpy County",
              "count":259,
              "fill":"#47cb00"
            }
          ]

const sankeyData = {
            "nodes": [
              {"name": "Total Housing Units"},
              {"name": "Owner Units"},
              {"name": "Rental Units"},
              {"name": "Workforce"},
              {"name": "Low-Income Owner"},
              {"name": "Low-Income Rental"}
            ],
            links: [
              { source: 0, target: 1, value: 3618 },
              { source: 0, target: 2, value: 1961 },
              { source: 0, target: 3, value: 2900 },
              { source: 1, target: 4, value: 187 },
              { source: 2, target: 5, value: 278 },
            ]
          };

//Data is getting there, but having issues accessing the array
const populationDisplay  = (
  <ResponsiveContainer width="100%" height="100%">
  <LineChart width={300} height={500} data={consts.SarpyData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year" />
    <YAxis domain={[18000, 75000]} />
    <Legend align="right" verticalAlign="middle" layout="vertical" />
    <Tooltip />
    <Line type="monotone" dataKey="households.total" name="Total" stroke="#82ca9d" strokeWidth={3} activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="households.owner" name="Owner" stroke="#ff7300" strokeWidth={3} activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="households.rental" name="Rental" stroke="#90175d" strokeWidth={3} activeDot={{ r: 8 }} />
  </LineChart>
  </ResponsiveContainer>
)

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

const populationBarDisplay  = (
  <ResponsiveContainer width="100%" height="100%">
<BarChart width={730} height={250} data={consts.SarpyDataHousingDemo}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend verticalAlign="bottom" />
  <Bar dataKey="2020" shape={<TriangleBar />} fill="#8884d8" />
  <Bar dataKey="2025" shape={<TriangleBar />} fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
  )

  const COLORS = ['#0088FE', '#00C49F'];
  const COLORSa = ['#90175d', '#8bbc87'];
  const pieData2020 = [
    { name: 'Owner', value: 50406 },
    { name: 'Rental', value: 19185 },
  ];
  const pieData2025 = [
    { name: 'Owner', value: 53493 },
    { name: 'Rental', value: 20393 },
  ];
  const populationPieDisplay  = (
    <ResponsiveContainer width="100%" height="100%">
  <PieChart width={800} height={400}>
				<Pie
					data={pieData2020}
					/*cx={150}
					cy={200}*/
					innerRadius={120}
					outerRadius={160}
          nameKey='name'
          label
					fill="#8bbc87"
					paddingAngle={5}
					dataKey="value"
				>
          <Label value="2020" offset={20} position="left" />
					{
						pieData2020.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSa[index % COLORS.length]} />)
					}
				</Pie>
        <Pie
					data={pieData2025}
					/*cx={460}
					cy={200}*/
					innerRadius={60}
					outerRadius={80}
          nameKey='name'
          label
					fill="#90175d"
					paddingAngle={5}
					dataKey="value"
				>
          <Label value="2025" offset={20} position="center" />
					{
						pieData2025.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
					}
				</Pie>
        <Tooltip />
        <LabelList position="insideStart" fill="#000" stroke="none" dataKey="name" />
  </PieChart>
  </ResponsiveContainer>
  )

  const populationPieSideDisplay  = (
    <ResponsiveContainer width="100%" height="100%">
  <PieChart width={800} height={400}>
				<Pie
					data={pieData2020}
					cx={200}
					cy={200}
					innerRadius={100}
					outerRadius={140}
          label
          nameKey='name'
					fill="#8884d8"
					paddingAngle={5}
					dataKey="value"
				>
          <Label value="2020" offset={0} position="Center" />
					{
						pieData2020.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
					}
				</Pie>
        <Pie
					data={pieData2025}
					cx={490}
					cy={200}
					innerRadius={100}
					outerRadius={140}
          nameKey='name'
          label
					fill="#8884d8"
					paddingAngle={5}
					dataKey="value"
				>
          <Label value="2025" offset={0} position="Center" />
					{
						pieData2025.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSa[index % COLORS.length]} />)
					}
				</Pie>
  </PieChart>
  </ResponsiveContainer>
  )

const populationComposedDisplay  = (
<ResponsiveContainer width="100%" height="100%">
<ComposedChart width={730} height={250} data={consts.SarpyDataHousingDemoComp}>
  <XAxis dataKey="year" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="total" name="Total" fill="#8bbc87" stroke="#1f391c" />
  <Bar dataKey="owner" barSize={20} ame="Owner" fill="#413ea0" />
  <Line type="monotone" dataKey="rental" ame="Rental" stroke="#ff7300" strokeWidth={3} />
</ComposedChart>
</ResponsiveContainer>
)

  
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
    data={rentalData}
    isAnimationActive
  >
    <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
  </Funnel>
</FunnelChart>
    </ResponsiveContainer>
  )

  const fvlFunnelUnitsLostDisplay = (
    <ResponsiveContainer width="100%" height="100%">
<FunnelChart width={730} height={250}>
  <Tooltip />
  <Funnel
    dataKey="count"
    data={unitsLostData}
    isAnimationActive
  >
    <LabelList position="insideRight" fill="#000" stroke="none" dataKey="name" />
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
    data={ownerData}
    isAnimationActive
  >
    <LabelList position="insideRight" fill="#000" stroke="none" dataKey="name" />
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
    data={rentalData}
    isAnimationActive
  >
    <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
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
    data={countyData}
    isAnimationActive
  >
    <LabelList position="center" fill="#000" stroke="none" dataKey="name" />
  </Funnel>
</FunnelChart>
    </ResponsiveContainer>
  )

  const housingDemandSankey = (
    <ResponsiveContainer width="100%" height="100%">
      <Sankey
        width={960}
        height={500}
        data={sankeyData}
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
  )

const historicalRentVacancyArea = (
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
)

const landUseDisplay = (
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
      optionsPanePop: false,
      chartTitle: '',
      insDataYear: '2020',
      dataYear: '2020',
      errors: '',
    };

    this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
    this.filterData = this.filterData.bind(this);
    this.filterDataPop = this.filterDataPop.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
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