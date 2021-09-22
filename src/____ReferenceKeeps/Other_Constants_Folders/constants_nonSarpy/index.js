// ExtRev Charts
// Constants Index.js

import './index.css';

import AllData from './data/AllData.json';
import IRO from './data/IRO.json';
import Patient from './data/Patient.json';
import Insurer from './data/Insurer.json';
import Provider from './data/Provider.json';
import EligibleCases from './data/EligibleCases.json';


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

const JSONTable = ({ list, listArray }) =>
(!list.length) ? <div className="jsonTable">No JSON</div> :
<div className="table">
{list.map(item =>
      <div key={item.PatientID}>
        <span>
            {item.PatientName}
            {item[listArray[0]]} -- {item[listArray[1]]} -- {item[listArray[2]]} -- {item[listArray[3]]}
        </span>
      </div>
    )}
    </div>

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
  AllData,
  Insurer,
  Patient,
  Provider,
  IRO,
  EligibleCases,
  JSONTable,
};