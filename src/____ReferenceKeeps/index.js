// Constants Index.js

import React, { Component } from "react";
import './index.css';
import SarpyData from './data/SarpyData.json';
import SarpyDataHousingDemo from './data/SarpyDataHousingDemo.json';
import SarpyDataHousingDemoComp from './data/SarpyDataHousingDemoComp.json';
import SarpyDataLandUse from './data/SarpyDataLandUse.json';
import Sarpy_Rental_Vacancy_Ranges from './data/Sarpy_Rental_Vacancy_Ranges.json';
import FVL_Owner_Data from './data/FVL_Owner_Data.json';
import FVL_Rental_Data from './data/FVL_Rental_Data.json';
import FVL_County_Data from './data/FVL_County_Data.json';

const dataSets = ['Summary Data', 'Total Cases', 'Ineligible Cases', 'Cases By Type', 'Drug Cases', 'IRO Distribution', 'Insurer Distribution', 'Air Ambulance']
const sarpyDataSets = ['Summary Data', 'Population', 'FEMA Verified Loss', 'Housing Land Use Projections', 'Units Lost', 'Housing Demand', 'Historical Rental Vacancy Rate', 'HPI']

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

const radialStyle = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const SelectBox = ({className, label, name, options, stateVar, onChangeFunction}) => 
(
  <div className={className}>
  <label>{ label }</label>
  <select name={ name } onChange={ onChangeFunction }>
    if (options)
      {options.map((value, index) => {
      return <option key={index}>{value}</option>
      })}
  </select>
  </div>
)
/* If its already in {} dont need {} to surround the imported variable like stateVar above */

const Image = ( {src, className, height, width, maxWidth, maxHeight, alt }) => 
(
  <img
  className= { className }
  height= { height }
  width= { width }
  maxWidth= { maxWidth }
  maxHeight= { maxHeight }
  src= { src }
  alt= { alt }
  />
)


const TextArea = ({ fullName, name, id, rows, cols, value, onChangeFunction, err }) =>
(
  <div>
  <label>{ fullName }</label>
  <textarea
    id = { name }
    name = { name }
    value={ value }
    rows={ rows }
    cols={ cols }
    onChange={ onChangeFunction }
  />
  <span className="errorSpan">{ err }</span>
  <br />
  </div>
)

const InputAndError = ({ fullName, name, type, value, onChangeFunction, err }) =>
(
  <div>
  <label>{ fullName }</label>
  <input
    type = { type }
    id = { name }
    name = { name }
    value={ value }
    onChange={ onChangeFunction }
    disabled= ''
  />
  <span className ='errorSpan'>{ err }</span>
  <br />
  </div>
);

const Checkbox = ({ label, name, checked, onChangeFunction }) =>
(
  <div>
  <label>{ label }</label>
  <input
    type = "checkbox"
    id = { name }
    name = { name }
    checked = { checked }
    defaultChecked = { checked }
    onChange={ onChangeFunction }
  />
  </div>
);

const StoryCheckbox = ({ label, name, checked, onChangeFunction }) =>
(
  <div>
  <input
    type = "checkbox"
    id = { name }
    name = { name }
    checked = { checked }
    onChange={ onChangeFunction }
  />
  <label>{ label }</label>
  </div>
);

export { 
  InputAndError, 
  Checkbox,
  SelectBox,
  StoryCheckbox,
  TextArea,
  Image, 
  dataSets,
  sarpyDataSets,
  radialStyle,
  SarpyData,
  SarpyDataHousingDemo,
  SarpyDataHousingDemoComp,
  SarpyDataLandUse,
  FVL_Owner_Data,
  FVL_Rental_Data,
  FVL_County_Data,
  unitsLostData,
  sankeyData,
  Sarpy_Rental_Vacancy_Ranges,
  nebraskaZips,
};