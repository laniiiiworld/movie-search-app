import { Store } from '../core/common';

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: 'Search for the movie title!',
});

export default store;

export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
  }
  try {
    const response = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        title: store.state.searchText,
        page,
      }),
    });
    const json = await response.json();
    const { Response, Search = [], totalResults, Error = '' } = json;

    if (Response === 'True') {
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
      store.state.movies = [
        ...store.state.movies, //
        ...Search,
      ];
      store.state.message = '';
    } else {
      store.state.pageMax = 1;
      store.state.message = Error;
    }
  } catch (error) {
    store.state.pageMax = 1;
    store.state.message = `
      Something is wrong. Check the network status first.<br>
      If the problem persists, please contact the administrator.
    `;
  } finally {
    store.state.loading = false;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({ id }),
    });
    store.state.movie = await response.json();
  } catch (error) {
    store.state.message = `
      Something is wrong. Check the network status first.<br>
      If the problem persists, please contact the administrator.
    `;
  }
};
