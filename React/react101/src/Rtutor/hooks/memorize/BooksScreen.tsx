import React, { ChangeEvent, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ACTION_PROGRESS, ACTION_TOGGLE, IAppState, IChapter } from "./BooksReducer";
import { PlayerConsole } from "./PlayerConsole";

interface IBasicProps {
}

type IProps = IBasicProps
  & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>;

export const _BookScreen = (props: IProps) => {
  const defaultChapter: IChapter = {
    id: -1, name: "", isPlaying: false, progress: 0, duration: 0
  };
  const [currentChapter, setCurrentChapter] = useState<IChapter>(defaultChapter);

  function clickAt(chapter: IChapter) {
    setCurrentChapter(chapter);
  }

  function toggle() {
    if (currentChapter.id === -1) {
      return;
    }

    const isPlaying = currentChapter.isPlaying;
    props.actions.toggle(currentChapter.id, !isPlaying);
  }

  const listView = props.chapters.map((chapter, index) => {
    const text = `${chapter.id}. ${chapter.name}  (${chapter.progress} / ${chapter.duration})`;
    return (
      // tslint:disable-next-line:jsx-no-lambda
      <li key={`${index}`} onClick={() => clickAt(chapter)}> {text} </li>
    );
  });

  return (
    <div>
      <ul>{listView}</ul>
      <PlayerConsole toggle={toggle} name={currentChapter!.name} isPause={currentChapter!.isPlaying}/>
    </div>
  );
};


function mapStateToProps(state: IAppState) {
  console.log(`mapStateToProps `, state);
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

export const BooksScreen = connect(mapStateToProps, mapDispatchToProps)(_BookScreen);

