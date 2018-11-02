import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { Toolbar } from "react-native-material-ui";
import LocalStorage from "../config/localStorage.js";
import Api from "../config/api.js";
import { NavigationActions } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

export default class Exchange extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      routes: [
        { key: "asked", title: "Asked" },
        { key: "offered", title: "Offered" }
      ]
    };
    ls = LocalStorage.getInstance();
    api = Api.getInstance();
    api.callApi("getAllNecessityRequests", "POST", {}, response => {
      completeArray = response["response"];
      offeredArray = [];
      askedArray = [];
      for (let index in completeArray) {
        entry = completeArray[index];
        if (entry.offered) {
          offeredArray.push(entry);
        } else {
          askedArray.push(entry);
        }
      }
      this.setState({
        dataArrayOffered: offeredArray,
        dataArrayAsked: askedArray
      });
    });
  }

  render() {
    const OfferedRoute = () => (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataArrayOffered}
          keyExtractor={item => "" + item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() =>
                this.props.navigation.navigate("RequestDetail", {
                  id: item.id,
                  owner: item.owner,
                  ownerId: item.ownerId,
                  location: item.location,
                  profilePhoto: item.profilePhoto,
                  title: item.title,
                  description: item.description,
                  necessity: item.necessity,
                  offered: item.offered,
                  picture: item.picture
                })
              }
            >
              <Image
                source={{ uri: item.profilePhoto }}
                resizeMode="cover"
                style={{ width: "100%", height: 150 }}
              />

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: 0,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 10
                }}
                numberOfLines={2}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  padding: 0,
                  paddingLeft: 15,
                  paddingRight: 15,
                  color: "#e95827",
                  paddingBottom: 10
                }}
              >
                {item.location}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
    const AskedRoute = () => (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataArrayAsked}
          keyExtractor={item => "" + item.id}
          numColumns={1}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.cardContainerRow}
              onPress={() =>
                this.props.navigation.navigate("RequestDetail", {
                  id: item.id,
                  owner: item.owner,
                  ownerId: item.ownerId,
                  location: item.location,
                  profilePhoto: item.profilePhoto,
                  title: item.title,
                  description: item.description,
                  necessity: item.necessity,
                  offered: item.offered,
                  picture: item.picture
                })
              }
            >
              <Image
                source={{ uri: item.profilePhoto }}
                resizeMode="cover"
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: 0,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 10
                }}
                numberOfLines={2}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  padding: 0,
                  paddingLeft: 15,
                  paddingRight: 15,
                  color: "#e95827",
                  paddingBottom: 10
                }}
              >
                {item.location}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          leftElement="menu"
          centerElement="Exchange"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          searchable={{
            autoFocus: true,
            placeholder: "Search"
          }}
        />
        <TabView
          navigationState={this.state}
          indicatorStyle={{ backgroundColor: "grey" }}
          tabStyle={{ backgroundColor: "white" }}
          renderScene={SceneMap({
            asked: AskedRoute,
            offered: OfferedRoute
          })}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={styles.tabbar}
              indicatorStyle={styles.indicator}
              labelStyle={{ color: "grey" }}
            />
          )}
          onIndexChange={index => this.setState({ index })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  tabbar: {
    backgroundColor: "white"
  },
  indicator: {
    backgroundColor: "grey"
  },
  cardContainer: {
    backgroundColor: "#ffffff",
    shadowOffset: { width: 0, height: 13 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    margin: 5,
    width: Dimensions.get("window").width,
    flex: 1,
    flexDirection: "column"
  },
  cardContainerRow: {
    backgroundColor: "#ffffff",
    shadowOffset: { width: 0, height: 13 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    margin: 5,
    width: Dimensions.get("window").width,
    flex: 1,
    flexDirection: "row"
  }
});
