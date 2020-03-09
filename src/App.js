import React from 'react';
import Regex from './Regex';
import Text from './Text';
import Options from './Options';

function sendData(e) {
  e.preventDefault();

  let r = document.body.querySelector("input[name='regex-input']").value;
  let s = document.body.querySelector("textarea[name='string-input']").value;
  let o = document.body.querySelector("input[name='options-input']").value;

  let data = {
    'regex': r,
    'string': s,
    'opt': o
  };

  console.log(JSON.stringify(data))
  fetch('https://glacial-dusk-32569.herokuapp.com/test', {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(data)
  })
  .then(res => res.json())
  .then(function(json) {
    console.log(json);
  })
  .catch(function(error) {
    console.log(error);
  });
}

function updateOutput(data) {

}

function App() {
  return (
    <div className="App">
      <Regex send={sendData} update={updateOutput}/>
      <Text send={sendData} update={updateOutput}/>
      <Options send={sendData} update={updateOutput}/>
    </div>
  );
}

export default App;
