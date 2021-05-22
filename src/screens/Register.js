import React from 'react';
import {ActivityIndicator, Text, FlatList, View, Image, Dimensions, TextInput, Button , Alert} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


export default class Register extends React.Component{

  constructor(){
      super();
      this.state = {
              name: '',
              email: '',
              phone: '',
              password: ''
      }
  }
    submit()
    {
      try {
        console.log("rest call");

          console.log("making call");

        const Url='http://keita.co.in/sampleapi/register.php';
        const Data={
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password
        };
        const send_dat = JSON.stringify(Data);
        const othePram={
            headers:{
                "content-type":"application/json; charset=UTF-8"
            },
            body: send_dat,
            method: "Post"
        };
        fetch(Url, othePram)
        .then(data=>{return data.json()})
        .then(res=>{
          const { navigate } = this.props.navigation;
        Alert.alert(
            "Register Successfull","", [{
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                },
                { text: "OK", onPress: () => navigate('Login') }
            ]
        );
      })
        .catch(error=>console.log(error))
      } catch (e) {
        console.log(e)
      } finally {

      }

    }

    CheckBoxText() {
        this.setState({
            check: !this.state.check,
        })
    }


    validate=()=>{
      let nam = this.state.name;
      let mail = this.state.email;
      let num = this.state.phone;
      let paswd = this.state.password;
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let pass = /^[A-Za-z]\w{7,14}$/;
      let numb = /^\+?([0-9]{10})\)?$/
        if ((nam) === false){
            alert("Entered Name is Invalid")
            this.setState({name: nam})
            return false;
        }
        else if (reg.test(mail) === false) {

            alert("Entered Email is Invalid")
            this.setState({ email: mail })
            return false;

        }
        else if (numb.test(num) === false){
            alert("please fill phone")
            this.setState({ phone: num })
            return false;
        }
        else if (pass.test(paswd) === false) {
            alert("Invalid Password")
            this.setState({ password: paswd })
            return false;
        }else {
          this.setState({ name: nam })
          this.setState({ email: mail })
          this.setState({ phone: num })
          this.setState({ password: paswd })
          this.submit();
        }
    }


    render(){
        const {navigate} = this.props.navigation
        //const { date, isLoading } = this.state;
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                    <Image source ={require('../images/1.jpeg')} style={{width:"100%",height: "30%"}}/>
                            <Text style={{ fontSize:28, marginTop:20, alignSelf:"center" }}>Hello World</Text>
                                  <Text style={{ fontSize:28, alignSelf:"center" }}>Registeration</Text>
                                        <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal:30 }}>
                                              <View style={{ flex: 1, borderRadius:23 }}>
                                                    <Button style={{borderRadius: 25}} title="Log In" onPress={()=>navigate('Login')} />
                                              </View>
                                              <View style={{ flex: 1 }}>
                                                    <Button title="Sign Up" color="red" onPress={()=>navigate('Register')}/>
                                              </View>
                                        </View>
                                              <View style={{ flexDirection:"row", alignItems:"center", marginHorizontal:55, borderWidth:2, marginTop:15, paddingHorizontal:10, borderColor:"#00716F", borderRadius:23, paddingVertical:2 }}>
                                                    <Icon name="user" color="#00716F" size={24}/>
                                                          <TextInput placeholder="Name" style={{paddingHorizontal:10}} onChangeText={(name) => this.setState({name})}/>
                                              </View>
                                              <View style={{ flexDirection:"row", alignItems:"center", marginHorizontal:55, borderWidth:2, marginTop:10, paddingHorizontal:10, borderColor:"#00716F", borderRadius:23, paddingVertical:2}}>
                                                    <Icon name="mail" color="#00716F" size={24}/>
                                                          <TextInput placeholder="Email" style={{paddingHorizontal:10}} onChangeText={(email) => this.setState({email})}/>
                                              </View>
                                              <View style={{ flexDirection:"row", alignItems:"center", marginHorizontal:55, borderWidth:2, marginTop:15, paddingHorizontal:10, borderColor:"#00716F", borderRadius:23, paddingVertical:2 }}>
                                                    <Icon name="phone" color="#00716F" size={24}/>
                                                          <TextInput placeholder="Phone" style={{paddingHorizontal:10}} onChangeText={(phone) => this.setState({phone})}/>
                                              </View>
                                              <View style={{ flexDirection:"row", alignItems:"center", marginHorizontal:55, borderWidth:2, marginTop:15, paddingHorizontal:10, borderColor:"#00716F", borderRadius:23, paddingVertical:2}}>
                                                    <Icon name="lock" color="#00716F" size={24}/>
                                                          <TextInput placeholder="Password" style={{paddingHorizontal:10}} onChangeText={(password) => this.setState({password})}/>
                                              </View>
                      <Text onPress={()=> this.validate()} style={{alignSelf:"center", color:"#00716F", marginTop:5, paddingVertical:10}}> Submit</Text>
              </View>
        )
    }
  }
