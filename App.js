// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationButtons from "./app/NavigationButtons";
import StatePropsExample from "./app/StatePropsExample";
import ListDisplay from "./app/ListDisplay";
import DetailDisplay from "./app/DetailDisplay";
import Location from "./app/Location";

const AppNavigator = createStackNavigator(
  {
    NavigationButtons: { screen: NavigationButtons },
    ListDisplay: { screen: ListDisplay },
    DetailDisplay: { screen: DetailDisplay },
    StatePropsExample: {
      screen: () => <StatePropsExample message="Counter App" />
    },
    Location: { screen: Location }
  },
  {
    initialRouteName: "NavigationButtons"
  }
);

const App = createAppContainer(AppNavigator);

export default App;
