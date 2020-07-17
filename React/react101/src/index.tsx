import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blue, green, purple } from "@material-ui/core/colors";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { applyMiddleware, createStore, Store } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { KeyImportancePage } from "./performance/keys/KeyImportancePage";
import { BeforeUseCallback1 } from "./Rtutor/hooks/useCallback/before/BeforeUseCallback";
import { UseMemo1 } from "./Rtutor/hooks/useMemo/usememo1";
import { UseMemo2 } from "./Rtutor/hooks/useMemo/usememo2";
import { UseMemo3 } from "./Rtutor/hooks/useMemo/usememo3";
import { UseMemo5 } from "./Rtutor/hooks/useMemo/usememo5";
import { FC_ref_Demo } from "./Rtutor/hooks/useref/FC_ref_Demo";
import { Useref01 } from "./Rtutor/hooks/useref/useref01";
import { Useref04 } from "./Rtutor/hooks/useref/useref04";
import { Useref05 } from "./Rtutor/hooks/useref/useRef05";
import { Useref06 } from "./Rtutor/hooks/useref/useRef06";
import { Useref07 } from "./Rtutor/hooks/useref/useRef07";
import { Useref02 } from "./Rtutor/hooks/useref/useref2";
import { Useref03 } from "./Rtutor/hooks/useref/useref3";
import { Useref08 } from "./Rtutor/hooks/useref/useRef8";
import { UseIntervalDemo } from "./Rtutor/hooks/useState/useinterval/UseIntervalDemo";
import { CryptoRouter } from "./three_party/crypto_js/CryptoRoutes";
import { C01Basic } from "./three_party/material_ui/C01Basic";
import { SagaWaitReducer } from "./three_party/saga/wait/SagaWaitReducer";
import { ChannelAsync_Saga } from "./three_party/saga/channel_async/ChannelAsync_Saga";
import { ModuleA } from "./biz/singleton/export/ModuleA";
import { ModuleD } from "./biz/singleton/exportdefault/ModuleD";

const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(SagaWaitReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(ChannelAsync_Saga);

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple
  }
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CryptoRouter/>
      </ThemeProvider>
    </Provider>
  )
    ;
};

ReactDOM.render(<App/>, document.getElementById("root"));

