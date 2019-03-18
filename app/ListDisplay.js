import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight
} from "react-native";

export default class ListDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(result => this.setState({ data: result }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[...this.state.data]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              underlayColor="#ccc"
              onPress={() => console.log("press")}
            >
              <Text style={styles.item}>
                {index + 1}. {item.name}
              </Text>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
