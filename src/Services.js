import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  StyleSheet,
  Image,View
} from 'react-native';
const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent :'center',
		alignItems : 'center',
		backgroundColor :'#FFF',

	},
	welcome:{
		fontSize:20,
		textAlign :'center',
		margin:10,
	},
	
});
const Services = () => {
	return (
		<View style ={styles.container}>
		<Text style={styles.welcome}>
		NFN Labs Services
		</Text>
		</View>

		);
}
Services.navigationOptions = {
title :'Services'
};
export default Services