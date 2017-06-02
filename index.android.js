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
import Services from './src/Services'
export default class TabNavigation extends Component
{
    render()
    {
      const { navigation } =this.props;
      return (
        <Products navigation={ navigation }/>
      );
    }
}

const SimpleApp =TabNavigator({
  Products :{ screen: Products},
  Services:{screen: Services}
});
AppRegistry.registerComponent('TabNavigation', () => SimpleApp);