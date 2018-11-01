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
import { Toolbar } from "react-native-material-ui";
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
    console.log(" hallo");
    api.callApi(
      "getAllProjects",
      "POST",
      {
        hello: "hello"
      },
      response => {
        console.log(response["response"]);
        this.setState({
          data: response["response"],
          loading: false
        });
      }
    );
  }

  render() {
    return (
      <View
        style={{ backgroundColor: "#e5e5e5", width: "100%", height: "100%" }}
      >
        <Toolbar centerElement="All projects" />
        <View>
          <FlatList
            numColumns={2}
            data={this.state.data}
            keyExtractor={item => item.title}
            initialNumToRender={2}
            // windowSize={2}
            // maxToRenderPerBatch={4}
            contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}
            style={{ paddingTop: 10, marginBottom: 55 }}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <View style={styles.card} elevation={5}>
                  <TouchableHighlight onPress={() => {}}>
                    <ImageBackground
                      source={{ uri: item.thumbnail }}
                      resizeMode="cover"
                      style={{ width: "100%", height: 250 }}
                    >
                      <View
                        style={{
                          height: "38%",
                          width: "100%",
                          backgroundColor: "#00000080",
                          position: "absolute",
                          bottom: 0,
                          borderRadius: 10
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "column",
                            margin: 20,
                            marginTop: 7,
                            marginBottom: 40
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "bold",
                              fontSize: 20,
                              color: "white"
                            }}
                          >
                            {item.title}
                          </Text>
                          <Text
                            style={{
                              fontWeight: "bold",
                              fontSize: 16,
                              color: "white"
                            }}
                          >
                            Likes: {item.likes}
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "row",
                            marginBottom: 10
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "bold",
                              fontSize: 15,
                              color: "#BDBDBD",
                              position: "absolute",
                              right: 10
                            }}
                          >
                            lees verder
                          </Text>
                        </View>
                      </View>
                    </ImageBackground>
                  </TouchableHighlight>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      position: "absolute",
                      bottom: 0,
                      left: 0
                    }}
                  />
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
    marginBottom: 15
  },

  card: {
    color: "rgba(52, 52, 52, 1.0)",
    margin: 10,
    marginBottom: 10,
    // android (Android +5.0)
    elevation: 3
  }
});
