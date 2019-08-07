import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterWrap } from "./Rtutor/router/RoutesForFirst";
import { RouterForNetwork } from "./Rtutor/network_zip/RouterForNetwork";
import RouterChap6 from "./reacts_book/chap6/Routes";
import RouterChap7 from "./reacts_book/chap7/Routes";
import { FavoritePetScreen } from "./Rtutor/persist/useLocalStorage/FavoritePetScreen";
import { CryptoScreen } from "./three_party/crypto_js/CryptoScreen";
import { UseCallbackDemo } from "./Rtutor/hooks/useCallback/UseCallbackDemo";
import { AtCookieScreen } from "./storage_book/AtCookie";
import { AtLocalStorageScreen } from "./storage_book/AtLocalStorage";
import { AtIndexedDB } from "./storage_book/AtIndexedDb";
import { SingletonScreen } from "./Rtutor/singleton/SingletonScreen";
import { DownloadScreen } from "./biz/download/DownloadScreen";
import { LetConst_Problem } from "./Rtutor/simple/LetConst_Problem";
import { LetConst_Resolve } from "./Rtutor/simple/LetConst_Resolve";
import { UseStateIssue1 } from "./Rtutor/FC/useStateIssue1";
import { RpApp } from "./three_party/redux_persist/rpApp";
import { CryptoRouter } from "./three_party/crypto_js/CryptoRoutes";
import { HooksPitfall01 } from "./Rtutor/FC/HooksPitfall01";
import { OneScreen } from "./Rtutor/module/OneScreen";
import { CounterClass } from "./Rtutor/hooks/useeffect/CounterClass";
import { CounterClass2 } from "./Rtutor/hooks/useeffect/CounterClass2";
import { CounterFunc } from "./Rtutor/hooks/useeffect/CounterFunc";
import { CounterFunc2 } from "./Rtutor/hooks/useref/CounterFunc2";
import { Useref2 } from "./Rtutor/hooks/useref/useref2";
import { WithoutUseRef } from "./Rtutor/hooks/useref/WithoutUseRef";
import { WithUseRef } from "./Rtutor/hooks/useref/WithUseRef";
import { InputParent } from "./Rtutor/hooks/useimerative/MyInput";
import { MediaDemo } from "./Rtutor/hooks/MediaDemo";
import { HeavyFuncDemo } from "./Rtutor/hooks/useCallback/before/HeavyFuncDemo";
import { SwitchDemo } from "./views/switch/SwitchDemo";
import { DefaultPropsDemo2 } from "./typescript/DefaultPropsDemo2";
import { BooksReducer, IAppState } from "./Rtutor/hooks/memorize/player_console/BooksReducer";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import { BooksScreen } from "./Rtutor/hooks/memorize/player_console/BooksScreen";
import BookScreen_Class from "./Rtutor/hooks/memorize/player_console/BooksScreen_Class";
import { HookParent } from "./Rtutor/hooks/parentCallback/HookParent";
import UnnecessaryRender1 from "./performance/unnecessary_render/UnnecessaryRender1";
import UnnecessaryRender2 from "./performance/unnecessary_render/UnnecessaryRender2";

const store: Store<IAppState> = createStore(BooksReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <UnnecessaryRender2/>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));

