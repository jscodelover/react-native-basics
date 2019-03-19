// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import StatePropsExample from "./app/StatePropsExample";
import ListDisplay from "./app/ListDisplay";
import DetailDisplay from "./app/DetailDisplay";
import NavigationButtons from "./app/NavigationButtons";

const AppNavigator = createStackNavigator(
  {
    ListDisplay: { screen: ListDisplay },
    DetailDisplay: { screen: DetailDisplay },
    StatePropsExample: {
      screen: () => <StatePropsExample message="Counter App" />
    },
    NavigationButtons: { screen: NavigationButtons }
  },
  {
    initialRouteName: "NavigationButtons"
  }
);

const App = createAppContainer(AppNavigator);

export default App;
