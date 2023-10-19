import { Component } from '../core/common';
import movieStore from '../store/movie';
import MovieItem from './MovieItem';

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe('movies', () => this.render());
  }

  render() {
    const { movies } = movieStore.state;
    if (!movies.length) return;

    this.el.classList.add('movie-list');
    this.el.innerHTML = /* html */ `
      <div class="movies"></div>
    `;
    const $movies = this.el.querySelector('.movies');
    $movies.append(...movies.map((movie) => new MovieItem({ props: { movie } }).el));
  }
}
