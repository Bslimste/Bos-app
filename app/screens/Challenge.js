import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Dimensions, Image } from "react-native";
import { Toolbar } from "react-native-material-ui";
import LocalStorage from "../config/localStorage.js";
import Api from "../config/api.js";
import { NavigationActions } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Exchange extends Component {
  constructor() {
    super();
    this.state = {}
    ls = LocalStorage.getInstance();
    api = Api.getInstance();
    api.callApi("getAllChallenges", "POST", {}, response => {
        array = response['response']
        for(let entry of array) {
            date = new Date(entry.deadLine)
            hours = date.getHours() - 1
            minutes = date.getMinutes()
            if(minutes < 10) {
                minutes = "0" + minutes
            }
            entry['deadLineDate'] = hours + ':' + minutes + " " + date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
            console.log(entry);
        }
        this.setState({"dataArray": array})
    });
  }

  render() {
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <Toolbar
              leftElement="menu"
              centerElement="Challenge"
              onLeftElementPress={() => this.props.navigation.toggleDrawer()}
            />
            <View style={styles.container}>
                <FlatList
                data={this.state.dataArray}
                keyExtractor={item => "" + item.id}
                numColumns={1}
                renderItem={ ({item}) => (
                            <TouchableHighlight
                                onPress={() =>
                                    this.props.navigation.navigate("ChallengeDetails",
                                            {
                                                contactInfo: item.contactInfo,
                                                createdAt: item.createdAt,
                                                deadLine: item.deadLine,
                                                deadLineDate: item.deadLineDate,
                                                description: item.description,
                                                id: item.id,
                                                organisation: item.organisation, 
                                                owner: item.owner,
                                                ownerId: item.ownerId,
                                                profilePhoto: item.profilePhoto,
                                                title: item.title
                                            }
                                        )
                                }
                            >
                                <View style={styles.cardContainer}>
                                    <Image
                                        source={{ uri: item.profilePhoto }}
                                        resizeMode="cover"
                                        style={{ width: 75, height: 75, borderRadius:180}}
                                    />
                                    <Text style={{ 
                                            fontWeight: "bold",
                                            fontSize: 18,
                                            color: "black",
                                            }}>
                                        {item.title}
                                    </Text>
                                    <Text style={{ 
                                            fontSize: 18,
                                            color: "black",
                                            }}>
                                        Deadline: {item.deadLineDate}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        )}
                />
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    width: Dimensions.get('window').width - 40,
    margin: 20,
    padding: 5
  }
});
