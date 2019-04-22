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
}

export class AxiosClass extends React.Component<{}, IState> {
  public state = { posts: [] };

  public componentDidMount(): void {
    axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
      .then(resp => this.setState({ posts: resp.data }));
  }

  public render(): React.ReactNode {
    return (
      <div className="App">
        <ul className="posts">
          {this.state.posts.map((post: IPost) => (
            <li key={post.id}><h6>{post.title} </h6></li>
          ))}
        </ul>
      </div>
    );
  }
}
