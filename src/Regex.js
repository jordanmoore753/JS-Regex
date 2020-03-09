import React, { Component } from 'react';

class Regex extends Component {
  constructor(props) {
    super(props);
  }

  keyPressed(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <section id='regex-area'>
        <label htmlFor="regex-input" /> Regex
        <input name="regex-input" type='text' defaultValue='' onBlur={this.props.send} onKeyPress={this.keyPressed}/>
      </section>
    );
  }
}


class Match extends Component {

}

class MatchGroup extends Component {

}

export default Regex;