import React, { ChangeEvent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ACTION_PROGRESS, ACTION_TOGGLE, IAppState, IChapter } from "./BooksReducer";
import { PlayerConsole } from "./PlayerConsole";
import { player } from "./Player";
import { PlayerConsole_Class } from "./PlayerConsole_Class";

interface IBasicProps {
}

type IProps = IBasicProps
  & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>;

interface IState {
  current: number;
}


class _BookScreen_Class extends React.Component<IProps, IState> {
  private defaultChapter: IChapter = {
    id: -1, name: "", isPlaying: false, progress: 0, duration: 0
  };

  public state = {
    current: -1
  };


  public componentDidMount() {
    player.callback = this.onProgress;
  }

  public componentWillUnmount() {
    player.pause();
  }


  private clickAt = (chapter: IChapter) => {
    this.setState({ current: chapter.id });
  };

  private toggle = () => {
    if (this.state.current === -1) {
      return;
    }

    const thisChapter = this.props.chapters.find(x => x.id === this.state.current);
    const isPlaying = thisChapter!.isPlaying;
    this.props.actions.toggle(thisChapter!.id, !isPlaying);

    if (!isPlaying) {
      player.play();
    } else {
      player.pause();
    }

  };

  private onProgress = (progress: number) => {
    if (this.state.current === -1) {
      return;
    }
    const thisChapter = this.props.chapters.find(x => x.id === this.state.current);
    this.props.actions.progress(thisChapter!.id, progress);
  };

  public render() {
    const listView = this.props.chapters.map((chapter, index) => {
      const text = `${chapter.id}. ${chapter.name}  (${chapter.progress} / ${chapter.duration})`;
      return (
        // tslint:disable-next-line:jsx-no-lambda
        <li key={`${index}`} onClick={() => this.clickAt(chapter)}> {text} </li>
      );
    });

    const targetChapter = this.props.chapters.find(x => x.id === this.state.current);
    const currentChapter = targetChapter ? targetChapter : this.defaultChapter;

    return (
      <div>
        <ul>{listView}</ul>
        <PlayerConsole_Class toggle={this.toggle} name={currentChapter!.name} isPause={currentChapter!.isPlaying}/>
      </div>
    );
  }
};


function mapStateToProps(state: IAppState) {
  const chapters = state.book;
  return { chapters };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: {
      toggle: (chapterId: number, isPlaying: boolean) => dispatch({
        type: ACTION_TOGGLE,
        payload: { chapterId, isPlaying }
      }),
      progress: (chapterId: number, progress: number) => dispatch({
        type: ACTION_PROGRESS,
        payload: { chapterId, progress }
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_BookScreen_Class);

