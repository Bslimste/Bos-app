import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import Api from "../../config/api.js";

export default class Updates extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };

    let api = Api.getInstance();
    api.callApi("api/getAllUpdates", "POST", {}, response => {
      this.setState({
        uploading: false,
        loading: false,
        data: response["updates"]
      });
    });
  }

  render() {
    return (
      <View
        style={{
          width: window.innerWidth,
          height: "100%",
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            flexDirection: "column",
            height: 60,
            width: "100%",
            padding: 10,
            paddingLeft: 30
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Updates</Text>
        </View>
      </View>
    );
  }
}
