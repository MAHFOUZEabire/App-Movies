import { Component } from "react";
import { Header, Loading } from "./componentes";
import { mapMovies, urlApiMovie } from './conf/api.movie';
import { MovieDetails, MovieList, SearchBar } from "./features/movies/componentes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selected: null
    };
  }

  componentDidMount() {
    urlApiMovie.get('/discover/movie')
      .then(res => res.data.results)
      .catch(console.error)
      .then(movies => {
        if (!movies && !movies.length) {
          throw new Error('No movies!');
        }
        movies = mapMovies(movies);
        this.setState({ movies });
      })
      .catch(console.error);
  }

  updateSelected = (idMovie) => {
    const movie = this.state.movies.find(m => m._id === idMovie);
    this.setState({ selected: movie });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.movies.length ?
          <>
            <div className="d-flex justify-content-center p-4">
              <SearchBar />
            </div>
            <MovieList
              updateSelected={this.updateSelected}
              movies={this.state.movies} />
            <MovieDetails selectedMovie={this.state.selected} />
          </>
        :
          <Loading />
        }
      </div>
    );
  }
}

export default App;