import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Carousel from "react-native-carousel-view";
import { Toolbar } from "react-native-material-ui";
import Detail from "./Detail.js";
import Updates from "./Updates.js";
import { DetailTab } from "../../config/router.js";
import { FluidNavigator, Transition } from "react-navigation-fluid-transitions";
import LocalStorage from "../../config/localStorage.js";
import { NavigationActions } from "react-navigation";

export default class ProjectDetail extends Component {
  constructor() {
    super();
    this.state = { bookmarked: "bookmark" };
  }

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam("title", "");
    const thumbnail = navigation.getParam("thumbnail", "");
    const likes = navigation.getParam("likes", "");
    const desc = navigation.getParam("desc", "");

    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          iconSet="MaterialCommunityIcons"
          leftElement={"arrow-left"}
          onLeftElementPress={() => this.props.navigation.goBack()}
          rightElement={this.state.bookmarked}
          onRightElementPress={() => {
            if (this.state.bookmarked == "bookmark") {
              this.setState({ bookmarked: "marker-check" });
            } else {
              this.setState({ bookmarked: "bookmark" });
            }
          }}
          centerElement="Project informatie"
          style={{ marginBottom: "60vh" }}
        />
        <View style={styles.container}>
          <View style={{ marginTop: 99 }}>
            <Transition shared={title}>
              <Carousel
                width={375}
                height={200}
                delay={3000}
                indicatorAtBottom={true}
                indicatorSize={10}
                indicatorColor="white"
              >
                <View style={styles.contentContainer}>
                  <Image
                    source={{
                      uri: thumbnail
                    }}
                    resizeMode="cover"
                    style={{ width: "100%", height: 200 }}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <Image
                    source={{
                      uri: thumbnail
                    }}
                    resizeMode="cover"
                    style={{ width: "100%", height: 200 }}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <Image
                    source={{
                      uri: thumbnail
                    }}
                    resizeMode="cover"
                    style={{ width: "100%", height: 200 }}
                  />
                </View>
              </Carousel>
            </Transition>

            <View style={{ width: window.innerWidth, height: "100%" }}>
              <DetailTab />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: "#CCC",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
