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
    this.state = {"dataArray": []}
    ls = LocalStorage.getInstance();
    api = Api.getInstance();
    api.callApi("getAllNecessityRequests", "POST", {}, response => {
        console.log(response['response'])
        this.setState({
            dataArray: response['response']
        });
    });
  }

  componentWillMount() {
    api = Api.getInstance();
    api.callApi("getAllNecessityRequests", "POST", {}, response => {
        this.setState({
            dataArray: response['response']
        });
    });
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          leftElement="menu"
          centerElement="Exchange"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
        />
        <View style={styles.container}>
          <FlatList
            data={this.state.dataArray}
            keyExtractor={item => "" + item.id}
            numColumns={1}
            renderItem={ ({item}) => (
                        <View style={styles.cardContainer}>
                            <Image
                                source={{ uri: item.profilePhoto }}
                                resizeMode="cover"
                                style={{ width: 50, height: 50, borderRadius:30, margin: 3 }}
                            />
                            <View style={{
                                    alignItems: 'flex-start',
                                    width: Dimensions.get("window").width - 110
                                }}>
                                <Text style={{ 
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    color: "black",
                                    }}>
                                    {item.title}
                                </Text>
                                <Text style={{ 
                                    fontSize: 13,
                                    color: "black",
                                    }}>
                                    {item.location}
                                </Text>
                            </View>
                            <TouchableHighlight
                                onPress={() =>
                                    this.props.navigation.navigate("RequestDetail",
                                            {
                                                id: item.id,
                                                owner: item.owner,
                                                ownerId: item.ownerId,
                                                location: item.location,
                                                profilePhoto: item.profilePhoto,
                                                title: item.title,
                                                description: item.description,
                                                necessity: item.necessity
                                            }
                                        )
                                }
                                style={{
                                    flex:1,
                                    alignItems: "flex-end",
                                    width: 30
                                }}
                            >
                            <Icon size={25} name={"arrow-right"} style={{ color: "grey" }} />
                            </TouchableHighlight>
                        </View> 
                )
            }
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
    alignItems: "center"
  },

  cardContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    shadowOffset: { width: 0, height: 13 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    padding: 5,
    width: Dimensions.get("window").width,
    height: 70,
    flex: 1,
    flexDirection: 'row'
  }
});
