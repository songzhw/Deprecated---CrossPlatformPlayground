import React from "react";
import { MovieScreen } from "../Rtutor/router/MovieScreen";
import { AdminScreen } from "../Rtutor/router/AdminScreen";
import { BrowserRouter, Link, Route } from "react-router-dom";

export const Routes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/movie"> Movies </Link><p></p>
        <Link to="/admin"> Admin </Link>

        <Route path="/movie" component={MovieScreen}/>
        <Route path="/admin" component={AdminScreen}/>
      </div>
    </BrowserRouter>
  );
};