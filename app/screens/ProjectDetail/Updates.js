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
        <ScrollView
          style={{
            flexDirection: "column",
            height: 60,
            width: "100%",
            padding: 10,
            paddingLeft: 30
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Updates</Text>
          <View style={{ width: "100%", flexDirection: "column" }}>
            <View
              style={{
                height: 40,
                width: "100%",
                flexDirection: "row",
                paddingTop: 20
              }}
            >
              <Image
                source={require("../../assets/Polygon.png")}
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 75,
                  marginRight: 20
                }}
              />
              <View style={{ flexDirection: "row" }}>
                <Text>24/10/2018 </Text>
                <Text style={{ fontWeight: "bold" }}> - Update 1 </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: 2,
                  height: this.state.height + 10,
                  backgroundColor: "#cfd8dc",
                  marginLeft: 80,
                  marginTop: 10
                }}
              />
              <Text
                style={{ margin: 20, width: 225 }}
                onLayout={event => {
                  this.setState({ height: event.nativeEvent.layout.height });
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ut ante urna. In luctus, nulla sit amet dignissim euismod, odio
                elit elementum ante, id vulputate sem ex in neque. Fusce
                convallis blandit ipsum, ac rutrum dui fermentum quis. Donec
                porta elit scelerisque leo pretium maximus. Mauris vel metus
                risus.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
