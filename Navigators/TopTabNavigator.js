import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FinanceLoanScreen from '../Screens/FinanceLoanScreen';
import FinanceSavingsScreen from '../Screens/FinanceSavingsScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
   return (
      <SafeAreaView style={styles.container}>
         {/* Dynamic Header */}
         <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Finance </Text>
            <Text style={styles.headerText2}>from BlueRidge Microfinance Bank</Text>
         </View>

         <View style={styles.tabNavigatorContainer}>
            <Tab.Navigator
               screenOptions={{
                  tabBarActiveTintColor: 'black',
                  tabBarLabelStyle: { fontSize: 16 },
                  tabBarIndicatorStyle: {
                     backgroundColor: 'black',
                     width: 20,
                     marginHorizontal: 110,
                  },
                  tabBarStyle: { backgroundColor: '#fff' },
                  tabBarItemStyle: { width: 100, marginLeft: 70 },
               }}>
               <Tab.Screen name="Savings" component={FinanceSavingsScreen} />

               <Tab.Screen name="Loan" component={FinanceLoanScreen} />
            </Tab.Navigator>
         </View>
      </SafeAreaView>
   );
};

export default TopTabNavigator;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   headerContainer: {
      flexDirection: 'row',
   },
   headerText: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 20,
      marginLeft: 15,
   },
   headerText2: {
      marginTop: 20,
      marginLeft: 5,
      fontSize: 22,
      fontFamily: 'Inter-Black-Light',
   },
   tabNavigatorContainer: {
      flex: 1,
      marginTop: 5,
   },
});
