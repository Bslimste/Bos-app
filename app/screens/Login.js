import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import Api from '../config/api.js';

import {
  COLOR,
  ThemeContext,
  getTheme,
  Toolbar,
  Card,
  Button
} from "react-native-material-ui";
import LocalStorage from "../config/localStorage.js";

const uiTheme = {
  palette: {
	primaryColor: "#3bb222"
  },
  toolbar: {
	container: {
	  height: 60
	}
  }
};

class LoginScreen extends Component {
  constructor() {
	super();
	this.state = {
	  email: "jelmer.haarman@xs4all.nl",
	  password: "1234",
	  succesfull: false
	};
  }


  login() {
  	if(this.state.email != "" && this.state.password != "") {
  		let api = Api.getInstance()
  		let userData = {
  			email: this.state.email,
  			password: this.state.password
  		}
  		api.callApi("login", "POST", userData, response => {
  			let ls = LocalStorage.getInstance()
  			ls.saveUserId(response['response'].userId)
  		})
  	}
  }

  render() {
	return (
		<View style={styles.container}>
		  <View style={styles.card} elevation={5}>
			<Text style={{margin: 15, fontWeight: 'bold', fontSize: 14, color: 'white'}}>
			Inloggen
			</Text>
			<View style={{backgroundColor: 'white', paddingLeft: 15, paddingRight: 15, paddingBottom: 15, paddingTop: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,}}>
			<TextField
			  textColor='blue'
			  tintColor='blue'
			  baseColor='blue'
			  label='Email adres'
			  autoCapitalize = 'none'
			  value={this.state.email}
			  onChangeText={ (email) => this.setState({ email }) }
			/>
			<TextField
			  textColor='blue'
			  tintColor='blue'
			  baseColor='blue'
			  label='Wachtwoord'
			  secureTextEntry={true}
			  value={this.state.password}
			  onChangeText={ (password) => this.setState({ password }) }
			/>
			<Button
			  raised text="Doorgaan"
			  onPress={() => this.login()}
			/>
			<Button
			  raised text="Nog geen account? Registreer nu!"
			/>
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
  },
card: {
 	backgroundColor: 'blue',
 	height: 270,
 	margin: 10,
 	borderRadius: 10,
 	shadowOffset: {width: 0, height: 13},
	shadowOpacity: 0.3,
	shadowRadius: 6,
	elevation: 3
  },
  loginButton: {
	margin: 5,
	backgroundColor: "#FF6700",
	padding: 10,
	borderRadius: 10,
	overflow: "hidden"
  },
  loginButtonText: {
	textAlign: "center",
	fontSize: 16,
	color: "white"
  }
});

export default LoginScreen;
