import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Toolbar } from "react-native-material-ui";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Two extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
                <Toolbar
                    leftElement="menu"
                    centerElement="Profile"
                    onLeftElementPress={() => this.props.navigation.toggleDrawer()}
                />
                <Image
                    style={{ height: 200, width: "100%" }}
                    source={{
                        uri:
                            "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg"
                    }}
                />

        <View
          style={{
            flexDirection: "column",
            height: 85,
            width: "100%",
            padding: 10,
            paddingLeft: 30,
            backgroundColor: "white",
            //ios
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              height: 0,
              width: 0
            },
            //android
            elevation: 1
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("TwoStack")}
            style={{
              width: 60,
              height: 60,
              borderRadius: 60,
              padding: 17,
              backgroundColor: "#7ccad8",
              position: "absolute",
              right: 20,
              top: -30,
              //ios
              shadowOpacity: 0.3,
              shadowRadius: 3,
              shadowOffset: {
                height: 0,
                width: 0
              },
              //android
              elevation: 1
            }}
          >
            <Icon size={25} name={"message"} style={{ color: "white" }} />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Bartel-Jaap de Wildt
          </Text>
          <Text style={{ fontSize: 16, color: "#e95827" }}>
            Docent Statistiek
          </Text>
          <Text style={{ fontSize: 14, color: "#e95827" }}>
            Paddepoel, Groningen
          </Text>
        </View>
        <View style={{ padding: 30 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, paddingBottom: 10 }}>
            Over mij
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempor eros eget nunc pellentesque rutrum. In vitae lectus eget sem
            luctus gravida eget et metus. Aliquam iaculis lacus turpis, eu
            suscipit odio pellentesque luctus. Morbi venenatis, arcu sed cursus
            sodales, neque dui pulvinar lectus, blandit pharetra turpis metus ac
            ante.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 55,
                  backgroundColor: "black"
                }}
              >
                <Icon
                  size={25}
                  name={"folder-multiple-image"}
                  style={{ color: "white", padding: 15 }}
                />
              </TouchableOpacity>
              <Text style={{ padding: 5 }}>Projecten</Text>
            </View>
            <Image
              source={require("../assets/Polygon.png")}
              style={{
                height: 15,
                width: 15,
                margin: 15,
                marginBottom: 50,
                marginLeft: 50,
                marginRight: 50
              }}
            />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 55,
                  backgroundColor: "black"
                }}
              >
                <Icon
                  size={25}
                  name={"magnify"}
                  style={{ color: "white", padding: 15 }}
                />
              </TouchableOpacity>
              <Text style={{ padding: 5 }}>Op zoek naar</Text>
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
        justifyContent: "center",
        alignItems: "center"
    }
});
