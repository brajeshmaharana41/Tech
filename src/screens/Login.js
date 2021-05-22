import React, { useState } from "react";
import { Text, View, Image, TextInput, Button, TouchableOpacity, Alert, StyleSheet, ActivityIndicator, FlatList,  } from 'react-native';


export default class Login extends React.Component {


      constructor() {
          super();
          this.state = {
              check: false,
              email: '',
              password: '',
              //data: [],
              //isLoading: true
          };
          this.validates = this.validates.bind(this);
      }

    login() {
        console.log("rest call");

        console.log("making call");

        const Url = 'http://keita.co.in/sampleapi/login.php';
        const Data = {
            email: this.state.email,
            password: this.state.password,
        };
        const send_dat = JSON.stringify(Data);
        const othePram = {
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            body: send_dat,
            method: "Post"
        };
        fetch(Url, othePram)
        //.then((response) => response.json())
        //.then((json) => {
        //  this.setState({ data: json.user_details });
        //})
        //.catch((error) => console.error(error))
        //.finally(() => {
        //  this.setState({ isLoading: false });
        //});
            .then(data => { return data.json() })
            .then(res=>{

              const { navigate } = this.props.navigation;
            Alert.alert(
                "Login Successfull","" [{
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => navigate('success') }
                ]
            );
            navigate('success',{userData:res})
              //const { navigate } = this.props.navigation;
              //navigate('success',{userData:res})
            })
            .catch(error=>console.log(error))
    }


    CheckBoxText() {
        this.setState({
            check: !this.state.check,
        })
    }


    validates = () => {
        let mail = this.state.email;
        let paswd = this.state.password;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let pass = /^[A-Za-z]\w{7,14}$/
        if (reg.test(mail) === false) {

            alert("Invalid email")
            this.setState({ email: mail })
            return false;

        } else if (pass.test(paswd) === false) {
            alert("Invalid Password")
            this.setState({ password: paswd })
            return false;
        } else {

            this.setState({ email: mail })
            this.setState({ password: paswd })
            this.login();
            //alert("LogIn Successfull");


            //  onPress={()=>navigate('Register')}
            //  render.navigate('Register');

        }
    }



    render() {
      const { navigate } = this.props.navigation;
      const { data, isLoading } = this.state;

        return (
          <View
          style = {{
            	       backgroundColor: "#FFF",
                     height: "100%"
                   }}
              >
              <Image source = { require('../images/1.jpeg') } style = {{ width: "100%", height: "30%" }}/>
                <Text style = {{ fontSize: 28, marginTop: 50, alignSelf: "center" }}> Hello World </Text>

                    <View style = {{
                          flex: 0,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginHorizontal: 30,
                          borderRadius: 23
                        }}>
                        <View style = {{flex: 1}}>
                          <Button title = "Log In"  onPress = {() => { this.validates(); }}/>
                        </View>
                        <View style = {{flex: 1}}>
                              <Button title = "Sign Up" color = "red" onPress = {() => navigate('Register')}/>
                        </View>
                    </View>
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
                    <View style = {{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginHorizontal: 55,
                                    borderWidth: 2,
                                    marginTop: 15,
                                    paddingHorizontal: 10,
                                    borderColor: "#00716F",
                                    borderRadius: 23,
                                    paddingVertical: 2
                                  }}>

                                  <TextInput placeholder = "Password" style = {{ paddingHorizontal: 10 }}
                                             onChangeText = {(password) => this.setState({ password })}
                                             value = { this.state.password }/>
                    </View>
                    <View style={styles.forgotPassword}>
                          <TouchableOpacity onPress = {() => navigate('ForgotPassword')}>
                              <Text style={styles.forgot}>Forgot your password?</Text>
                          </TouchableOpacity>
                    </View>
          </View>
        );
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
