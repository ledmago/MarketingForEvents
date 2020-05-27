import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Anasayfa from '../screens/AnaSayfa';
import Etkinlikler from '../screens/Etkinlikler';
import iletisim from '../screens/iletisim';
import Clublar from '../screens/Clublar';
import Casinolar from '../screens/Casinolar';
import Hotels from '../screens/Hotels';
import Restaurants from '../screens/Restaurants';
import Dormitory from '../screens/Dormitory';
import Login from '../screens/Login';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: Anasayfa,
    Etkinlik: Etkinlikler,
    iletisimsayfa: iletisim,
    ClubSayfa: Clublar,
    CasinoSayfa: Casinolar,
    RestaurantsSayfa: Restaurants,
    DormitorySayfa: Dormitory,
    HotelSayfa:Hotels,
    LoginSayfa:Login,
  },

);

HomeStack.navigationOptions = {

};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createSwitchNavigator({
  HomeStack,
});

tabNavigator.path = '';

export default tabNavigator;
