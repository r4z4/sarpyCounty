import React, { Fragment } from 'react';

const argArray = ['2020', '2019', '2018', '2017', '2016',  '2015',  '2014',  '2013',  '2012' ];
const nifaArray = ['Owner', 'Rental', 'County'];

class OptionsPane extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onClick(e.target.value);
  }

  render() {
    const items = nifaArray;

    return (
      <Fragment>
      <div className="optionsPane">
        <h1>Filter</h1>
        <ul>
          {items.map((value, index) => {
            return (<button key={index} className={this.props.className} name={this.props.name} onClick={() => this.props.onClick(value)}>{value}</button>)
          })}
        </ul>
      </div>
      </Fragment>
      )
  }
}

export { OptionsPane };

/*
import React, { Fragment, useState } from 'react';

const OptionsPane = () => {

    const [dataFilter, setDataFilter] = useState("");

    const filterData = (e) => {
      const target = e.target;
      const name = target.name;

      setDataFilter(e.target.value);
      
    }
*/
/*

    This is more database related.  For JSON, just need to get from file. Need useState even??
    const filterData = async e => {
      e.preventDefault();
      try{
        const body = { dataFilter };
        const response = await fetch("http://localhost:3000/eligibilecases", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
      });
      //console.log(response);
      Window.location = "/"; //This will make it refresh and how changes - instead of console.log
      } catch (err) {
        console.error(err.message)
      }
    };
*/
/*
    return (
        <Fragment>
        <div className="optionsPage">
          <h1>Filter</h1>
          <button className="yearButton" name="2020filter" onClick={filterData}>2020</button>
          <button className="yearButton" name="2019filter" onClick={filterData}>2019</button>
          <button className="yearButton" name="2018filter" onClick={filterData}>2018</button>
          <button className="yearButton" name="2017filter" onClick={filterData}>2017</button>
          <button className="yearButton" name="2016filter" onClick={filterData}>2016</button>
          <button className="yearButton" name="2015filter" onClick={filterData}>2015</button>
          <button className="yearButton" name="2014filter" onClick={filterData}>2014</button>
          <button className="yearButton" name="2013filter" onClick={filterData}>2013</button>
          <button className="yearButton" name="2012filter" onClick={filterData}>2012</button>
        </div>
        </Fragment>
        )
    }

export { OptionsPane };
*/

// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`

// <button className={button_class} name={button_name} onClick={onclick_func}>{ButtonName}</button>