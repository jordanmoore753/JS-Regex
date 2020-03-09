import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
      <section id='string-area'>
        <label htmlFor="string-input" /> String
        <textarea name="string-input" defaultValue='' onBlur={this.props.send} rows="10" cols="50" />
      </section>
    );
  }
}

export default Text;