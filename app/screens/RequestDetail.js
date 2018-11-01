import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions} from "react-native";
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
    const offered = navigation.getParam("offered", "");
    console.log(offered);
    const picture = navigation.getParam("picture", "");
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          leftElement="menu"
          centerElement="Exchange"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
        />
        <View style={styles.container}>
        { offered && 
                    <Image
                        source={{ uri: picture }}
                        resizeMode="cover"
                        style={{ width: Dimensions.get("window").width, height: 175}}
                    />
                }
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <Image
                        source={{ uri: profilePhoto }}
                        resizeMode="cover"
                        style={{ width: 75, height: 75, borderRadius:30}}
                    />
                    <Text style={{
                            fontWeight: "bold",
                            fontSize: 25,
                            color: "black"
                    }}>
                        {title}
                    </Text>
                </View>
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
    alignItems: "flex-start",
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
    flex: 1,
    alignItems: "flex-start",
  },
  descContainer: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    flex: 3,
    justifyContent: "flex-start"
  },
  necessityContainer: {
    marginTop: 50
  },
  cardHeader: {
    flex:1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "center",
    width: Dimensions.get("window").width
  }
});