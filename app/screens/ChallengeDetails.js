import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { Toolbar } from "react-native-material-ui";
import LocalStorage from "../config/localStorage.js";
import Api from "../config/api.js";

export default class ChallengeDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { navigation } = this.props;
    const contactInfo = navigation.getParam("contactInfo", "");
    const createdAt = navigation.getParam("createdAt", "");
    const deadLine = navigation.getParam("deadLine", "");
    const deadLineDate = navigation.getParam("deadLineDate", "");
    const description = navigation.getParam("description", "");
    const id = navigation.getParam("id", "");
    const organisation = navigation.getParam("organisation", "");
    const owner = navigation.getParam("owner", "");
    const ownerId = navigation.getParam("ownerId", "");
    const profilePhoto = navigation.getParam("profilePhoto", "");
    const title = navigation.getParam("title", "");
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          iconSet="MaterialCommunityIcons"
          leftElement={"arrow-left"}
          onLeftElementPress={() => this.props.navigation.goBack()}
          centerElement="Exchange"
        />
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Image
                source={{ uri: profilePhoto }}
                resizeMode="cover"
                style={{ width: 75, height: 75, borderRadius: 30 }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  color: "black"
                }}
              >
                {title}
              </Text>
            </View>
            <ScrollView style={{ marginTop: 100 }}>
              <View style={styles.descContainer}>
                <Text>{description}</Text>
                <View style={styles.metaDataContainer}>
                  <View style={styles.metaDataContainer}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 25,
                        color: "black"
                      }}
                    >
                      Inleveren:
                    </Text>
                    <Text>Mail je antwoord naar {contactInfo}</Text>
                  </View>
                  <View style={styles.metaDataContainer}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 25,
                        color: "black"
                      }}
                    >
                      Deadline:
                    </Text>
                    <Text>Lever je antwoord in voor {deadLineDate}</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
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
    alignItems: "flex-start"
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
    alignItems: "flex-start"
  },
  descContainer: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    flex: 3,
    justifyContent: "flex-start"
  },
  metaDataContainer: {
    marginTop: 30
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "center",
    width: Dimensions.get("window").width
  }
});
