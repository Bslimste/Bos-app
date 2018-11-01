import React, {Component} from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import Carousel from 'react-native-carousel-view';
import { Toolbar } from "react-native-material-ui";
import Detail from './Detail.js';
import Updates from './Updates.js';
import {DetailTab} from '../../config/router.js'


export default class ProjectDetail extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={{width: "100%", height: "100%"}}>
                <Toolbar
                    leftElement="menu"
                    centerElement="Project detail"
                    onLeftElementPress={() => this.props.navigation.toggleDrawer()}
                    style={{marginBottom:'60vh'}}
                  />
                <View style={styles.container}>
                    <View style={{marginTop:99}}>
                    <Carousel
                        width={375}
                        height={200}
                        delay={3000}
                        indicatorAtBottom={true}
                        indicatorSize={20}
                        indicatorColor="black"

                        >
                        <View style={styles.contentContainer}>
                            <Image
                                source={{ uri: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/theroleofbod.jpg' }}
                                resizeMode="cover"
                                style={{ width: "100%", height: 200 }}
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <Image
                                source={{ uri: 'http://i.telegraph.co.uk/multimedia/archive/01604/scienceClass_1604229c.jpg' }}
                                resizeMode="cover"
                                style={{ width: "100%", height: 200 }}
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <Image
                                source={{ uri: 'http://www.gettingsmart.com/wp-content/uploads/2012/11/Classroom.jpg' }}
                                resizeMode="cover"
                                style={{ width: "100%", height: 200 }}
                            />
                        </View>
                    </Carousel>
                        <View style={{ width: window.innerWidth, height: '100%' }}>

                            <DetailTab/>
                        </View>
                    </View>
            </View>
            </View>
        );
     }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',


    },
    contentContainer: {
        borderWidth: 2,
        borderColor: '#CCC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});
