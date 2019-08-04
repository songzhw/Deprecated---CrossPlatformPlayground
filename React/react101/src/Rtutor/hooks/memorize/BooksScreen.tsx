import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ACTION_PAUSE, ACTION_PLAY, ACTION_PROGRESS, IAppState } from "./BooksReducer";
import { PlayerConsole } from "./PlayerConsole";

interface IBasicProps {
}

type IProps = IBasicProps
  & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>;

export const _BookScreen = (props: IProps) => {


  // function play() {
  //   props.actions.add(inputString);
  // }
  //
  // function pause() {
  //   props.actions.comment(inputString);
  // }
  //
  //
  // function progress(e: ChangeEvent<HTMLSelectElement>) {
  //   props.actions.filter(e.currentTarget.value);
  // }


  const listView = props.chapters.map((chapter, index) => {
    const text = `${chapter.id}. ${chapter.name}  (${chapter.progress} / ${chapter.duration})`;
    return (
      <li key={`${index}`}> {text} </li>
    );
  });


  console.log(`   [render]`);
  return (
    <div>
      <ul>{listView}</ul>
      <PlayerConsole isPause={false}/>
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
      pause: (chapterId: number) => dispatch({ type: ACTION_PAUSE, payload: { chapterId } }),
      play: (chapterId: number) => dispatch({ type: ACTION_PLAY, payload: { chapterId } }),
      progress: (chapterId: number, progress: number) => dispatch({
        type: ACTION_PROGRESS,
        payload: { chapterId, progress }
      })
    }
  };
}

export const BooksScreen = connect(mapStateToProps, mapDispatchToProps)(_BookScreen);

