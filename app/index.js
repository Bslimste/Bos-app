import React, { Component } from "react";
import { MyApp } from "./config/router";
import {
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  SafeAreaView
} from "react-native";
import { COLOR, ThemeContext, getTheme } from "react-native-material-ui";
import { Header } from "react-navigation";
import OneSignal from "react-native-onesignal";
import LocalStorage from "./config/localStorage.js";
import Api from "./config/api.js";
// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: "white",
    primaryTextColor: "black",
    secondaryTextColor: "black",
    alternateTextColor: "black"
  },
  toolbar: {
    container: {
      height: Header.HEIGHT
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {};
    console.disableYellowBox = true;
  }

  componentWillMount() {
    OneSignal.init("40e57605-3c79-454d-a577-c07aea4a7991");
    OneSignal.configure();
    OneSignal.addEventListener("ids", this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener("ids", this.onIds);
  }

  onIds(device) {
    ls = LocalStorage.getInstance();
    ls.savePlayerId(device.userId);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#E9552F" barStyle="light-content" />
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <MyApp />
        </ThemeContext.Provider>
      </SafeAreaView>
    );
  }
}

export default App;
