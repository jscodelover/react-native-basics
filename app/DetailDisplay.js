import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DetailScreen extends React.Component {
  render() {
    const { user } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Name: {user.name}</Text>
        <Text style={styles.text}>UserName: {user.username}</Text>
        <Text style={styles.text}>Email: {user.email}</Text>
        <Text style={styles.text}>Webiste: {user.website}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  text: {
    fontSize: 20
  }
});
