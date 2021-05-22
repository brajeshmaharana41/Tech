import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails:this.props.navigation.state.params.userData.user_details[0],
      tableTitle: ['Email', 'Name', 'Phone',],
      tableData: [
        [this.props.navigation.state.params.userData.user_details[0].email],
        [this.props.navigation.state.params.userData.user_details[0].name],
        [this.props.navigation.state.params.userData.user_details[0].phone]
      ]
    }
  }

  render() {
    console.log(this.props.navigation.state.params.userData.user_details[0])
    const {navigate} = this.props.navigation

    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=>navigate('Login')}
          style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' ,
  justifyContent: 'center',
  marginHorizontal:30, },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' },

    appButtonContainer: {
      marginHorizontal:55,
      alignItems:"center",
      justifyContent:"center",
      marginTop:5,
      backgroundColor:"#00716F",
      paddingVertical:10,
      borderRadius:23
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});



// import React from 'react';
// import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { Form, InputText } from 'validate-form-in-expo-style';
// import { FontAwesome, Feather } from "@expo/vector-icons";


// export default class success extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//             name: '',
//             email: '',
//             phone: ''
//     }
// }
//   render(){
//     const {navigate} = this.props.navigation
//           return (
//               <ScrollView>
//                 <View style={[styles.container, {marginTop: 50}]}>

//                     <View style={styles.action} >
//                         <Form ref="form">
//                         <InputText
//                                 name="email"
//                                 label="email"
//                                 value={this.state.email}
//                                 placeholder="Email ID"
//                                 onChangeText={(email) => this.setState({email})}
//                                 leftIcon={<FontAwesome name="inbox" color="#0A3055" size={20} />}
//                                 invalidIcon={< Feather
//                                     name="alert-circle"
//                                     color="red"
//                                     size={20}
//                                 />}
//                                 validIcon={<Feather name="check-circle" color="green" size={20} />}
//                             />
//                             <InputText
//                                 name="name"
//                                 label="name"
//                                 value={this.state.name}
//                                 placeholder="Name"
//                                 onChangeText={(name) => this.setState({name})}
//                                 leftIcon={<FontAwesome name="user-o" color="#0A3055" size={20} />}
//                                 invalidIcon={< Feather
//                                     name="alert-circle"
//                                     color="red"
//                                     size={20}
//                                 />}
//                                 validIcon={<Feather name="check-circle" color="green" size={20} />}
//                             />
//                             <InputText
//                                 name="phone"
//                                 label="phone"
//                                 value={this.state.phone}
//                                 placeholder="phone"
//                                 leftIcon={<FontAwesome name="phone" color="#0A3055" size={20} />}
//                                 onChange={this.handlePassword}
//                                 onChangeText={(phone) => this.setState({password})}
//                                 invalidIcon={< Feather
//                                     name="alert-circle"
//                                     color="red"
//                                     size={20}
//                                 />}
//                             />
//                             <TouchableOpacity
//                                 activeOpacity={0.8}
//                                 onPress={()=>navigate('Login')}
//                                 style={styles.appButtonContainer}>
//                                 <Text style={styles.appButtonText}>Sign out</Text>
//                             </TouchableOpacity>
//                         </Form>
//                     </View>
//                 </View>
//             </ScrollView>
//         );
//       }
//   }
//   const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     action: {
//         width: Dimensions.get('window').width,
//         padding: 20
//     },
//     appButtonContainer: {
//         elevation: 8,
//         backgroundColor: "#009688",
//         borderRadius: 10,
//         paddingVertical: 10,
//         paddingHorizontal: 12,
//         marginTop: 10
//     },
//     appButtonText: {
//         fontSize: 18,
//         color: "#fff",
//         fontWeight: "bold",
//         alignSelf: "center",
//         textTransform: "uppercase"
//     }
// });
