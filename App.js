import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  TextInput,
  Text,
  Alert,
} from "react-native";
import { FlatList } from "react-native";
import Input from "./Input";
import Todo from "./Todo";

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    const tmpTodoList = [...todoList];
    tmpTodoList.push(newTodo);
    setTodoList(tmpTodoList);
  };

  const deleteTodo = (indexTodo) => {
    const tmpTodoList = [...todoList];
    tmpTodoList.splice(indexTodo, 1);
    setTodoList(tmpTodoList);
  };

  const getTodos = () => {
    setTodoList(["ok"]);
  };

  const saveTodo = () => {
    console.log("ERROR !! ");
  };

  const updateTodoDone = (indexTodo) => {
    const tmpTodoList = [...todoList];
    tmpTodoList[indexTodo].done = !tmpTodoList[indexTodo].done;
    setTodoList(tmpTodoList);
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    saveTodo();
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}></View>
        <View>
          <Input addTodo={addTodo}></Input>
        </View>
        <View style={{ backgroundColor: "green", flex: 0.3 }}>
          <FlatList
            data={todoList}
            renderItem={({ item, index }) => (
              <Todo
                nameTodo={item.name}
                todoDone={item.done}
                indexTodo={index}
                deleteTodo={deleteTodo}
                updateTodoDone={updateTodoDone}
              ></Todo>
            )}
            keyExtractor={(item, index) => index.toString()}
          ></FlatList>
        </View>
        <StatusBar hidden={true} style="auto" />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
