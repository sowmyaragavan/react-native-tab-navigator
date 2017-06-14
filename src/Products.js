import React from 'react';
import {
    AppRegistry,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    Image,
    StatusBar,
    View
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,


        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        margin: 5,

    },
   
    products: {

        fontSize: 20,
        margin:5,

    },
    im_team: {
        width: 100,
        height: 100,
        margin: 5,
        marginTop: 10,
    },
    scroll: {
        flex: 1,
        width: 100,
    }
});
const Products = (props) => {
    const { navigate } = props.navigation;
    return (
        <View style={styles.container}>
        <StatusBar
         backgroundColor="#42a5f5"
         barStyle="light-content"/>
        <ScrollView style={styles.scroll}>

         
        <Image style={styles.im_team}
          source={{uri: 'https://lh6.ggpht.com/mttyXzFAeOUa54HHwH20Fxgf-4c2rg0xjRFuhvmQb5oKX32-G_iZH68URsO2lFgRD-M=w300'}} />
        <Text style={styles.products}> Panchangam </Text>

        <Image style={styles.im_team}
         source={{uri: 'https://lh3.googleusercontent.com/aaRj2teNjiiSUMgIm1G3yKy36YWD6FPurOJoVXfWeX3pXdc3EV3PO2Tc4nF-tmgTFSk=w300'}} />
        <Text style={styles.products}> Expns</Text>

        <Image style={styles.im_team}
         source={{uri: 'https://lh3.googleusercontent.com/l970xtaRR7YVgHCWtwrgHIydTPqTZDqaQNWvxC8WKltyfyxHKBNdoHKFGKkEeF0icos_=w300'}} />
         <Text style={styles.products}> Buy Sell Tickets</Text>

        <Image style={styles.im_team}
         source={{uri: 'https://lh3.googleusercontent.com/KzqrcOw-tvlcJwapRwo1vcVx-n_uzTnYg3x9jR87jD2_Yu46E4xIdrVK6ZQkv2CxZA=w300'}} />
         <Text style={styles.products}> Vookmark </Text>

        <Image style={styles.im_team}
         source={{uri: 'https://lh3.googleusercontent.com/Hbp3te_OSBCZ1vITKIhrYa6SXm6Yj2aQN-cqE-JYObfPqDoxTNcilE-tMMAbssEP2Bg=w300'}} />
        <Text style={styles.products}> IPanchangam</Text>

        <Image style={styles.im_team}
         source={{uri: 'https://lh6.ggpht.com/mttyXzFAeOUa54HHwH20Fxgf-4c2rg0xjRFuhvmQb5oKX32-G_iZH68URsO2lFgRD-M=w300'}} />
        <Text style={styles.products}>Bill Check</Text>

        <Image style={styles.im_team}
         source={{uri: 'https://lh3.googleusercontent.com/6_zv-RRCoxr6gQaqqRINoMV1cWy8LhFq5lRiOJESxDOIkUGbwwkBGj4hZvezLtwDMgZn=w300'}} />
        <Text style={styles.products}>Storm it</Text>
      



        </ScrollView>

        </View>

    );


}
Products.navigationsOptions = {
    title: 'Products',
};
export default Products
