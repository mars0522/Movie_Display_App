import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
 
  const [Movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // 1st way of fetcing the data from api

  // const moviesFetchHandler = () => {
    
  //   fetch('https://swapi.py4e.com/api/films/').then((data) => {

  //     return data.json();
      
  //   }).then((data) => {

  //     const transfomedMovieData = data.results.map(movies => {
  //       return {
  //         id: movies.episode_id,
  //         title: movies.title,
  //         releaseDate: movies.release_date,
  //         openingText: movies.opening_crawl
  //       }
  //     })
  //     setMovies(transfomedMovieData);
  //   })
  // }

  // 2nd way of fetching data from api

  async function moviesFetchHandler (){
    
    setLoading(true);
    const response = await fetch('https://swapi.py4e.com/api/films/');

    const data = await response.json();

    const transfomedMovieData = data.results.map(movie => (
      {
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl
      }
    ))

    setMovies(transfomedMovieData);
    setLoading(false);
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={moviesFetchHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && Movies.length > 0 && <MoviesList movies={Movies} />}
        {!isLoading && Movies.length === 0 && <p>No Movies found..</p>}
        {isLoading && <p>Loading ...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
