/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';


import Products from './src/Products'
import { TabNavigator } from 'react-navigation'
import Contact from './src/Contact'
export default class TabNavigation extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Products navigation={ navigation }/>
        );
    }
}


const SimpleApp =TabNavigator({
  Products :{ 
    screen: Products
  },
  Contact:{
    screen: Contact
  },
},{
  tabBarOptions: {
    activeTintColor:'#FFF',
  style: {
    backgroundColor: '#42a5f5'

  }
 }

});
SimpleApp.navigationOptions = {
  title: 'MY TITLE',
  header: {
    style: {
      backgroundColor: '#42a5f5',
    }
  },
};

AppRegistry.registerComponent('TabNavigation', () => SimpleApp);
