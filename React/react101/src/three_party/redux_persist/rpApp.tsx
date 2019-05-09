import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Store from "./rpStore";
import { ReduxPersistScreen } from "./ReduxPersistScreen";

export const RpApp = () => (
  <Provider store={Store.store}>
    <PersistGate persistor={Store.persistor}>
      <ReduxPersistScreen/>
    </PersistGate>
  </Provider>
);
