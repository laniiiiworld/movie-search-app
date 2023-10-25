import { Store } from '../core/common';

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: 'https://raw.githubusercontent.com/laniiiiworld/movie-search-app/main/src/images/avatar2.png',
  name: 'Lani / RANG LEE',
  email: 'laniiiiworld@gmail.com',
  blog: 'https://velog.io/@lani',
  github: 'https://github.com/laniiiiworld',
  repository: 'https://github.com/laniiiiworld/movie-search-app',
});
