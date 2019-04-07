import React, { useEffect, useState } from "react";

export interface IMovie {
  cover: string;
  title: string;
  genres: string[];
}

interface IState {
  movies: IMovie[];
}

export const MovieScreen: React.FunctionComponent = () => {
  const [movies, setMovies] = useState([{id:0, cover:"", title:""}]);

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
        {movies.map( movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};