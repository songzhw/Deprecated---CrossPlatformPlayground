import React, { Component } from "react";
import Book from "epubjs/types/book";

interface IProps {
  url: string;
}

interface IState {
  isLoaded: boolean;
  tableOfContents: any; //TODO
}

export class EpubView extends Component<IProps, IState> {
  public state = { isLoaded: false, tableOfContents: [] };
  private book!: Book;


  public componentDidMount() {
    const { url } = this.props;
    this.book = ePub(url, {});
    this.book.loaded.navigation
      .then(({ toc }) => {
        this.setState({ isLoaded: true, tableOfContents: toc }, () => {
          this.populateRender();
        });
      });
  }

  public populateRender = () => {

  };

  public render(): React.ReactNode {
    return (
      <div>
        230
      </div>
    );
  }


}