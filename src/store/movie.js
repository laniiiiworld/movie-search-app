import { Store } from '../core/common';

const store = new Store({
  searchText: '',
  page: 1,
  movies: [],
});

export default store;

export const searchMovies = async (page) => {
  if (page === 1) {
    store.state.page = 1;
    store.state.movies = [];
  }

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${store.state.searchText}&page=${page}`
  );
  const { Search } = await response.json();

  store.state.movies = [
    ...store.state.movies, //
    ...Search,
  ];
};
