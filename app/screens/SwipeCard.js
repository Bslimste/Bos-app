"use strict";

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Api from "../config/api.js";

import SwipeCards from "../config/SwipeCardModule.js";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };

    this.animatedValue = new Animated.Value(0);
  }

  animate() {
    this.setState({
      detail: !this.state.detail
    });
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      extrapolate: "clamp"
    }).start();
  }

  animateRev() {
    this.setState({
      detail: !this.state.detail
    });
    this.animatedValue.setValue(1);
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      extrapolate: "clamp"
    }).start();
  }

  render() {
    const width = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [400, 50]
    });
    const height = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [600, 400, 200]
    });

    const top = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 15]
    });
    const left = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 15]
    });

    const borderRadius = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 50]
    });

    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: [0, 0, 1]
    });

    const opacityRev = this.animatedValue.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: [1, 1, 0]
    });
    return (
      <View style={styles.card}>
        <Animated.Image
          style={{
            height: height,
            width: "100%",
            resizeMode: "cover",
            justifyContent: "center",
            position: "absolute",
            zIndex: 2
          }}
          source={{ uri: this.props.thumbnail }}
        />
        <Animated.View
          style={{
            opacity: opacity,
            top: 10,
            left: 10,
            position: "absolute",
            zIndex: 3
          }}
        >
          <TouchableOpacity onPress={() => this.animateRev()}>
            <Icon
              name="close"
              color="white"
              size={30}
              style={{}}
              onPress={() => this.animateRev()}
            />
          </TouchableOpacity>
        </Animated.View>
        <View style={{ height: "100%", width: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              height: 450
            }}
          >
            <Animated.View
              style={{
                flexDirection: "column",
                padding: 15,
                marginTop: 200,

                opacity: opacity,
                zIndex: 1
              }}
            >
              <Text
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  fontSize: 24,
                  fontWeight: "bold"
                }}
                numberOfLines={1}
              >
                {this.props.title}
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: "bold"
                }}
              >
                By Davey Schippers
              </Text>
              <Text
                style={{
                  margin: 10
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                eleifend mauris ut sapien convallis, et aliquet libero gravida.
                Maecenas varius feugiat purus vitae porta. Vestibulum malesuada
                ultricies enim, vel elementum quam dictum ut. Nunc nec nisi
                pretium, cursus sem a, hendrerit ipsum. Curabitur dapibus lectus
                ut magna lacinia elementum. Fusce tempor, mi in sodales
                fermentum, sapien lacus iaculis turpis, in aliquet nisl ex vel
                lacus. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas.
              </Text>
            </Animated.View>
          </View>
          {!this.state.detail && (
            <LinearGradient
              colors={["#00000000", "#000000cc"]}
              style={{
                width: "100%",
                height: "15%",
                justifyContent: "flex-end",
                zIndex: 2
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View style={{ flexDirection: "column", width: "85%" }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      fontSize: 24,
                      fontWeight: "bold",
                      color: "white"
                    }}
                    numberOfLines={1}
                  >
                    {this.props.title}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      marginBottom: 10,
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    By Davey Schippers
                  </Text>
                </View>
                <Icon
                  name="information"
                  color="white"
                  size={30}
                  onPress={() => this.animate()}
                />
              </View>
            </LinearGradient>
          )}
        </View>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    );
  }
}

const cards = [
  {
    title: "cool project",
    image: "https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif"
  }
];

const cards2 = [
  {
    title: "cool project",
    image: "https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  },
  {
    title: "cool project",
    image: "https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif",
    location: "Groningen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum turpis ut iaculis. Suspendisse elit justo, commodo vel turpis eget, sodales placerat purus. Nulla hendrerit suscipit enim, ac eleifend neque lobortis vitae. "
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      likedCards: []
    };

    this.handleYup = this.handleYup.bind(this);

    let api = Api.getInstance();
    console.log(" hallo");
    api.callApi(
      "getAllProjects",
      "POST",
      {
        hello: "hello"
      },
      response => {
        console.log(response["response"]);
        this.setState({
          cards: response["response"],
          loading: false
        });
      }
    );
  }

  handleYup(card) {
    let data = {
      projectId: card.id,
      userId: 1
    };
    console.log(data);
    let api = Api.getInstance();
    api.callApi("addLike", "POST", data, response => {});
  }

  handleNope(card) {
    console.log("nope");
  }

  cardRemoved(index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3;

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(
        `There are only ${this.state.cards.length - index - 1} cards left.`
      );

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`);

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        });
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <SwipeCards
          cards={this.state.cards}
          loop={false}
          dragY={false}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          showYup={true}
          showNope={true}
          nopeText={"Nope!"}
          yupText={"Interessant!"}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          cardRemoved={this.cardRemoved.bind(this)}
        />
        <View style={{ flexDirection: "row", paddingBottom: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#f44336",
              borderRadius: 60,
              height: 60,
              width: 60
            }}
          >
            <Icon
              name="close"
              color="white"
              size={30}
              style={{ padding: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#03a9f4",
              borderRadius: 45,
              height: 45,
              width: 45,
              marginLeft: 25,
              marginTop: 10
            }}
          >
            <Icon
              name="message-text-outline"
              color="white"
              size={20}
              style={{ padding: 13 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#64dd17",
              borderRadius: 60,
              height: 60,
              width: 60,
              marginLeft: 25
            }}
          >
            <Icon
              name="heart-outline"
              color="white"
              size={30}
              style={{ padding: 15 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "grey",
    backgroundColor: "white",
    borderWidth: 1,
    elevation: 5,
    width: 360,
    marginTop: 10,
    height: "97%"
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  text: {
    fontSize: 25,
    fontWeight: "bold"
  },
  noMoreCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  linearGradient: {
    height: 75,
    marginTop: 225,
    justifyContent: "center",
    alignItems: "center"
  }
});
