import React from "react";
import { RouteComponentProps } from "react-router";
import { IMovie } from "./MovieListScreen";

type Props = RouteComponentProps<{ id: string }>;

interface IState {
  movie?: IMovie;
  isAdded: boolean;
}

export class MovieScreen extends React.Component<Props, IState> {
  public state: IState = { isAdded: false };  // movie?是可选, 所以这里不报错

  public componentDidMount(): void {
    const path = this.props.match.params;
    if (path.id) {
      const id: string = path.id; // path.id是个string
      const movie = {
        id,
        cover: "",
        title: `item ${id}`,
        genres: [""]
      };
      this.setState({ movie }); // ts也允许setState只set部分state
    }
  }

  public render(): React.ReactNode {
    const { movie, isAdded } = this.state;
    const button = isAdded ? null : <button onClick={this.onAdd}>Add to wishlist</button>;
    const price = new Intl
      .NumberFormat("en-US", { currency: "USD", style: "currency" })
      .format(24.99);

    return (
      <div>
        {movie ?
          (<React.Fragment>
            <h3>{movie.title}</h3>
            <p> {price} </p>
            {button}
          </React.Fragment>)
          :
          (<p> Movie not found</p>)
        }
      </div>
    );
  }

  private onAdd = () => {
    console.log(`szw onAdd`);
  };

};
