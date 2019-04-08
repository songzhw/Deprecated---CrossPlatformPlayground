import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface IMovie {
  id: string;
  cover: string;
  title: string;
  genres: string[];
}

export const MovieListScreen: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<IMovie[] | undefined>();

  useEffect(() => {
    fetch("https://www.mocky.io/v2/5caa6095300000440790457c")
      .then(response => {
        if (response.status !== 200) {
          console.error("response error : code = ", response.status);
          return;
        }

        response.json()
          .then(resp => setMovies(resp));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <p>Welcome!</p>
      <ul>
        {movies ? movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}> {movie.title} </Link>
            </li>
          ))
          : null
        }
      </ul>
    </div>
  );
};
