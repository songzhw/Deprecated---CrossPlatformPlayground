import React, { Component } from "react";
import ePub from "epubjs/lib/index";

export class EpubView extends Component {
  state = { isLoaded: false, tableOfContents: [] };
  book = null;

  constructor(props) {
    super(props);
    this.epubViewRef = React.createRef();
  }


  componentDidMount() {
    const { url } = this.props;
    this.book = ePub(url, {});
    this.book.loaded.navigation
      .then(({ toc }) => {
        this.setState({ isLoaded: true, tableOfContents: toc }, () => {
          this.populateRender();
        });
      });
  }

  populateRender = () => {
    const { tableOfContents } = this.state;
    console.log(`szw populate ${JSON.stringify(tableOfContents)}`);
    const renderEpubOption = {
      contained: true,
      width: "100%",
      height: "100%"
    };
    const node = this.epubViewRef.current;
    this.rendition = this.book.renderTo(node, renderEpubOption);
    this.rendition.display(tableOfContents[0].href);
  };

  render() {
    return (
      <div ref={this.epubViewRef}>
      </div>
    );
  }

}