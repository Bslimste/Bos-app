import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Dimensions, Image } from "react-native";
import { Toolbar } from "react-native-material-ui";
import LocalStorage from "../config/localStorage.js";
import Api from "../config/api.js";
import { NavigationActions } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

export default class Exchange extends Component {
  constructor() {
    super();
    this.state = {
        index: 0,
        routes: [
            { key: 'asked', title: 'Asked' },
            { key: 'offered', title: 'Offered' },
        ],
    }
    ls = LocalStorage.getInstance();
    api = Api.getInstance();
    api.callApi("getAllNecessityRequests", "POST", {}, response => {
        completeArray = response['response'];
        offeredArray = [];
        askedArray = [];
        for(let index in completeArray){
            entry = completeArray[index];
            if(entry.offered) {
                offeredArray.push(entry)
            } else {
                askedArray.push(entry)
            }
        }
        this.setState({
            dataArrayOffered: offeredArray,
            dataArrayAsked: askedArray
        });
    });
  }

  render() {
    const OfferedRoute = () => (
  <View style={styles.container}>
          <FlatList
            data={this.state.dataArrayOffered}
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
                                                necessity: item.necessity,
                                                offered: item.offered,
                                                picture: item.picture
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
);
const AskedRoute = () => (
  <View style={styles.container}>
          <FlatList
            data={this.state.dataArrayAsked}
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
                                                necessity: item.necessity,
                                                offered: item.offered,
                                                picture: item.picture
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
        );
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          leftElement="menu"
          centerElement="Exchange"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
        />
        <TabView
            navigationState={this.state}
            renderScene={SceneMap({
                asked: AskedRoute,
                offered: OfferedRoute,
            })}
            onIndexChange={index => this.setState({ index })}
        />
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
