import { bookReducer, IBookState } from "./rpBookReducer";
import { combineReducers, createStore } from "redux";
// @ts-ignore
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { PersistPartial } from "redux-persist/es/persistReducer";


const persistBookConfig = {
  key: "root",
  storage
};
const persistBookReducer = persistReducer(persistBookConfig, bookReducer);

export interface IAppState {
  book: IBookState ;
}

const rootReducer = combineReducers<IAppState>({
  book: persistBookReducer
});
const store = createStore(rootReducer);
const persistor = persistStore(store);
export default { store, persistor };
