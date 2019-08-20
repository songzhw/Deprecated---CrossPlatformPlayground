import React from "react";
import { NavigationScreenProps } from "react-navigation";

export class BaseScreenComponent<Props extends NavigationScreenProps, State> extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
}

