import { Component } from '../core/common';
import messageStore from '../store/message';

export default class Title extends Component {
  constructor() {
    super({ tagName: 'h1' });
    messageStore.subscribe('message', (newValue) => {
      console.log(newValue);
      this.render();
    });
  }

  render() {
    this.el.textContent = `Title : ${messageStore.state.message}`;
  }
}
