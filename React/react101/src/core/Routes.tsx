import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { MovieScreen } from "../Rtutor/router/MovieScreen";
import { AdminScreen } from "../Rtutor/router/AdminScreen";
import { Header } from "../Rtutor/router/Header";

export const Routes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route path="/movie" component={MovieScreen}/>
        <Route path="/admin" component={AdminScreen}/>
      </div>
    </BrowserRouter>
  );
};