import { Component } from '../core/common';
import movieStore from '../store/movie';
import MovieItem from './MovieItem';

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe('movies', () => this.render());
    movieStore.subscribe('loading', () => this.render());
    movieStore.subscribe('message', () => this.render());
  }

  render() {
    const { movies, message } = movieStore.state;

    this.el.classList.add('movie-list');
    this.el.innerHTML = /* html */ `
      ${
        message //
          ? `<div class="message">${message}</div>`
          : `<div class="movies"></div>`
      }
      <div class="the-loader hide"></div>
    `;
    const $movies = this.el.querySelector('.movies');
    $movies?.append(...movies.map((movie) => new MovieItem({ movie }).el));

    const $loader = this.el.querySelector('.the-loader')!;
    movieStore.state.loading
      ? $loader.classList.remove('hide') //
      : $loader.classList.add('hide');
  }
}
