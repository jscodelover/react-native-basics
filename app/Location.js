import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

export default class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: null
    };
  }
  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ userLocation: JSON.stringify(position) });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 10
        }}
      >
        <TouchableHighlight
          style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 10
          }}
          underlayColor="#ccc"
          onPress={this.getLocation}
        >
          <Text> Touch Here </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
