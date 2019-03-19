import React from "react";
import { View, Text, Button } from "react-native";

export default function NavigationButtons(props) {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100%"
      }}
    >
      <Text style={{ fontSize: 25, textAlign: "center", margin: 10 }}>
        Learning React Native
      </Text>
      <View
        style={{
          flexDirection: "column"
        }}
      >
        <View style={{ margin: 5 }}>
          <Button
            title="Counter App"
            onPress={() => props.navigation.navigate("StatePropsExample")}
          />
        </View>
        <View style={{ margin: 5 }}>
          <Button
            title="List App"
            onPress={() => props.navigation.navigate("ListDisplay")}
          />
        </View>
      </View>
    </View>
  );
}
