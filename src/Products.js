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
	instructions:{
		textAlign:'center',
		color:'#333333',
		marginBottom:5,
	},
});
const Products =(props) => {
	const { navigate } = props.navigation;
	return (
		<View style={styles.container}>
		<Text style={styles.welcome}>
		NFN Labs Products
		</Text>

		
		</View>
		);

}
Products.navigationsOptions = {
	title : 'Products',
};
export default Products