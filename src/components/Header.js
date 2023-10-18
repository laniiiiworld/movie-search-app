import { Component } from '../core/common';

export class Header extends Component {
  constructor() {
    super({
      tagName: 'header',
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href="#/">Main!</a>
      <a href="#/about">About!</a>
    `;
  }
}
