import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";
import Api from "../config/api.js";
import LocalStorage from "../config/localStorage.js";
import { Toolbar, Card } from "react-native-material-ui";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextField } from "react-native-material-textfield";
import { NavigationActions } from "react-navigation";

export default class Login extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.animatedValue1 = new Animated.Value(0);

    this.state = {
      email: "",
      password: "",
      login: true,
      register: false
    };
  }

  componentDidMount() {}

  animate() {
    this.setState({ login: false });
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      extrapolate: "clamp"
    }).start(() => this.animateOpacity());
  }

  animateOpacity() {
    this.animatedValue1.setValue(0);
    Animated.timing(this.animatedValue1, {
      toValue: 1,
      duration: 1,
      easing: Easing.linear,
      extrapolate: "clamp"
    }).start(() => this.setState({ register: true }));
  }

  animateRev() {
    this.animatedValue1.setValue(0);
    Animated.timing(this.animatedValue1, {
      toValue: 0,
      duration: 150,
      easing: Easing.linear,
      extrapolate: "clamp"
    }).start();
    this.setState({ register: false });
    this.animatedValue.setValue(1);
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      extrapolate: "clamp"
    }).start(() => this.setState({ login: true }));
  }

  login() {
    console.log("hallo");
    if (this.state.email != "" && this.state.password != "") {
      console.log("hier");
      let api = Api.getInstance();
      let userData = {
        email: this.state.email,
        password: this.state.password
      };
      api.callApi("login", "POST", userData, response => {
        console.log(response);
        if (response["response"].succes) {
          let ls = LocalStorage.getInstance();
          ls.saveUserId(response["response"].userId);
          //Redirect user to somewhere
          this.props.navigation.dispatch(NavigationActions.back());
        }
      });
    }
  }

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [0, -15, -250]
    });
    const marginTop = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [0, 0, -25]
    });
    const width = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [65, 65, 300]
    });
    const height = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [65, 65, 350]
    });
    const borderRadius = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [65, 10]
    });
    const opacity = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    const top = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [18, 18, 35]
    });
    const left = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [18, 18, 250]
    });
    const spin = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: ["0deg", "0deg", "45deg"]
    });
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <View style={styles.container}>
          <View style={styles.card} elevation={5}>
            <Animated.View
              style={{
                marginLeft,
                marginTop,
                position: "absolute",
                top: 25,
                left: 250,
                height,
                width,
                borderRadius,
                backgroundColor: "#2196f3",
                zIndex: 1
                //justifyContent: "flex-end",
                //alignItems: "flex-end"
              }}
            >
              <Animated.View
                style={{
                  position: "absolute",
                  top,
                  left,
                  zIndex: 2,
                  transform: [{ rotate: spin }]
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.login) {
                      this.animate();
                    } else {
                      this.animateRev();
                    }
                  }}
                >
                  <Icon size={30} name={"plus"} style={{ color: "white" }} />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{ opacity }}>
                <View style={styles.cardTitle}>
                  <View
                    style={{
                      height: "100%",
                      width: 5,
                      backgroundColor: "white"
                    }}
                  />
                  <Text
                    style={{
                      margin: 5,
                      marginLeft: 15,
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "white"
                    }}
                  >
                    REGISTER
                  </Text>
                </View>
                <View style={styles.cardBody}>
                  <TextField
                    label="Email"
                    value={this.state.email}
                    containerStyle={{ width: 250 }}
                    tintColor="white"
                    baseColor="white"
                    inputContainerPadding={0}
                    onChangeText={email => this.setState({ email })}
                  />
                  <TextField
                    label="Password"
                    value={this.state.password}
                    containerStyle={{ width: 250 }}
                    tintColor="white"
                    baseColor="white"
                    inputContainerPadding={0}
                    onChangeText={password => this.setState({ password })}
                  />
                  <TextField
                    label="Repeat Password"
                    value={this.state.password}
                    containerStyle={{ width: 250 }}
                    tintColor="white"
                    baseColor="white"
                    inputContainerPadding={0}
                    onChangeText={password => this.setState({ password })}
                  />
                  <TouchableOpacity
                    style={{
                      height: 50,
                      width: 250,
                      backgroundColor: "white",
                      marginTop: 20,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => {
                      if (this.state.login) {
                        this.animate();
                      } else {
                        this.animateRev();
                      }
                    }}
                  >
                    <Text style={{ color: "#2196f3" }}>NEXT</Text>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </Animated.View>
            <View style={styles.cardTitle}>
              <View
                style={{
                  height: "100%",
                  width: 5,
                  backgroundColor: "#2196f3"
                }}
              />
              <Text
                style={{
                  margin: 5,
                  marginLeft: 15,
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#2196f3"
                }}
              >
                LOGIN
              </Text>
            </View>
            <View style={styles.cardBody}>
              <TextField
                label="Email"
                value={this.state.email}
                containerStyle={{ width: 250 }}
                onChangeText={email => this.setState({ email })}
              />
              <TextField
                label="Password"
                value={this.state.password}
                secureTextEntry={true}
                containerStyle={{ width: 250 }}
                onChangeText={password => this.setState({ password })}
              />
              {this.state.email != "" &&
                this.state.password != "" && (
                  <TouchableOpacity
                    style={{
                      height: 50,
                      width: 200,
                      backgroundColor: "white",
                      borderWidth: 2,
                      borderColor: "#2196f3",
                      marginLeft: 25,
                      marginRight: 25,
                      marginTop: 20,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => this.login()}
                  >
                    <Text style={{ color: "#2196f3" }}>GO</Text>
                  </TouchableOpacity>
                )}
              {(this.state.email == "" || this.state.password == "") && (
                <TouchableOpacity
                  style={{
                    height: 50,
                    width: 200,
                    backgroundColor: "white",
                    borderWidth: 2,
                    borderColor: "#cfd8dc",
                    marginLeft: 25,
                    marginRight: 25,
                    marginTop: 20,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ color: "#cfd8dc" }}>GO</Text>
                </TouchableOpacity>
              )}
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 250
                }}
              >
                <Text
                  style={{
                    marginTop: 20,
                    marginBottom: 15,
                    color: "#cfd8dc"
                  }}
                >
                  Forgot your password?
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
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "white",
    height: 350,
    width: 300,
    margin: 10,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 13 },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    // android (Android +5.0)
    elevation: 3,
    zIndex: 0
  },
  cardRegister: {
    backgroundColor: "#2196f3",
    height: "48%",
    width: "75%",
    margin: 10,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 13 },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    // android (Android +5.0)
    elevation: 3,
    zIndex: 0
  },
  cardTitle: {
    flexDirection: "row",
    marginTop: 35,
    zIndex: 0
  },
  cardTitleRegister: {
    flexDirection: "row",
    marginTop: 35,
    zIndex: 0
  },
  cardBody: {
    flexDirection: "column",
    marginTop: 0,
    marginLeft: 25,
    zIndex: 0
  },
  fab: {
    position: "absolute",
    top: 25,
    left: 250,
    height: 65,
    width: 65,
    borderRadius: 65,
    backgroundColor: "#2196f3",
    zIndex: 1
  },
  fabRegister: {
    position: "absolute",
    top: 25,
    left: -30,
    height: 65,
    width: 65,
    borderRadius: 65,
    backgroundColor: "white",
    zIndex: 1
  }
});
