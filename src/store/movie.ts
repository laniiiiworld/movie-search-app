import { Store } from '../core/common';

export interface SimpleMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface DetailedMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface State {
  searchText: string;
  page: number;
  pageMax: number;
  movies: SimpleMovie[];
  movie: DetailedMovie;
  loading: boolean;
  message: string;
}

const store = new Store<State>({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {} as DetailedMovie,
  loading: false,
  message: 'Search for the movie title!',
});

export default store;

export const searchMovies = async (page: number) => {
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

export const getMovieDetails = async (id: string) => {
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
