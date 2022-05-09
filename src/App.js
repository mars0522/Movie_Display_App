import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
 
  const [Movies, setMovies] = useState([]);

  const moviesFetchHandler = () => {
    
    fetch('https://swapi.py4e.com/api/films/').then((data) => {

      return data.json();
      
    }).then((data) => {

      const transfomedMovieData = data.results.map(movies => {
        return {
          id: movies.episode_id,
          title: movies.title,
          releaseDate: movies.release_date,
          openingText: movies.opening_crawl
        }
      })
      setMovies(transfomedMovieData);
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={moviesFetchHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={Movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
