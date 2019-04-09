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

export class MovieListScreen extends React.Component<RouteComponentProps, IState> {
  public state: IState = { movies: [], searchKeyword: "" }; // 不加这个":IState", 后面使用时就会报错. 试一下就知道了

  public componentDidMount(): void {
    fetch("https://www.mocky.io/v2/5caa6095300000440790457c")
      .then(response => {
        if (response.status !== 200) {
          console.error("response error : code = ", response.status);
          return;
        }

        response.json()
          .then(resp => this.setState({ movies: resp }));
      })
      .catch(err => console.error(err));
  }

  public static getDerivedStateFromProps(props: RouteComponentProps, state: IState) {
    const params = new URLSearchParams(props.location.search);
    const keyword = params.get("search") || "";
    return {
      movies: state.movies,
      searchKeyword: keyword
    };
  }

  public render(): React.ReactNode {
    const { movies, searchKeyword } = this.state;
    return (
      <div>
        <p>Welcome!</p>
        <p> search = {searchKeyword}</p>
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
  }
}
