
//我们需要对当前的文本做切割得到包含文本中每个字符的字符数组，
//遍历切割后的字符数组，取出每一个字符，判断是否是数字，不是数字就直接绘制文本，
//Piece是封装的直接用text进行文本绘制的组件，如果是数字就绘制数字动画组件，
//Tick是封装的单个数字动画绘制的组件。
import { Piece } from "./Piece";
import React from "react";
import { isNumber, splitText } from "./utils";
import { Tick } from "./tick";

export const StringNumberRenderer = ({ height, tickerNum, children, textStyle, rotateTime, rotateItems }) => {

  //传入的数字总长度
  let length = children.length;
  const rollLength = [4, 5, 6];

  // 切割子组件文本内容遍历
  return splitText(children).map((piece, i) => {

    //取单个字符，如果不是数字,直接绘制文本
    if (!isNumber(piece)) {
      return (
        <Piece key={i} style={{ height }} textStyle={textStyle}>
          {piece}
        </Piece>
      );
    }

    //前面数字不滚动，直接显示，在交界点显示一个“，”号，然后只滚动后面的tickerNum位数数字
    if (length > tickerNum) {
      //前面数字不滚动，直接显示
      if (i < length - tickerNum) {
        return (
          <Piece key={i} style={{ height }} textStyle={textStyle}>
            {piece}
          </Piece>
        );
      } else {
        return (
          <Tick
            rollNum={rollLength[i - (length - tickerNum)]}
            duration={rotateTime}
            key={i}
            text={piece}
            textStyle={textStyle}
            height={height}
            rotateItems={rotateItems}
          />
        );
      }
    } else {

      // 不足三位数字滚动的逻辑
      return (
        <Tick
          rollNum={rollLength[tickerNum - length + i]}
          duration={rotateTime}
          key={i}
          text={piece}
          textStyle={textStyle}
          height={height}
          rotateItems={rotateItems}
        />
      );
    }


  });
};

