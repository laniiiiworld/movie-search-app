import { Component } from '../core/common';
import aboutStore from '../store/about';

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer',
    });
  }

  render() {
    this.el.classList.add('footer');
    this.el.innerHTML = /* html */ `
      <div>
        <a href="${aboutStore.state.repository}" target="_blank">
          GitHub Repository.
        </a>
      </div>
      <div>
        <a href="${aboutStore.state.github}" target="_blank">
          ${new Date().getFullYear()}
          Lani
        </a>
      </div>
    `;
  }
}
