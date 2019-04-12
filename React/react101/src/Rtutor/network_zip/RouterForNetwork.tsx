import { DownloadImage } from "./DownloadImage";
import { Route, RouteComponentProps } from "react-router";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterForNetwork: React.FunctionComponent = () => {

  return (
    <BrowserRouter>
      <Route path="/download/image" component={DownloadImage}/>
    </BrowserRouter>
  );
};
