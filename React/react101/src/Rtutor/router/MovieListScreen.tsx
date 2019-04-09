import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

export interface IMovie {
  id: string;
  cover: string;
  title: string;
  genres: string[];
}

interface IState {
  movies: IMovie[];
  searchKeyword: string;
}


export const MovieListScreen: React.FunctionComponent<RouteComponentProps> = (props) => {
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

  const params = new URLSearchParams(props.location.search);
  const keyword = params.get("search") || "";
  return (
    <div>
      <p>Welcome!</p>
      <p>get search = {keyword}</p>
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


