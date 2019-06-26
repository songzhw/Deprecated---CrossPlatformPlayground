import React, { Component } from "react";
import { Alert, Modal, Text, TouchableHighlight, View } from "react-native";

export class ModalExample extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible: boolean) {
    this.setState({ modalVisible: visible });
  }

  // animationType: "none" | "slide" | "fade";
  render() {
    return (
      <View style={{ marginTop: 22 }}>
        {/*弹窗*/}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { Alert.alert("Are you sure?");}}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>
              <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/*主屏幕*/}
        <TouchableHighlight onPress={() => { this.setModalVisible(true); }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
