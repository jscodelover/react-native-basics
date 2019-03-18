// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import StatePropsExample from "./app/StatePropsExample";
import ListDisplay from "./app/ListDisplay";
import DetailDisplay from "./app/DetailDisplay";

const AppNavigator = createStackNavigator({
  DetailDisplay: {
    screen: DetailDisplay
  }
});

export default createAppContainer(AppNavigator);

// export default class App extends Component {
//   render() {
//     // return <StatePropsExample message="My Counter App" />;
//     // return <ListDisplay />;
//     return <DetailDisplay />;
//   }
// }
