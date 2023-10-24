import { Component } from '../core/common';

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
        <a href="https://github.com/laniiiiworld">
          ${new Date().getFullYear()}
          Lani
        </a>
      </div>
    `;
  }
}
