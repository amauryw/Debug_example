import React, { Component } from "react";

import reducer from "../redux/todolist.js";
import { createStore } from "../../node_modules/redux";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ScrollView
} from "react-native";

const store = createStore(reducer);

let varId = 0;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  mainText: {
    color: "black",
    fontSize: 50
  },
  button: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "red",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  buttonText: {
    color: "white"
  },
  todoText: {
    fontSize: 14,
    paddingBottom: 5
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    color: "white"
  }
});

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    note: "",
    count: 0
  };

  handlePress = () => {
    store.dispatch({
      type: "ADD_TODO",
      text: this.state.note,
      id: varId++
    });
    this.setState(
      {
        note: "",
        count: this.state.count + 1
      },
      done => {
        console.log("updated");
      }
    );
  };

  componentDidMount() {
    store.subscribe(this.render);
  }

  handleChange = event => {
    this.setState({
      note: event.nativeEvent.text
    });
  };

  render() {
    const { note } = this.state;
    const todos = store.getState().todos;
    const list = todos.map(todo => (
      <TouchableHighlight>
        <Text>{todo.text}</Text>
      </TouchableHighlight>
    ));
    return (
      <ScrollView style={styles.mainContainer}>
        <Text>{varId}</Text>
        <TextInput
          placeholder="Write Note Here"
          backgroundColor="#CCC"
          underlineColorAndroid="transparent"
          style={styles.searchInput}
          onChange={this.handleChange}
          value={note}
        />
        <TouchableHighlight onPress={this.handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
        {list}
      </ScrollView>
    );
  }
}
