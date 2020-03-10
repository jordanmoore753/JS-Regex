import React from 'react';
import Regex from './Regex';
import Text from './Text';
import Options from './Options';
import Output from './Output';

function sendData(e) {
  const getGroups = (data) => {
    let res = [];
    let keys = Object.keys(data);

    keys.forEach(function(key) {
      if (key[0] === '[' && key[key.length - 1] === ']') {
        res.push(key);
      }
    });

    return res;
  };

  const getHighlightString = (data, r, o) => {
    let str = document.body.querySelector("textarea[name='string-input']").value;
    let reg = new RegExp(r, o + 'g');

    return str.replace(reg, `<span class='highlight'>$&</span>`);
  };

  const createList = (arr) => {
    if (arr.length === 0) {
      return "<li>No groups found.</li>"
    }

    let str = '';

    arr.forEach(function(s) {
      str += `<li>${s.slice(1, s.length - 1)}</li>`;
    });

    return str;
  };

  e.preventDefault();

  let r = document.body.querySelector("input[name='regex-input']").value;
  let s = document.body.querySelector("textarea[name='string-input']").value;
  let o = document.body.querySelector("input[name='options-input']").value;

  let data = {
    'regex': r,
    'string': s,
    'opt': o
  };

  fetch('https://glacial-dusk-32569.herokuapp.com/test', {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(data)
  })
  .then(res => res.json())
  .then(function(json) {
    let matchElement = document.getElementById('matches').querySelector('p');
    let groupElement = document.getElementById('groups').querySelector('ul');

    if (json['ERROR_915_JM_111']) { // invalid regex
      let res = json['ERROR_915_JM_111'][0].toUpperCase() + json['ERROR_915_JM_111'].slice(1);
      matchElement.textContent = res;
      return;
    }

    let groups = getGroups(json);
    let h = getHighlightString(json, r, o);
    let listItems = createList(groups);

    matchElement.innerHTML = h;
    groupElement.innerHTML = listItems;
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
      <Options send={sendData} update={updateOutput}/>
      <Text send={sendData} update={updateOutput}/>
      <Output idName="matches" />
    </div>
  );
}

export default App;
