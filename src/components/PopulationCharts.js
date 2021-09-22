import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
//import {getParsedDateISO} from './utils';
import * as consts from "../constants/index.js";
import { BarChart, Bar, LineChart, Line, Legend, Cell, ComposedChart, Area,
  Tooltip, ResponsiveContainer, LabelList, Label, Pie, PieChart,
  YAxis, XAxis, CartesianGrid } from 'recharts';

//const today = getParsedDateISO(dateString);
//To find certain rows ==>
//let res = HPI_DATA.filter(row => row.Zip.includes('oli'));

// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`
const popOptions = ['Bar', 'Composed', 'Line', 'Pie', 'Pie SbS']

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

class PopulationCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: null,
      chartTitle: 'Population Projections',
    };

    this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
    this.setState = this.setState.bind(this);
    this.handlePopSelectboxChange = this.handlePopSelectboxChange.bind(this);
  }

  handleSelectboxChange = (event) => {
      const target = event.target;
      //const name = target.name;
    
      this.setState({ "selectedZip": target.value });
  }

  handlePopSelectboxChange = (event) => {
    const target = event.target;
      switch(target.value) {
        case 'Bar':
          return this.setState({ display: populationBarDisplay });
        case 'Composed':
          return this.setState({ display: populationComposedDisplay });
        case 'Line':
          return this.setState({ display: populationDisplay });
        case 'Pie':
          return this.setState({ display: populationPieDisplay });
        case 'Pie SbS':
          this.setState({ display: populationPieSideDisplay });
          break;
        default:
          return this.setState({ display: populationBarDisplay });
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
        options={popOptions}
        onChangeFunction={this.handlePopSelectboxChange}
      />
      </div>
        {this.state.display}
      </div>
    )
  }
}

export default PopulationCharts;
