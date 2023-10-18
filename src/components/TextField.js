import { Component } from '../core/common';
import messageStore from '../store/message';

export default class TextField extends Component {
  constructor() {
    super();
  }
  render() {
    this.el.innerHTML = /* html */ `
      <input value="${messageStore.state.message}"/>
    `;
    const $input = this.el.querySelector('input');
    $input.addEventListener('input', () => {
      messageStore.state.message = $input.value;
    });
  }
}
