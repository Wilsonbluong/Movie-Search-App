import React, { useEffect, useState } from "react";

import SingleMovie from "./components/SingleMovie";

const FEATURED_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=2c0f23809e8e7d7732fcb5cd1ec3cbf7&language=en-US&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=2c0f23809e8e7d7732fcb5cd1ec3cbf7&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <h1>The Movie App</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <SingleMovie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
