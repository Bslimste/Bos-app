import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
import LocalStorage from "../config/localStorage.js";

import {
  COLOR,
  ThemeContext,
  getTheme,
  Toolbar,
  Card,
  Button,
  Drawer,
  Avatar
} from "react-native-material-ui";

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  };

  render() {
    const ls = LocalStorage.getInstance();
    let boolean = false;
    console.log(ls.getUserId());
    if (ls.getUserId() != "") {
      boolean = true;
    }
    const loggedIn = boolean;
    return (
      <View style={{ flex: 1, paddingTop: 30, backgroundColor: "#7ccad8" }}>
        <Drawer>
          <Drawer.Header>
            <Drawer.Header.Account
              avatar={
                <Avatar
                  image={
                    <Image
                      style={{ height: 80, width: 80, borderRadius: 180 }}
                      source={{
                        uri:
                          "http://gromdroid.nl/bslim/wp-content/uploads/2018/10/hoi-34.jpg"
                      }}
                    />
                  }
                />
              }
              style={{
                container: { backgroundColor: "#7ccad8" }
              }}
              footer={{
                dense: true,
                centerElement: {
                  primaryText: "Jelmer Haarman",
                  secondaryText: "jelmer.haarman@xs4all.nl"
                }
              }}
            />
          </Drawer.Header>
          <Drawer.Section
            divider
            items={[
              {
                icon: "person",
                value: "Mijn profiel",
                onPress: () => this.props.navigation.navigate("ProfileStack")
              },
              {
                icon: "folder",
                value: "Gevolgde Projecten"
              },
              {
                icon: "email",
                value: "Feedback"
              },
              {
                icon: "settings",
                value: "Instellingen"
              },
              {
                icon: "close",
                value: "Logout",
                onPress: () => this.props.navigation.navigate("LoginStack")
              }
            ]}
          />
        </Drawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerPadding: {
    paddingTop: 100
  }
});

export default SideMenu;
