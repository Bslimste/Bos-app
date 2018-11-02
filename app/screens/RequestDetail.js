import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Toolbar } from "react-native-material-ui";
import LocalStorage from "../config/localStorage.js";
import Api from "../config/api.js";

export default class RequestDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", "");
    const owner = navigation.getParam("owner", "");
    const ownerId = navigation.getParam("ownerId", "");
    const title = navigation.getParam("title", "");
    const description = navigation.getParam("description", "");
    const necessity = navigation.getParam("necessity", "");
    const profilePhoto = navigation.getParam("profilePhoto", "");
    const offered = navigation.getParam("offered", "");
    const picture = navigation.getParam("picture", "");
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          iconSet="MaterialCommunityIcons"
          leftElement={"arrow-left"}
          onLeftElementPress={() => this.props.navigation.goBack()}
          centerElement="Exchange"
        />
        <View style={styles.container}>
          {offered && (
            <Image
              source={{ uri: picture }}
              style={{ width: "100%", height: 175 }}
            />
          )}
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Image
                source={{ uri: profilePhoto }}
                resizeMode="cover"
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
              <View
                style={{
                  flexDirection: "column",
                  height: 60,
                  width: "100%",
                  padding: 10,
                  paddingTop: 5
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {title}
                </Text>
                <Text style={{ fontSize: 16 }}>{owner}</Text>
              </View>
            </View>
            <View style={styles.descContainer}>
              <Text>{description}</Text>
              <View style={styles.necessityContainer}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "black"
                  }}
                >
                  Wat:
                </Text>
                <Text>- {necessity}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  cardContainer: {
    backgroundColor: "white",
    height: "100%",
    shadowOffset: { width: 0, height: 13 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    padding: 5,
    alignItems: "flex-start"
  },
  descContainer: {
    margin: 25,
    justifyContent: "flex-start"
  },
  necessityContainer: {
    marginTop: 50
  },
  cardHeader: {
    margin: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "center",
    width: Dimensions.get("window").width
  }
});
