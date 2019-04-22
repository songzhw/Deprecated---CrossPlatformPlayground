import React from "react";
import axios from "axios";

interface IPost {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

interface IState {
  posts: IPost[];
  error: string;
}

export class AxiosClass extends React.Component<{}, IState> {
  public state = { posts: [], error: "" };

  public componentDidMount(): void {
    axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json"
      },
      timeout: 3000
    })
      .then(resp => this.setState({ posts: resp.data }))
      .catch(err => {
        const error = err.code === "ECONNABORTED" ? "A timeout occured" :
          err.response.status === 404 ? "Resource not found" : "An unexpected error has occurred";
        this.setState({ error });
      });
  }

  public render(): React.ReactNode {
    return (
      <div className="App">

        <ul className="posts">
          {this.state.posts.map((post: IPost) => (
            <li key={post.id}><h6>{post.title} </h6></li>
          ))}
        </ul>

        {this.state.error && <p className="error">{this.state.error}</p>}

      </div>
    );
  }
}
