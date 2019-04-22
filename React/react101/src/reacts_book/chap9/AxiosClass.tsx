import React from "react";
import axios, { CancelTokenSource } from "axios";

interface IPost {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

interface IState {
  posts: IPost[];
  error: string;
  cancelTokenSource?: CancelTokenSource;
  isLoading: boolean;
}

export class AxiosClass extends React.Component<{}, IState> {
  public state: IState = { posts: [], error: "", isLoading: true };

  public componentDidMount(): void {
    const cancelTokenSource = axios.CancelToken.source();
    this.setState({ cancelTokenSource });


    axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json"
      },
      timeout: 3000,
      cancelToken: cancelTokenSource.token
    })
      .then(resp => this.setState({ posts: resp.data, isLoading: false }))
      .catch(err => {
        const error = axios.isCancel(err) ? "Request Cancelled" :
          err.code === "ECONNABORTED" ? "A timeout occured" :
            err.response.status === 404 ? "Resource not found" : "An unexpected error has occurred";
        this.setState({ error, isLoading: false });
      });
  }

  public render(): React.ReactNode {
    return (
      <div className="App">

        {this.state.isLoading && (
          <button onClick={this.onCancelClick}>Cancel</button>
        )}

        <ul className="posts">
          {this.state.posts.map((post: IPost) => (
            <li key={post.id}><h6>{post.title} </h6></li>
          ))}
        </ul>

        {this.state.error && <p className="error">{this.state.error}</p>}

      </div>
    );
  }

  public onCancelClick = () => {
    if (this.state.cancelTokenSource) {
      this.state.cancelTokenSource.cancel("User cancelled operation");
    }
  };
}
