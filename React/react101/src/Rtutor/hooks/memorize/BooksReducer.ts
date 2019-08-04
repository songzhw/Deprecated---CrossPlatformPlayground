import { AnyAction } from "redux";

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

export const ACTION_PLAY = "PLAY";
export const ACTION_PAUSE = "PAUSE";
export const ACTION_PROGRESS = "PROGRESS";

const defaultState = { book: [] } as IAppState;

export const BooksReducer = (state: IAppState = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTION_PLAY:
    case ACTION_PAUSE:
    case ACTION_PROGRESS:
    default:
      return state;
  }
};