import React, { Component } from "react";
import {
  Alert,
  Animated,
  Button,
  Dimensions,
  Divider,
  FlatList,
  Image,
  ImageBackground,
  ListView,
  RefreshControl,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import Api from "../config/api.js";
import LocalStorage from "../config/localStorage.js";
import { Toolbar } from "react-native-material-ui";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FluidNavigator, Transition } from "react-navigation-fluid-transitions";

export default class Three extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      refreshing: false,
      sleeping: false,
      data: [],
      slicedArray: [],
      fullArray: []
    };

    let api = Api.getInstance();
    api.callApi("getAllProjects", "POST", {}, response => {
      console.log(response["response"]);
      this.setState({
        data: response["response"],
        loading: false
      });
    });
  }

  render() {
    return (
      <View
        style={{ backgroundColor: "#e5e5e5", width: "100%", height: "100%" }}
      >
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement="Projecten"
        />
        <View>
          <FlatList
            numColumns={2}
            data={this.state.data}
            keyExtractor={item => item.title}
            initialNumToRender={2}
            // windowSize={2}
            // maxToRenderPerBatch={4}
            contentContainerStyle={{
              paddingTop: 10,
              paddingLeft: 5,
              paddingRight: 5,
              paddingBottom: 60,
              backgroundColor: "white"
            }}
            //style={{ marginBottom: 55 }}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <View style={styles.card} elevation={5}>
                  <TouchableHighlight
                    onPress={() => {
                      ls = LocalStorage.getInstance();
                      ls.saveProjectDetail(item);
                      this.props.navigation.navigate("ProjectDetail", {
                        title: item.title,
                        thumbnail: item.thumbnail,
                        likes: item.likes,
                        desc: item.desc
                      });
                    }}
                  >
                    <View>
                      <Transition shared={item.title}>
                        <Image
                          source={{ uri: item.thumbnail }}
                          resizeMode="cover"
                          style={{ width: "100%", height: 150 }}
                        />
                      </Transition>

                      <View
                        style={{
                          flexDirection: "column",
                          width: "100%",
                          height: 110,
                          backgroundColor: "white",
                          justifyContent: "flex-start"
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            paddingLeft: 15,
                            paddingRight: 15
                          }}
                        >
                          {
                            "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                          }
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            padding: 0,
                            paddingLeft: 15,
                            paddingRight: 15
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
                            color: "#e95827"
                          }}
                        >
                          By {item.creatorName}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 30,
                          backgroundColor: "#e95827",
                          margin: 5,
                          position: "absolute",
                          bottom: 5,
                          right: 5
                        }}
                        onPress={() => {
                          api = Api.getInstance();
                          ls = LocalStorage.getInstance();
                          userData = {
                            project: item.id,
                            user: 1,
                            deviceId: ls.getPlayerId()
                          };
                          api.callApi(
                            "addFollower",
                            "POST",
                            userData,
                            response => {}
                          );
                        }}
                      >
                        <Icon
                          size={15}
                          name={"heart-outline"}
                          style={{ color: "white", padding: 7.5 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 10
  },

  card: {
    color: "rgba(52, 52, 52, 1.0)",
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    //ios
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    //android
    elevation: 1
  }
});
