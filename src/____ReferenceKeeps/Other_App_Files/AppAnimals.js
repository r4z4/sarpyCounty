// Aaron Rozanski
// Animals
import React, { Component } from 'react';
import './App.css';
import './animalAPIstyles.css';
import * as consts from "./constants/index.js";
import { Button } from './Buttons';

const PATH_BASE_CAT = 'https://aws.random.cat/meow'
const PATH_BASE_DOG = 'https://random.dog/woof.json'
const PATH_BASE_FOX = 'https://randomfox.ca/floof/'
const PATH_BASE_DOGFACT = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1'
const PATH_BASE_CATFACT = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1'

const CORS_ANYWHERE = 'http://cors-anywhere.herokuapp.com/'

const largeColumn = {
  width: '40%',
};

const smallColumn = {
  width: '10%',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'test',
      date: null,
      results: [],
    };

    this.fetchCat = this.fetchCat.bind(this);
    this.fetchDog = this.fetchDog.bind(this);
    this.fetchFox = this.fetchFox.bind(this);
    this.fetchCatFact = this.fetchCatFact.bind(this);
    this.fetchDogFact = this.fetchDogFact.bind(this);
  }

  fetchCat() {
    fetch(PATH_BASE_CAT)
      //.then(response => response.blob())
      .then(response => response.json())
      .then(result => this.setState({"cat": result}))
      .catch(error => error);
  }

  fetchDog() {
    fetch(PATH_BASE_DOG)
      //.then(response => response.blob())
      .then(response => response.json())
      .then(result => this.setState({"dog": result}))
      .catch(error => error);
  }

  fetchFox() {
    fetch(PATH_BASE_FOX)
      //.then(response => response.blob())
      .then(response => response.json())
      .then(result => this.setState({"fox": result}))
      .catch(error => error);
  }

  fetchCatFact() {
    fetch(PATH_BASE_CATFACT)
      //.then(response => response.blob())
      .then(response => response.json())
      .then(result => this.setState({"catfact": result}))
      .catch(error => error);
  }

  fetchDogFact() {
    fetch(CORS_ANYWHERE+PATH_BASE_DOGFACT)
      //.then(response => response.blob())
      .then(response => response.json())
      .then(result => this.setState({"dogfact": result}))
      .catch(error => error);
  }

  componentDidMount() {
      this.fetchCat();
  }

   handleInputChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;

     this.setState({
      [name]: value,    
    });
   }
// Whether .text or .fact or .url = look at JSON data structure
  render() {
    return (
      <div className="pageANIMALS">
        <div>
        <form className="input">
          <h1>External Review API Connector</h1>
          <h2>Report Details</h2>
          <div className="headingsInputs">
          <consts.InputAndError
            fullName = "*Your Name:"
            name = "userName"
            type = "text"
            value = { this.state.userName }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorUserName }
          />
          <consts.InputAndError
            fullName = "Date:"
            name = "date"
            type = "text"
            value = { this.state.date }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorDate }
          />
          <label>&nbsp;</label>
          <Button
          onClick={this.toImage}
          className='imageButton'
          value='Image'
          />
          </div>
        </form>
        </div>
      </div>
    );
  }
}

// Figure out how to sort by visits
const AnimalSection = ({ fullName, img, fact, }) =>
(
  <div className="animalSection">
    <h1>{ fullName }</h1>
        <br />
        <img src={img} height="400px" width="300px" alt={ fullName }></img>
        <br />
        <div className="animalFact">
          <p>{ fact }</p>
        </div>
        <br />
  </div>
);

{/*
<AnimalSection
  fullName = 'dog'
  img = { data_dog.url }
  fact = { data_dogfact.fact }
/>
*/}


export default App;


{/* Old return statement before AnimalSection component

      <div className="pageANIMALS">
        <h1>Random Cat</h1>
        <br/>
        <img src={data_cat.file} height="400px" width="300px" alt="random cat"></img>
        <br />
        <div className="catfact">
          <p>{data_catfact.text}</p>
        </div>
        <br />
        <Button
            onClick={() => this.fetchCatFact()}
            className="button-inline"
        >
            Want a fact for that Cat
        </Button>
        <Button
            onClick={() => this.fetchDog()}
            className="button-inline"
        >
            Get Dog
        </Button>
        <h1>Random Dog</h1>
        <br />
        <img src={data_dog.url} height="400px" width="300px" alt="random dog"></img>
        <br />
        <div className="dogfact">
          <p>{data_dogfact.fact}</p>
        </div>
        <br />
        <Button
            onClick={() => this.fetchDogFact()}
            className="button-inline"
        >
            Want a fact for that Dog
        </Button>
        <Button
            onClick={() => this.fetchFox()}
            className="button-inline"
        >
            Get Fox
        </Button>
        <h1>Random Fox</h1>
        <br />
        <img src={data_fox.image} height="400px" width="300px" alt="random dog"></img>
        <br />
        <AnimalSection
          fullName = 'dog'
          img = { data_dog.url }
          fact = { data_dogfact.fact }
        />
      </div>
*/}