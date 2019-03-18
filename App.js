// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import StatePropsExample from "./app/StatePropsExample";

export default class App extends Component {
  render() {
    return <StatePropsExample message="My Counter App" />;
  }
}
