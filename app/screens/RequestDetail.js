import React, { Component } from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { Toolbar } from "react-native-material-ui";
import LocalStorage from "../config/localStorage.js";
import Api from "../config/api.js";

export default class RequestDetail extends Component {
  constructor() {
    super();
    this.state = {}
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
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          leftElement="menu"
          centerElement="Exchange"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
        />
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={{
                        fontWeight: "bold",
                        fontSize: 25,
                        color: "black"
                }}>
                    {title}
                </Text>
                <Image
                    source={{ uri: profilePhoto }}
                    resizeMode="cover"
                    style={{ width: 75, height: 75, borderRadius:30}}
                />
                <View style={styles.descContainer}>
                    <Text>
                        {description}
                    </Text>
                    <View style={styles.necessityContainer}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 25,
                            color: "black"
                        }}>
                            Wat:
                        </Text>
                        <Text>
                            - {necessity}
                        </Text>
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
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 13 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    padding: 5,
    margin: 50,
    flex: 1,
    alignItems: "center",
  },
  descContainer: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    justifyContent: "flex-start"
  },
  necessityContainer: {
    marginTop: 50
  }
});