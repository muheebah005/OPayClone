import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import AddMoneyScreen from '../Screens/AddMoneyScreen';
import AirtimeScreen from '../Screens/AirtimeScreen';
import AvailableBalanceScreen from '../Screens/AvailableBalanceScreen';
import BettingScreen from '../Screens/BettingScreen';
import CustomerService from '../Screens/CustomerService';
import DataScreen from '../Screens/DataScreen';
import LoanScreen from '../Screens/LoanScreen';
import MessageScreen from '../Screens/MessageScreen';
import MoreScreen from '../Screens/MoreScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import OnBoardScreen from '../Screens/OnBoardScreen';
import Play4aChild from '../Screens/Play4aChild';
import ProfileScreen from '../Screens/ProfileScreen';
import SafeboxScreen from '../Screens/SafeboxScreen';
import ScanScreen from '../Screens/ScanScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import TransactionScreen from '../Screens/TransactionScreen';
import TransferToBank from '../Screens/TransferToBank';
import TransferToOPay from '../Screens/TransferToOPay';
import TvScreen from '../Screens/TvScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import WithdrawScreen from '../Screens/WithdrawScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
         <Stack.Screen name="onboard" component={OnBoardScreen} options={{ headerShown: false }} />
         <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }} />
         <Stack.Screen name="signIn" component={SignInScreen} options={{ headerShown: false }} />
         <Stack.Screen
            name="customerService"
            component={CustomerService}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="BottomTab"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="notification"
            component={NotificationScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }} />
         <Stack.Screen name="scan" component={ScanScreen} options={{ headerShown: false }} />
         <Stack.Screen
            name="transactions"
            component={TransactionScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="addMoney"
            component={AddMoneyScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="availableBalance"
            component={AvailableBalanceScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="transferToOPay"
            component={TransferToOPay}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="transferToBank"
            component={TransferToBank}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="withdraw"
            component={WithdrawScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen name="airtime" component={AirtimeScreen} options={{ headerShown: false }} />
         <Stack.Screen name="data" component={DataScreen} options={{ headerShown: false }} />
         <Stack.Screen name="betting" component={BettingScreen} options={{ headerShown: false }} />
         <Stack.Screen name="safebox" component={SafeboxScreen} options={{ headerShown: false }} />
         <Stack.Screen name="more" component={MoreScreen} options={{ headerShown: false }} />
         <Stack.Screen name="message" component={MessageScreen} options={{ headerShown: false }} />
         <Stack.Screen name="loan" component={LoanScreen} options={{ headerShown: false }} />
         <Stack.Screen
            name="play4aChild"
            component={Play4aChild}
            options={{ headerShown: false }}
         />
         <Stack.Screen name="tv" component={TvScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
   );
};

export default StackNavigator;

const styles = StyleSheet.create({});
