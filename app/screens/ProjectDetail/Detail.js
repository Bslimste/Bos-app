import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { height: 0};
    }

    render() {
        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
                <ScrollView>
                    <View
                        style={{
                            flexDirection: "column",
                            height: 60,
                            width: "100%",
                            padding: 10,
                            paddingLeft: 30
                        }}
                    >
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Bartel-Jaap</Text>
                        <Text style={{ fontSize: 16 }}>IT Profesional</Text>
                    </View>
                    <View style={{ width: "100%", flexDirection: "column" }}>
                        <View
                            style={{
                                height: 40,
                                width: "100%",
                                flexDirection: "row",
                                paddingTop: 20
                            }}
                        >
                            <Image
                                source={require("../../assets/Polygon.png")}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginLeft: 75,
                                    marginRight: 20
                                }}
                            />
                            <Text>Beschrijving</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View
                                style={{
                                    width: 2,
                                    height: this.state.height + 10,
                                    backgroundColor: "#cfd8dc",
                                    marginLeft: 80,
                                    marginTop: 10
                                 }}
                            />
                            <Text style={{ margin: 20, width: 250 }} onLayout={(event) => {
                                this.setState({height: event.nativeEvent.layout.height})
                              }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
                                lacinia nibh. Pellentesque faucibus ante sed enim fringilla,
                                accumsan malesuada elit mollis. Fusce posuere tincidunt quam sed
                                consequat. Phasellus eu erat eu turpis mattis aliquet nec non
                                ante.
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", flexDirection: "column", marginBottom: 20 }}>
                        <View
                            style={{
                                height: 40,
                                width: "100%",
                                flexDirection: "row",
                                paddingTop: 20
                            }}
                        >
                            <Image
                                source={require("../../assets/Polygon.png")}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginLeft: 75,
                                    marginRight: 20
                                }}
                            />
                            <Text>Benodigheden</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View
                                style={{
                                    width: 2,
                                    height: 75,
                                    backgroundColor: "#cfd8dc",
                                    marginLeft: 80,
                                    marginTop: 10
                                }}
                            />
                            <Text style={{ margin: 20, width: 250 }}>
                                {"\u2022" +
                                " Project 1 " +
                                "\n" +
                                "\u2022" +
                                " Project 2" +
                                "\n" +
                                "\u2022" +
                                " Project 3"}
                            </Text>
                        </View>
                    </View>
                </ScrollView>

            </View>
         );
    }
}