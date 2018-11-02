import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Toolbar } from "react-native-material-ui";
import {
  GiftedChat,
  Actions,
  Bubble,
  SystemMessage
} from "react-native-gifted-chat";
import Chatkit from "@pusher/chatkit";
import { NavigationActions } from "react-navigation";

let avatar =
  "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg";

const CHATKIT_TOKEN_PROVIDER_ENDPOINT =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/7a1cbaa3-f8be-4884-bcd4-105001f60c3f/token";
const CHATKIT_INSTANCE_LOCATOR = "v1:us1:7a1cbaa3-f8be-4884-bcd4-105001f60c3f";
const CHATKIT_ROOM_ID = "19372266";
const CHATKIT_USER_NAME = "bartel"; // Let's chat as "Dave" for this tutorial

export default class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    //this.onReceive = this.onReceive.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderFooter = this.renderFooter.bind(this);

    this._isAlright = null;
  }

  componentDidMount() {
    // This will create a `tokenProvider` object. This object will be later used to make a Chatkit Manager instance.
    const tokenProvider = new Chatkit.TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT
    });

    // This will instantiate a `chatManager` object. This object can be used to subscribe to any number of rooms and users and corresponding messages.
    // For the purpose of this example we will use single room-user pair.
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: CHATKIT_USER_NAME,
      tokenProvider: tokenProvider
    });
    // In order to subscribe to the messages this user is receiving in this room, we need to `connect()` the `chatManager` and have a hook on `onNewMessage`. There are several other hooks that you can use for various scenarios. A comprehensive list can be found [here](https://docs.pusher.com/chatkit/reference/javascript#connection-hooks).
    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser;
      console.log(currentUser);
      currentUser.subscribeToRoom({
        roomId: 19372266,
        hooks: {
          onMessage: message => console.log("YEAAAH")
        },
        messageLimit: 10
      });
    });
  }

  onSend([message]) {
    this.currentUser.sendMessage({
      text: message.text,
      roomId: CHATKIT_ROOM_ID
    });
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require("../config/messages.js")
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onSend(messages = []) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages)
      };
    });
    setTimeout(() => {
      this.onReceive(
        "Ja ik heb de arduino nog liggen, bel me anders vanavond maar even op 06-123456789"
      );
    }, 1000);
    // for demo purpose
  }

  onReceive(text) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar:
              "https://i1.rgstatic.net/ii/profile.image/302201988157445-1449061976298_Q512/Bas_Heijne.jpg"
          }
        })
      };
    });
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if (messages[0].image || messages[0].location || !this._isAlright) {
        this.setState(previousState => {
          return {
            typingText: "React Native is typing"
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        console.log(messages[0].text);
        console.log(messages[0].text.includes("project"));
        console.log(messages[0].text.includes("work"));
        if (messages.length > 0) {
          if (messages[0].text == "Hoi") {
            this.onReceive(
              "Ja ik heb de arduino nog liggen, bel me anders vanavond maar even op 06-123456789"
            );
          } else if (
            messages[0].text.includes("project") &&
            messages[0].text.includes("work")
          ) {
            this.onReceive("That's great, please contact me on 0612345678");
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive("Alright");
            }
          }
        }
      }

      this.setState(previousState => {
        return {
          typingText: null
        };
      });
    }, 1000);
  }

  /*
  onReceive(text) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: avatar
          }
        })
      };
    });
  }
*/
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#f0f0f0"
          }
        }}
      />
    );
  }

  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15
        }}
        textStyle={{
          fontSize: 14
        }}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: avatar }}
              style={{
                height: 35,
                width: 35,
                borderRadius: 35,
                margin: 10
              }}
            />
            <View
              style={{
                borderRadius: 15,
                backgroundColor: "#f0f0f0",
                marginRight: 60,
                height: 40,
                width: 60,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text>Typing</Text>
            </View>
          </View>
        </View>
      );
    }
  }
  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Toolbar
          leftElement="arrow-back"
          centerElement="Conversation"
          onLeftElementPress={() =>
            this.props.navigation.dispatch(NavigationActions.back())
          }
        />
        <GiftedChat
          onPressAvatar={() => this.props.navigation.navigate("Profile")}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: CHATKIT_USER_NAME
          }}
          renderBubble={this.renderBubble}
          renderSystemMessage={this.renderSystemMessage}
          renderFooter={this.renderFooter}
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
  }
});
