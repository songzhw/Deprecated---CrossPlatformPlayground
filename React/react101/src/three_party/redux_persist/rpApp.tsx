import React from "react";
import { Provider } from "react-redux";
import Store from "./rpStore";
import { ReduxPersistScreen } from "./ReduxPersistScreen";
import { PersistGate } from "redux-persist/integration/react";

export const RpApp = () => (
  <Provider store={Store.store}>
    <PersistGate persistor={Store.persistor}>
      <ReduxPersistScreen/>
    </PersistGate>
  </Provider>
);
