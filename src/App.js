// @flow

import React, { Component } from "react";
import { StyleSheet, NavigatorIOS } from "react-native";

import Main from "./components/Main";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan"
  }
});

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Main,
          title: "toDoList"
        }}
        style={styles.container}
      />
    );
  }
}
