import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

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
    return (
      <View style={{ flex: 1, paddingTop: 30, backgroundColor: "#2196f3" }}>
        <Drawer>
          <Drawer.Header>
            <Drawer.Header.Account
              avatar={<Avatar text="FL" />}
              style={{
                container: { backgroundColor: "#2196f3" }
              }}
              footer={{
                dense: true,
                centerElement: {
                  primaryText: "Firstname Lastname",
                  secondaryText: "mail@mail.nl"
                }
              }}
            />
          </Drawer.Header>
          <Drawer.Section
            divider
            items={[
              { icon: "bookmark-border", value: "Item 1", active: true },
              {
                icon: "today",
                value: "Chat",
                onPress: () => this.props.navigation.navigate("TwoStack")
              },
              { icon: "assignment", value: "Item 3" }
            ]}
          />
          <Drawer.Section
            title="Section"
            items={[
              {
                icon: "info",
                value: "Item 4"
              },
              {
                icon: "power-settings-new",
                value: "AR",
                onPress: () => this.props.navigation.navigate("FourStack")
              },
              {
                  icon: "power-settings-new",
                  value: "ProjectDetail",
                  onPress: () => this.props.navigation.navigate("ProjectDetailStack")
              },
              {
                icon: "account-circle",
                value: "Login",
                onPress: () => this.props.navigation.navigate("Login")
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
