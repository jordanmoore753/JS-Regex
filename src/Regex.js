import React, { Component } from 'react';

class Regex extends Component {
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

export default Regex;