import { Component } from '../core/common';
import movieStore, { searchMovies } from '../store/movie';

export default class Search extends Component {
  render() {
    this.el.classList.add('search');
    this.el.innerHTML = /* html */ `
      <input placeholder="Enter the movie title to search!" />
      <button class="btn btn-primary">Search!</button>
    `;

    const $input = this.el.querySelector('input');
    $input.addEventListener('input', () => {
      movieStore.state.searchText = $input.value;
    });
    $input.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      if (!movieStore.state.searchText.trim()) return;
      searchMovies(movieStore.state.page);
    });

    const $button = this.el.querySelector('.btn');
    $button.addEventListener('click', () => {
      if (!movieStore.state.searchText.trim()) return;
      searchMovies(movieStore.state.page);
    });
  }
}
