// @flow
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default class StatePropsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  onIncrease = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };
  onDecrease = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };
  render() {
    return (
      <View>
        <Text style={styles.heading}>{this.props.message}</Text>
        <View style={styles.container}>
          <Text style={styles.counter}>
            Current Count : {this.state.counter}
          </Text>
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button
                onPress={this.onIncrease}
                title="Increase"
                color="#841530"
                accessibilityLabel="Increase the Count"
              />
            </View>
            <View style={styles.btn}>
              <Button
                onPress={this.onDecrease}
                title="Decrease"
                color="#841530"
                accessibilityLabel="Decrease the Count"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "#841534",
    color: "#fff",
    padding: 15
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    alignItems: "center"
  },
  counter: {
    fontSize: 20
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  btn: {
    flex: 1,
    padding: 5
  }
});
