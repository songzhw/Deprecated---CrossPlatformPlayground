import _ from "lodash";
import "../css/index.css"

function component() {
  const element = document.createElement('div');
  element.setAttribute("id", "app");
  element.innerHTML = _.join(['Hello', 'webpack', "222"], ' ');
  return element;
}

document.body.appendChild(component());
