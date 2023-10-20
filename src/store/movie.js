import { Store } from '../core/common';

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  loading: false,
});

export default store;

export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
  }

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${store.state.searchText}&page=${page}`
  );
  const json = await response.json();
  const { Search = [], totalResults } = json;

  store.state.pageMax = Math.ceil(Number(totalResults) / 10);
  store.state.movies = [
    ...store.state.movies, //
    ...Search,
  ];
  store.state.loading = false;
};
