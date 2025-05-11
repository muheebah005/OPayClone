import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import CardScreen from '../Screens/CardScreen';
import HomeScreen from '../Screens/HomeScreen';
import MeScreen from '../Screens/MeScreen';
import RewardScreen from '../Screens/RewardScreen';
import TopTabNavigator from './TopTabNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
   return (
      <Tab.Navigator
         screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: '#17B169',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: {
               fontSize: 10,
               fontWeight: 'light',
            },
            tabBarStyle: {
               height: 50,
            },
         }}>
         <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
               tabBarIcon: ({ focused }) => (
                  <Image
                     source={require('../assets/images/home.png')}
                     style={[styles.icon, { tintColor: focused ? '#17B169' : 'grey' }]}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="Reward"
            component={RewardScreen}
            options={{
               tabBarIcon: ({ focused }) => (
                  <Image
                     source={require('../assets/images/reward.png')}
                     style={[styles.icon, { tintColor: focused ? '#17B169' : 'grey' }]}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="Finance"
            component={TopTabNavigator}
            options={{
               tabBarIcon: ({ focused }) => (
                  <Image
                     source={require('../assets/images/finance.png')}
                     style={[styles.icon, { tintColor: focused ? '#17B169' : 'grey' }]}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="Card"
            component={CardScreen}
            options={{
               tabBarIcon: ({ focused }) => (
                  <Image
                     source={require('../assets/images/card.png')}
                     style={[styles.icon, { tintColor: focused ? '#17B169' : 'grey' }]}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="Me"
            component={MeScreen}
            options={{
               tabBarIcon: ({ focused }) => (
                  <Image
                     source={require('../assets/images/me.png')}
                     style={[styles.icon, { tintColor: focused ? '#17B169' : 'grey' }]}
                  />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
   icon: {
      width: 50,
      height: 50,
      fontWeight: 'bold',
   },
});
