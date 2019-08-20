import React from "react";
import { NavigationEventSubscription, NavigationScreenProps } from "react-navigation";

export class BaseScreenComponent<Props extends NavigationScreenProps, State> extends React.Component<Props, State> {
  startListener: NavigationEventSubscription;
  resumeListener: NavigationEventSubscription;
  pauseListener: NavigationEventSubscription;
  stopListener: NavigationEventSubscription;

  constructor(props: Props) {
    super(props);

    this.onStart = this.onStart.bind(this);
    this.onResume = this.onResume.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onStop = this.onStop.bind(this);

    this.startListener = this.props.navigation.addListener("willFocus", () => {
      console.log(`szw BaseScreenComponent willFocus (onStart)`);
      this.onStart();
    });

    this.resumeListener = this.props.navigation.addListener("didFocus", () => {
      console.log(`szw BaseScreenComponent didFocus (onResume)`);
      this.onResume();
    });

    this.pauseListener = this.props.navigation.addListener("willBlur", () => {
      console.log(`szw BaseScreenComponent willBlur (onPause)`);
      this.onPause();
    });

    this.stopListener = this.props.navigation.addListener("didBlur", () => {
      console.log(`szw BaseScreenComponent didBlur (onStop)`);
      this.onStop();
    });

  }

  componentWillUnmount(): void {
    this.startListener.remove();
    this.resumeListener.remove();
    this.pauseListener.remove();
    this.stopListener.remove();
  }

  onStart() {
  }

  onResume() {
  }

  onPause() {
  }

  onStop() {
  }
}

