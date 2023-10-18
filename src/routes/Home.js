import { Component } from '../core/common';

export default class Home extends Component {
  render() {
    this.el.innerHTML = /* html */ `
      <h1>Home Page!</h1>
    `;
  }
}
