const data = require('./data/nebraska_hpi.json');
const zipData = require('./data/HpiByZip.json');

let outJSON= [ {team: "TeamA",name: "Ahmed",field3:"val3"}, {team: "TeamB",name: "Ahmed",field3:"val43"}, {team: "TeamA",name: "Ahmed",field3:"val55"} ]
let myOutJSON = data;

//$${car: [$.{"car": car, "color": color, "reg": reg}]}
const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const groupByZip = groupBy('ZIP');
const groupByYear = groupBy('Year');

// To extract the keys (zip codes here)
var s = zipData.HpiByZip;
   var keys = [];
   for(var k in s) keys.push(k);

console.log(
  JSON.stringify({
    //HpiByZip: groupByZip(myOutJSON),
    //HpiByYear: groupByYear(myOutJSON)
    keys
  }, null, 2)
);

// TO SAVE CONSOLE.LOG OUTPUT TO FILE ----->  node json_reducer.js > test.log 2>&1 ---- No idea why it works, but it does.


/*
var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  var groupedByTeam = groupBy(myOutJSON, 'ZIP')
  console.log(groupedByTeam);

  
  Object.keys(groupedByTeam) // return ["TeamA","TeamB"]

  Object.keys(groupedByTeam).forEach(function(category){
     
    console.log(`Team ${category} has ${groupedByTeam[category].length} members : `);
     groupedByTeam[category].forEach(function(memb,i){
           console.log(`---->${i+1}. ${memb.name}.`)
    })
    
}); 
    */