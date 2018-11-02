import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import LocalStorage from "../../config/localStorage.js";
import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationActions } from "react-navigation";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  render() {
    const localStorage = LocalStorage.getInstance();
    const detailData = localStorage.getProjectDetail();
    return (
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              height: 60,
              width: "100%",
              padding: 10,
              paddingLeft: 30
            }}
          >
            <View
              style={{
                flexDirection: "column",
                height: 60,
                width: "100%",
                padding: 10,
                paddingLeft: 20
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {detailData.title}
              </Text>
              <Text style={{ fontSize: 16 }}>
                Door: {detailData.creatorName}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 60,
                padding: 15,
                backgroundColor: "#03a9f4",
                position: "absolute",
                top: 25,
                right: 20,
                //ios
                shadowOpacity: 0.3,
                shadowRadius: 3,
                shadowOffset: {
                  height: 0,
                  width: 0
                },
                //android
                elevation: 1
              }}
            >
              <Icon size={20} name={"message"} style={{ color: "white" }} />
            </TouchableOpacity>
          </View>
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
              <Text>Beschrijving</Text>
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
                style={{ margin: 20, width: 250 }}
                onLayout={event => {
                  this.setState({ height: event.nativeEvent.layout.height });
                }}
              >
                {detailData.desc}
              </Text>
            </View>
          </View>
          <View
            style={{ width: "100%", flexDirection: "column", marginBottom: 20 }}
          >
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
              <Text>Benodigheden</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: 2,
                  height: 75,
                  backgroundColor: "#cfd8dc",
                  marginLeft: 80,
                  marginTop: 10
                }}
              />
              <Text style={{ margin: 20, width: 250 }}>
                {"\u2022" +
                  " Project 1 " +
                  "\n" +
                  "\u2022" +
                  " Project 2" +
                  "\n" +
                  "\u2022" +
                  " Project 3"}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
