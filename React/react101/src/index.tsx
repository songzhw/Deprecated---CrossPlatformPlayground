import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterWrap } from "./Rtutor/router/RoutesForFirst";
import { RouterForNetwork } from "./Rtutor/network_zip/RouterForNetwork";
import RouterChap6 from "./reacts_book/chap6/Routes";
import RouterChap7 from "./reacts_book/chap7/Routes";
import { FavoritePetScreen } from "./Rtutor/persist/useLocalStorage/FavoritePetScreen";

ReactDOM.render(<RouterChap7/>, document.getElementById("root"));

