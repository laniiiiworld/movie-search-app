import { Component } from '../core/common';

export default class About extends Component {
  render() {
    this.el.innerHTML = /* html */ `
      <h1>About Page!</h1>
    `;
  }
}
