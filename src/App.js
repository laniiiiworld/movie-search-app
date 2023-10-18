import { Header } from './components/Header';
import { Component } from './core/common';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    const routerView = document.createElement('router-view');
    this.el.append(new Header().el, routerView);
  }
}
