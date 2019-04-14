import React, { Component } from "react";
import { Book, Rendition } from "epubjs";
import { NavItem } from "epubjs/types/navigation";

interface IProps {
  url: string;
}

interface IState {
  isLoaded: boolean;
  tableOfContents: NavItem[];
}

export class EpubView extends Component<IProps, IState> {
  public state: IState = { isLoaded: false, tableOfContents: [] };
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
      <div>
        <div ref={c => (this.viewRef = c)}/>
      </div>
    );
  }

}

/*
the tableOfContents:
[
  {
    "id": "titlepage.xhtml",
    "href": "titlepage.xhtml",
    "label": "Title Page",
    "subitems": []
  },
  {
    "id": "chapter_001.xhtml",
    "href": "chapter_001.xhtml",
    "label": "Down The Rabbit-Hole",
    "subitems": []
  },
  ...
  {
    "id": "chapter_010.xhtml",
    "href": "chapter_010.xhtml",
    "label": "Alice's Evidence",
    "subitems": []
  }
]
 */