import React, {useMemo, useEffect, useReducer, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../infrastructure/theme';

import Home from '../../screens/Home/Home.screen';
import Search from '../../screens/Search/Search';
import Playlist from '../../screens/Playlilst/Playlist';
import {colors} from '../theme/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const createScreenOptions = ({route}) => {
  const iconName = route.name;
  console.log(iconName);
  return {
 
    tabBarActiveBackgroundColor: "red",
    tabBarActiveTintColor: "blue",
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#e91e63',
          backgroundColor: 'red',
        }}
        initialRouteName="Home"
        // activeColor="red"
        // inactiveColor="red"
        // barStyle={{backgroundColor: 'blue'}}
        // activeBackgroundColor="green"
        // inactiveBackgroundColor="green"
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: colors.bg.dark,
            height: 90,
            borderRadius: 16,
            elevation: 2,
          },

          // tabBarStyle: {
          //   height: 90,
          //   paddingHorizontal: 5,
          //   paddingTop: 0,
          //   backgroundColor: 'red',
          //   position: 'absolute',
          //   borderTopWidth: 0,
          // },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Entypo
                name={'home'}
                size={30}
                color={focused ? colors.primary : colors.iconColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome
                name={'search'}
                size={30}
                color={focused ? colors.primary : colors.iconColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Playlist"
          component={Playlist}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name={'music-box-multiple'}
                size={30}
                color={focused ? colors.primary : colors.iconColor}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
