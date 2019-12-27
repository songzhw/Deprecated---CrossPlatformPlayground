import React from "react";
import { isString } from "./utils";
import { Piece } from "./Piece";

export const ChildRenderer = ({ height, tickerNum, children, textStyle, rotateTime, rotateItems = [] }) => {
  return React.Children.map(children, (child, i) => {
    if (isString(child)) {
      return (
        <Piece style={{ height }} height={height} textStyle={textStyle}>
          {child}
        </Piece>
      );
    }

    const items = child.props.rotateItems || rotateItems;
    const key = items.join(",") + i;

    return React.cloneElement(child, {
      key,
      text: child.props.text || child.props.children,
      height,
      duration: child.props.rotateTime || rotateTime,
      textStyle,
      rotateItems: child.props.rotateItems || rotateItems
    });
  });
};