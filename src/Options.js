import React, { Component } from 'react';

class Options extends Component {
  render() {
    return (
      <section id='options-area'>
        <label htmlFor="options-input" /> Options
        <input name="options-input" type='text' defaultValue='' onBlur={this.props.send} />
      </section>      
    );
  }
}

export default Options;