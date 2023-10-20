import Headline from '../components/Headline';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import MovieListMore from '../components/MovieListMore';
import { Component } from '../core/common';

export default class Home extends Component {
  render() {
    const $headline = new Headline().el;
    const $search = new Search().el;
    const $movieList = new MovieList().el;
    const $movieListMore = new MovieListMore().el;

    this.el.classList.add('container');
    this.el.append(
      $headline, //
      $search,
      $movieList,
      $movieListMore
    );
  }
}
