import { AnyAction } from "redux";
import { updateState } from "../../../utils/utils";

export interface IChapter {
  id: number;
  name: string;
  duration: number;
  progress: number;
  isPlaying: boolean;
}

export interface IAppState {
  book: IChapter[]
}

export const ACTION_TOGGLE = "TOGGLE";
export const ACTION_PROGRESS = "PROGRESS";

const defaultState = {
  book: [
    { id: 1, name: "The Riddle House", duration: 1200, progress: 0, isPlaying: false },
    { id: 2, name: "The scar", duration: 900, progress: 0, isPlaying: false },
    { id: 3, name: "The invitation", duration: 1130, progress: 0, isPlaying: false },
    { id: 4, name: "Back to the burrow", duration: 850, progress: 0, isPlaying: false },
    { id: 5, name: "Weasley's wizard wheezes ", duration: 1320, progress: 0, isPlaying: false }
  ]
};

export const BooksReducer = (state: IAppState = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTION_TOGGLE:
      const books = state.book;
      // make sure only one chapter is playing
      for (const chap of books) {
        chap.isPlaying = false;
      }
      const { chapterId, isPlaying } = action.payload;
      const targetChapter = books.find(x => x.id === chapterId);
      const newChapter = { ...targetChapter, id: chapterId, isPlaying };
      const targetIndex = books.indexOf(targetChapter!);
      const newBooks = [...books.slice(0, targetIndex), newChapter, ...books.slice(targetIndex + 1)] as IChapter[];
      const newState: IAppState = { book: newBooks };
      return newState;
    case ACTION_PROGRESS:
    default:
      return state;
  }
};
/*
let ary = [1, 2, 3, 4, 5]
let r2 = [...ary.slice(0,1), 10, ...ary.slice(2)]
console.log(r2) //=> [ 1, 10, 3, 4, 5 ]
 */