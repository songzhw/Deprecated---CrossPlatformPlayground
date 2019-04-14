import React, { Component } from "react";
import { Book } from "epubjs";
import { NavItem } from "epubjs/types/navigation";
import Rendition from "epubjs/types/rendition";

interface IProps {
  url: string;
}

interface IState {
  isLoaded: boolean;
  tableOfContents: NavItem[];
}

export class EpubView extends Component<IProps, IState> {
  public state : IState = { isLoaded: false, tableOfContents: [] };
  private book!: Book;
  private viewRef!: any;
  private rendition!: Rendition;


  public componentDidMount() {
    const { url } = this.props;
    this.book = new Book(url, {});
    this.book.loaded.navigation
      .then(({ toc }) => {
        this.setState({ isLoaded: true, tableOfContents: toc }, () => {
          this.populateRender();
        });
      });
  }

  public populateRender = () => {
    const { tableOfContents } = this.state;
    console.log(`szw populate ${JSON.stringify(tableOfContents)}`);
    const renderEpubOption = {
      contained: true,
      width: "100%",
      height: "100%"
    };
    this.rendition = this.book.renderTo(this.viewRef, renderEpubOption);
    this.rendition.display(tableOfContents[0].href);
  };

  public render(): React.ReactNode {
    return (
      <div ref={c => (this.viewRef = c)}>
      </div>
    );
  }


}