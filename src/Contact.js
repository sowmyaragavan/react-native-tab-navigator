import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Picker,
    Alert,
    Image,
    View
} from 'react-native';
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',

        backgroundColor: '#FFF',

    },
    contact: {
        width: 400,
        height: 100,
        marginTop: 14,


    },
    btnRegister: {
        margin: 30,
        padding: 20,


    },
    tInRegister: {
        fontSize: 16,
        marginLeft: 16,
        marginRight: 16,
    },
    textStyle: {
        fontSize: 14,
        marginLeft: 16,

    },
    picker: {
        marginLeft: 16,
        marginRight: 16,
    }


});


class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = { name: '', email: '', mobile: '', descripton: '' }


    }
    onRegisterPress() {
        Alert.alert("Profile has been Registered");
    }
    render() {

        return (

            <View style={styles.container}>
            <View style={styles.contact}>

      <Text style={styles.textStyle}> Name </Text>
        <TextInput style={styles.tInRegister} onChangeText={(text)=> this.setState({name: text})} />

        <Text style={styles.textStyle}> Email </Text>
        <TextInput
        style={styles.tInRegister}
        onChangeText={(text)=> this.setState({email: text})} />

        <Text style={styles.textStyle}> Mobile </Text>
        <TextInput
         style={styles.tInRegister}
         onChangeText={(text)=> this.setState({mobile: text})} />

         <Text style={styles.textStyle}> Project Type </Text>  

          <Picker style={styles.picker}selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "IOS" value = "ios" />
               <Picker.Item label = "Android" value = "android" />
               <Picker.Item label = "Web" value = "web" />
          </Picker>

          <Text style={styles.textStyle}> Project Description </Text>  
          <TextInput style={styles.tInRegister}
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => this.setState({description:text})}/>

       
            <Button style={styles.btnRegister}
         onPress={this.onRegisterPress}
         title="Register"
         color = '#42a5f5'/>
   
     
    </View>
</View>


        );
    }
}
Contact.navigationOptions = {
    title: 'Contact'
};
export default Contact
