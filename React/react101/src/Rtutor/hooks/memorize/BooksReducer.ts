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
  const books = state.book;
  switch (action.type) {
    case ACTION_TOGGLE:
      // make sure only one chapter is playing
      for (const chap of books) {
        chap.isPlaying = false;
      }
      const { isPlaying } = action.payload;
      return updateBooks(state, action.payload.chapterId, { id: action.payload.chapterId, isPlaying });

    case ACTION_PROGRESS:
      console.log(`111`);
      for (const chap of books) {
        chap.progress = 0;
      }
      console.log(`2`);
      const { progress } = action.payload;
      console.log(`333`);
      const news = updateBooks(state, action.payload.chapterId, { id: action.payload.chapterId, progress });
      console.log("reducer progress = ", news);
      return news;
    default:
      return state;
  }
};

function updateBooks(state: IAppState, chapterId: number, news: any) {
  const books = state.book;
  const targetChapter = books.find(x => x.id === chapterId);
  const newChapter = { ...targetChapter, ...news };
  const targetIndex = books.indexOf(targetChapter!);
  const newBooks = [...books.slice(0, targetIndex), newChapter, ...books.slice(targetIndex + 1)] as IChapter[];
  const newState: IAppState = { book: newBooks };
  return newState;
}

/*
let ary = [1, 2, 3, 4, 5]
let r2 = [...ary.slice(0,1), 10, ...ary.slice(2)]
console.log(r2) //=> [ 1, 10, 3, 4, 5 ]
 */