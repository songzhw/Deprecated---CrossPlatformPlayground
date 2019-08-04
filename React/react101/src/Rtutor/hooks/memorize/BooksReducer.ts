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
    case ACTION_PLAY:
    case ACTION_PAUSE:
    case ACTION_PROGRESS:
    default:
      return state;
  }
};