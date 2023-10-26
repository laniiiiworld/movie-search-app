import { Component } from '../core/common';
import { SimpleMovie } from '../store/movie';

interface Props {
  [key: string]: unknown;
  movie: SimpleMovie;
}

export default class MovieItem extends Component {
  public props!: Props;
  constructor(props: Props) {
    super({ props, tagName: 'a' });
  }
  render() {
    const { Poster, Title, Year, imdbID } = this.props.movie;
    this.el.setAttribute('href', `#/movie?id=${imdbID}`);
    this.el.setAttribute('title', Title);
    this.el.classList.add('movie');
    this.el.style.backgroundImage = `url(${Poster})`;
    this.el.innerHTML = /* html */ `
      <div class="info">
        <div class="year">${Year}</div>
        <div class="title">${Title}</div>
      </div>
    `;
  }
}
