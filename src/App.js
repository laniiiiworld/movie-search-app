import TheFooter from './components/TheFooter';
import TheHeader from './components/TheHeader';
import { Component } from './core/common';

export default class App extends Component {
  render() {
    const $header = new TheHeader().el;
    const $footer = new TheFooter().el;
    const routerView = document.createElement('router-view');

    this.el.append($header, routerView, $footer);
  }
}
