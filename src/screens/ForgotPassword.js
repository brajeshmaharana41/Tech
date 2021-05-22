import React, { useState } from "react";
import { Text, View, Image, TextInput, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';


export default class Login extends React.Component {
  constructor() {
      super();
      this.state = {
          check: false,
          email: '',
      };
      this.validates = this.validates.bind(this);
  }

  CheckBoxText() {
      this.setState({
          check: !this.state.check,
      })
  }


  validates = () => {
    const { navigate } = this.props.navigation;

      let mail = this.state.email;
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(mail) === false) {

          alert("Enter Email ID")
          this.setState({ email: mail })
          return false;
      }
      else {

          this.setState({ email: mail })
          //alert("LogIn Successfull");
          Alert.alert(
              "Alert Title",
              "My Alert Msg", [{
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                  },
                  { text: "OK",  onPress: () => navigate('ResetPassword') }
              ]
          );
      }
  }

    render() {
      const { navigate } = this.props.navigation;
        return (
          <View
          style = {{
            	       backgroundColor: "#FFF",
                     height: "100%"
                   }}
              >
              <Image source = { require('../images/1.jpeg') } style = {{ width: "100%", height: "30%" }}/>
                  <View style = {{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginHorizontal: 55,
                                    borderWidth: 2,
                                    marginTop: 10,
                                    paddingHorizontal: 10,
                                    borderColor: "#00716F",
                                    borderRadius: 23,
                                    paddingVertical: 2
                                    }}>
                       { /* <Icon name="mail" color="#00716F" size={24}/> */ }
                                <TextInput placeholder = "Username or Email" style = {{ paddingHorizontal: 10 }}
                                           onChangeText = {(text) => this.setState({ email: text })}
                                           type = 'email'
                                           value = { this.state.email }
                                           keyboardType = 'email-address'
                                           underlineColorAndroid = 'transparent'/>
                    </View>
                    <TouchableOpacity>
                            <View>
                                  <Text style = {{
                                            alignSelf: "center",
                                            color: "#00716F",
                                            marginTop: 5,
                                            paddingVertical: 10
                                        }}  onPress = {() => { this.validates(); }}> Submit
                                  </Text>
                            </View>
                    </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10
  },

  forgot: {
    fontSize: 13,
    color: "#00716F",
  },
})
