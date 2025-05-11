import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PhysicalCardScreen from './PhysicalCardScreen';
import VirtualCardScreen from './VirtualCardScreen';

const Tab = createMaterialTopTabNavigator();

const CardScreen = () => {
   const [accepted, setAccepted] = useState(false);
   const [showMessage, setShowMessage] = useState(false);

   const toggleSwitch = () => {
      setAccepted(!accepted);
      if (showMessage) setShowMessage(false);
   };

   const handleGetItNow = () => {
      if (!accepted) {
         setShowMessage(true);
      } else {
         setShowMessage(false);
      }
   };

   return (
      <View style={styles.screenContainer}>
         <View style={styles.header}>
            <Text style={styles.headerTitle}>OPay Cards</Text>
            <TouchableOpacity>
               <Text style={styles.headerText}>Q&A</Text>
            </TouchableOpacity>
         </View>

         <View style={styles.tabContainer}>
            <Tab.Navigator
               screenOptions={{
                  tabBarActiveTintColor: 'black',
                  tabBarInactiveTintColor: 'grey',
                  tabBarLabelStyle: {
                     fontSize: 20,
                     fontWeight: 'light',
                  },
                  tabBarIndicatorStyle: {
                     backgroundColor: 'black',
                     width: 30,
                     marginLeft: 64,
                  },
                  tabBarStyle: {
                     backgroundColor: '#F5F5F5',
                  },
               }}>
               <Tab.Screen name="Virtual Card" component={VirtualCardScreen} />
               <Tab.Screen name="Physical Card" component={PhysicalCardScreen} />
            </Tab.Navigator>
         </View>

         <View style={styles.termsContainer}>
            {showMessage && (
               <View style={styles.messageContainer}>
                  <Text style={styles.messageText}>Please check the Terms & Conditions First</Text>
               </View>
            )}
            <View style={styles.checkBoxContainer}>
               <Checkbox
                  value={accepted}
                  onValueChange={toggleSwitch}
                  style={styles.checkbox}
                  color={accepted ? '#00C49A' : undefined}
               />
               <Text style={styles.termsText}>
                  Click the button below to accept{' '}
                  <Text style={styles.highlight}>Terms & Conditions</Text>
               </Text>
            </View>

            <TouchableOpacity onPress={handleGetItNow} style={styles.getItNowButton}>
               <Text style={styles.getItNowText}>Get It Now</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default CardScreen;

const styles = StyleSheet.create({
   screenContainer: {
      flex: 1,
      backgroundColor: '#F5F5F5',
   },
   header: {
      marginTop: 30,
      flexDirection: 'row',
   },
   headerTitle: {
      fontSize: 26,
      fontWeight: 'condensedBold',
      marginLeft: 15,
   },
   headerText: {
      marginLeft: 230,
      fontSize: 18,
      marginTop: 5,
      color: '#17B169',
   },
   tabContainer: {
      flex: 1,
      marginTop: 30,
   },
   termsContainer: {
      marginTop: 10,
      width: '90%',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      marginLeft: 18,
   },
   messageContainer: {
      backgroundColor: '#E0F2E9',
      padding: 10,
      marginBottom: 5,
      borderRadius: 8,
   },
   messageText: {
      color: '#00B156',
      textAlign: 'center',
   },
   checkBoxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
   },
   termsText: {
      marginLeft: 10,
      fontSize: 16,
   },
   getItNowButton: {
      marginTop: 20,
      backgroundColor: '#17B169',
      paddingVertical: 16,
      paddingHorizontal: 120,
      borderRadius: 30,
   },
   getItNowText: {
      color: '#fff',
      fontSize: 20,
   },
   checkbox: {
      width: 15,
      height: 15,
      marginLeft: 10,
      marginBottom: 13,
   },
});
