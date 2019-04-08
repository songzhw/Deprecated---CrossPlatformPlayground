import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "../Rtutor/router/Header";
import { AdminScreen } from "../Rtutor/router/AdminScreen";
import { MovieListScreen } from "../Rtutor/router/MovieListScreen";
import { MovieScreen } from "../Rtutor/router/MovieScreen";

export const Routes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route path="/movies" component={MovieListScreen}/>
        <Route path="/admin" component={AdminScreen}/>
        <Route path="/movie/:id" component={MovieScreen}/>
      </div>
    </BrowserRouter>
  );
};
