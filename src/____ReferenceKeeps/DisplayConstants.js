import React, { Component, useState } from "react";
import PropTypes from 'prop-types';
import { OptionsPane } from '../OptionsPane';
import * as consts from './index.js';
import HPI_DATA from './data/HpiByZip.json';
import { BarChart, Bar, LineChart, Line, Legend, PieChart, Pie, Cell, ComposedChart, Area, Sankey, AreaChart,
  Tooltip, ResponsiveContainer, RadarChart, PolarGrid, Radar, Funnel, FunnelChart, LabelList, Label,
  PolarAngleAxis, PolarRadiusAxis, YAxis, XAxis, CartesianGrid } from 'recharts';
//Do I need to import ReCharts?  My guess is yes
//Data is getting there, but having issues accessing the array



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

//Figure out how to filter for two values. Theres a way.
//const sarpyZipsHpi = HPI_DATA.filter(row => row['ZIP'].includes('68124'));   
const lineChartHpi  = (selectedZip) => (
  <ResponsiveContainer width="100%" height="100%">
  <LineChart width={300} height={300} data={HPI_DATA['HpiByZip'][`${selectedZip}`]}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey='Year' />
    <YAxis dataKey='HPI' />
    <Legend align="right" verticalAlign="middle" layout="vertical" />
    <Tooltip />
    <Line type="monotone" dataKey='HPI' name="HPI_0" stroke="#82ca9d" strokeWidth={3} activeDot={{ r: 8 }} />
    {/*<Line type="monotone" data={sarpyZipsHpi[1]} dataKey='HPI' name="HPI_1" stroke="#55ca9d" strokeWidth={3} activeDot={{ r: 8 }} />*/}
  </LineChart>
  </ResponsiveContainer>
)

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
    data={consts.unitsLostData}
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
/*
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
  */

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

export { 
  landUseDisplay,
  historicalRentVacancyArea,
  //housingDemandSankey,
  fvlComposedDisplay,
  fvlDisplay,
  fvlFunnelCountyDisplay,
  fvlFunnelDisplay,
  fvlFunnelOwnerDisplay,
  fvlFunnelRentalDisplay,
  fvlFunnelUnitsLostDisplay,
  populationBarDisplay,
  populationComposedDisplay,
  populationDisplay,
  populationPieDisplay,
  populationPieSideDisplay,
  lineChartHpi,
};