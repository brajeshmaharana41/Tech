import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default ResetPassword = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('http://keita.co.in/sampleapi/sample.php')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> :
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.status}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
        </View>
      )}
    </View>
  );
};


{/*import React, { useState } from "react";
import { Text, View, Image, TextInput, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';


export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            check: false,
            conformpassword: '',
            password: '',
        };
        this.validates = this.validates.bind(this);
    }

    CheckBoxText() {
        this.setState({
            check: !this.state.check,
        })
    }


    validates = () => {
        let cpaswd = this.state.conformpassword;
        let paswd = this.state.password;
        let pass = /^[A-Za-z]\w{7,14}$/
        let cpass = /^[A-Za-z]\w{7,14}$/
        if (pass.test(paswd) === false) {

            alert("Invalid password")
            this.setState({ conformpassword: paswd })
            return false;

        } else if (cpass.test(cpaswd) === false) {
            alert("Invalid conform Password")
            this.setState({ password: paswd })
            return false;
        }
        else if (paswd !== cpaswd ) {
            alert("Password Not Matched")
            return false;
          }
        else {
            this.setState({ email: mail })
            this.setState({ password: paswd })
            this.login();
            //alert("LogIn Successfull");
            Alert.alert(
                "Alert Title",
                "Password Changed Successfull", [{
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => navigate('success')  }
                ]
            );

            //  onPress={()=>navigate('Register')}
            //  render.navigate('Register');

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
              <Image source = { require('../images/1.jpeg') } style = {{ width: "100%", height: "40%" }}/>
                <Text style = {{ fontSize: 28, marginTop: 50, alignSelf: "center" }}></Text>
                <Text style = {{ fontSize: 28, marginTop: 30, alignSelf: "center" } } ></Text>

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
                       { /* <Icon name="mail" color="#00716F" size={24}/>
                                <TextInput placeholder = "Password" style = {{ paddingHorizontal: 10 }}
                                           onChangeText = {(password) => this.setState({password })}
                                           type = 'Password'
                                           value = { this.state.password }
                                           secureTextEntry
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
                                  <TextInput placeholder = " Conform Password" style = {{ paddingHorizontal: 10 }}
                                             onChangeText = {(conformpassword) => this.setState({ conformpassword })}
                                             value = { this.state.conformpassword }
                                             secureTextEntry/>
                    </View>
                    <TouchableOpacity onPress = {() => { this.validates(); }}>
                            <View>
                                  <Text style = {{
                                            alignSelf: "center",
                                            color: "#00716F",
                                            marginTop: 5,
                                            paddingVertical: 10
                                        }}> Login
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
*/}
