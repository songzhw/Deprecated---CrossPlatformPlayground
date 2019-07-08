import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";


interface ICommentProps {
  text: string;
  onClick: () => void;
}

export const Comment = (props: ICommentProps) => {

  return (
    <TouchableOpacity onPress={props.onClick}>
      <Text> {props.text} </Text>
    </TouchableOpacity>
  );
};


export const CommentList1 = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [selected, setSelected] = useState("");

  return (
    comments.map(comment => {
      return <Comment text={comment} onClick={() => setSelected(comment)}/>;
    })
  );
};

export const CommentList2 = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [selected, setSelected] = useState("");

  const click = () => {
    setSelected("");
  };

  return (
    comments.map(comment => {
      return <Comment text={comment} onClick={click}/>;
    })
  );
};
