// ExtRev Charts
// Constants Index.js

import React, { Component } from "react";
import './index.css';
/*import usgdp from './data/USgdp.json';*/
/*import uspop from './data/USpop.json';*/
import extrev from './data/ExtRev.json';
import extrevins from './data/ExtRevIns.json';
import extreviro from './data/ExtRevIRO.json';
import SarpyData from './data/SarpyData.json';
import SarpyDataHousingDemo from './data/SarpyDataHousingDemo.json';
import SarpyDataHousingDemoComp from './data/SarpyDataHousingDemoComp.json';
import SarpyDataLandUse from './data/SarpyDataLandUse.json';
import Sarpy_Rental_Vacancy_Ranges from './data/Sarpy_Rental_Vacancy_Ranges.json';

/*import pufbycounty from './data/cmsData/by_county.json';*/
/*import pufbyzip from './data/cmsData/by_zip.json';*/
import pufstatelevel from './data/cmsData/state_level.json';
/*import pufstatemetallevel from './data/cmsData/state_metal_level.json';*/
/*import defImg from './images/default.png';*/

const dataSets = ['Summary Data', 'Total Cases', 'Ineligible Cases', 'Cases By Type', 'Drug Cases', 'IRO Distribution', 'Insurer Distribution', 'Air Ambulance']
const saFieldArray = ['serviceareaname', 'importdate', 'issuerid', 'serviceareaid']
const brFieldArray = ['businessyear', 'statecode', 'issuerid', 'sourcename', 'productid']
const paFieldArray = ['plantype', 'networkid', 'marketcoverage', 'metallevel']
const ntwrkFieldArray = ['sourcename', 'importdate', 'networkname', 'networkid']
const cwFieldArray = ['dentalplan', 'state', 'issueid_2020']
const bencsFieldArray = ['businessyear', 'statecode', 'issuerid', 'planid']
const rateFieldArray = ['businessyear', 'statecode']
const sarpyDataSets = ['Summary Data', 'Population', 'FEMA Verified Loss', 'Housing Land Use Projections', 'Units Lost', 'Housing Demand', 'Historical Rental Vacancy Rate']



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
  brFieldArray,
  cwFieldArray,
  saFieldArray,
  ntwrkFieldArray,
  bencsFieldArray,
  rateFieldArray,
  paFieldArray,
  radialStyle,
  extrev,
  extrevins,
  extreviro,
  SarpyData,
  SarpyDataHousingDemo,
  SarpyDataHousingDemoComp,
  SarpyDataLandUse,
  Sarpy_Rental_Vacancy_Ranges,
  pufstatelevel,
};