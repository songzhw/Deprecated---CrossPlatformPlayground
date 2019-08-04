import React from "react";


export const DefaultPropsDemo2 = () => {

  return (
    <div>
      <MyView id={20} text={"demo2"}/>
    </div>
  );
};

type IProps = {
  id: number;
} & IDefaultProps;

interface IDefaultProps {
  text?: string;
  color?: string;
}


const MyView = (props: IProps) => {
  return (
    <>
      <p style={{ margin: "20px", fontSize: "50px" }}>{props.id} -- {props.text} -- {props.color}</p>
    </>
  );
};

const defaults: IDefaultProps = {
  text: "default",
  color: "red"
};
MyView.defaultProps = defaults;


/*
这个做法能起到defaultProps的作用,但它不会检查类型是否在IProps中

比如说我下面的代码仍是不会报错, 但就没有了defaultProps的效果了

MyView.defaultProps = {
  text22222: "default"
};
 */