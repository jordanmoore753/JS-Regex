import React, { Component } from 'react';

class Output extends Component {
  render() {
    return (
      <section id="output">
        <section id="matches">
          <p>No string to evaluate yet.</p>
        </section>
        <section id="groups">
          <ul>
            <li>No matches.</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default Output;