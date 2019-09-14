export enum ActionTypes {
  SET_PROGRESS = "@@_PLAY_MUSIC/SET/PROGRESS",
  POST_PROGRESS = "@@_PLAY_MUSIC/POST/PROGRESS",
  CLEAR_PROGRESS = "@@_PLAY_MUSIC/CLEAR/PROGRESS"
}

export const setProgress = () => ({
  type: ActionTypes.SET_PROGRESS
});

export const postProgress = () => ({
  type: ActionTypes.POST_PROGRESS
});

export const clearProgress = () => ({
  type: ActionTypes.CLEAR_PROGRESS
});
