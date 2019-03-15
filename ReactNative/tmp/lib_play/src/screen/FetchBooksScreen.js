import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { createFetchBooksAction } from "../redux/BooksReducer";

class FetchBooksScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={{ fontSize: 22 }}>{this.props.goods}</Text>
        <Button title="Fetch Data" onPress={this.onFetch}/>
      </View>
    );
  }

  onFetch = () => {
    let books = { books: 30 };
    this.props.dispatch(createFetchBooksAction(books));
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  let { books } = state.eshop.BooksReducer;
  return { books };
};

export default connect(mapStateToProps)(FetchBooksScreen);
