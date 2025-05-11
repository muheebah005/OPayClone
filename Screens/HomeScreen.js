import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
   useAnimatedStyle,
   useSharedValue,
   withSequence,
   withTiming,
} from 'react-native-reanimated';

const userData = {
   name: 'Kofo',
   balance: 28000000,
   transactions: [
      {
         id: 1,
         type: 'transfer',
         title: 'Transfer to YANGAPLUG',
         amount: -1000,
         date: 'Feb 25th, 11:30:24 AM',
         status: 'Successful',
      },
      {
         id: 2,
         type: 'bonus',
         title: 'Bonus from Data Purchase',
         amount: 18,
         date: 'Feb 25th, 11:28:38 AM',
         status: 'Successful',
      },
   ],
};

const HomeScreen = () => {
   const [user] = useState(userData);
   const navigation = useNavigation();
   const [secureText, setSecureText] = useState(true);
   const jumpAnim = useSharedValue(0);

   const [fontLoaded] = useFonts({
      'Inter-Black': require('../assets/fonts/Inter_18pt-Black.ttf'),
      'Inter-Black-Light': require('../assets/fonts/Inter_18pt-Light.ttf'),
      'Inter-Black-Medium': require('../assets/fonts/Inter_18pt-Medium.ttf'),
   });

   const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: jumpAnim.value }],
   }));

   const handleCustomerService = () => {
      navigation.navigate('customerService');
   };

   const handleProfileScreen = () => {
      navigation.navigate('profile');
   };

   const handleNotificationScreen = () => {
      navigation.navigate('notification');
   };

   const handleScanScreen = () => {
      navigation.navigate('scan');
   };

   const handleAddMoneyScreen = () => {
      navigation.navigate('addMoney');
   };

   const handleTransactionScreen = () => {
      navigation.navigate('transactions');
   };

   const handleAvailableBalanceScreen = () => {
      navigation.navigate('availableBalance');
   };

   const handleTransferToOPay = () => {
      navigation.navigate('transferToOPay');
   };

   const handleTransferToBank = () => {
      navigation.navigate('transferToBank');
   };

   const handleWithdrawScreen = () => {
      navigation.navigate('withdraw');
   };

   const handleAirtimeScreen = () => {
      navigation.navigate('airtime');
   };

   const handleDataScreen = () => {
      navigation.navigate('data');
   };

   const handleBettingScreen = () => {
      navigation.navigate('betting');
   };

   const handleTVScreen = () => {
      navigation.navigate('tv');
   };

   const handleSafeboxScreen = () => {
      navigation.navigate('safebox');
   };

   const handleLoanScreen = () => {
      navigation.navigate('loan');
   };

   const handlePlay4aChildScreen = () => {
      navigation.navigate('play4aChild');
   };

   const handleMoreScreen = () => {
      navigation.navigate('more');
   };

   const handleMessageScreen = () => {
      navigation.navigate('message');
   };

   useEffect(() => {
      const startAnimation = () => {
         jumpAnim.value = withSequence(
            withTiming(-5, { duration: 200 }),
            withTiming(0, { duration: 200 })
         );
      };
      const interval = setInterval(startAnimation, 2000);
      return () => clearInterval(interval);
   }, []);

   if (!fontLoaded) {
      return null;
   }

   return (
      <ScrollView style={styles.container}>
         {/* header */}
         <View style={styles.header}>
            <View style={styles.userInfo}>
               <View style={styles.profileContainer}>
                  <TouchableOpacity onPress={handleProfileScreen}>
                     <Image
                        style={styles.profileImage}
                        source={require('../assets/images/onb1.png')}
                     />
                     <View style={styles.badge}>
                        <Text style={styles.badgeText}>1</Text>
                     </View>
                  </TouchableOpacity>
               </View>
               <Text style={styles.greeting}>Hi, {user.name}</Text>
            </View>
            <View style={styles.icons}>
               <Animated.View style={animatedStyle}>
                  <TouchableOpacity onPress={handleCustomerService} style={styles.customerService}>
                     <Text style={styles.help}>HELP</Text>
                     <AntDesign name="customerservice" color="black" size={24} />
                  </TouchableOpacity>
               </Animated.View>

               <TouchableOpacity style={styles.iconSpace1} onPress={handleScanScreen}>
                  <MaterialCommunityIcons name="line-scan" color="black" size={23} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.iconSpace2} onPress={handleNotificationScreen}>
                  <FontAwesome name="bell-o" color="black" size={23} />
               </TouchableOpacity>
            </View>
         </View>

         {/* balance card */}
         <View style={styles.balanceCard}>
            <View style={styles.balanceHeader}>
               <View style={styles.balanceTop}>
                  <Ionicons name="shield-checkmark-sharp" size={16} color="white" />
                  <Text style={styles.balanceTitle}>Available Balance</Text>
                  <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                     <Ionicons
                        name={secureText ? 'eye-off-outline' : 'eye'}
                        size={17}
                        color="white"
                     />
                  </TouchableOpacity>
               </View>
               <View style={styles.transcContainer}>
                  <TouchableOpacity
                     style={styles.transactionButton}
                     onPress={handleTransactionScreen}>
                     <Text style={styles.transactionHistory} numberOfLines={1} ellipsizeMode="tail">
                        Transact...n History
                     </Text>
                     <Entypo
                        name="chevron-small-right"
                        size={24}
                        color="white"
                        style={styles.transactionIcon1}
                     />
                  </TouchableOpacity>
               </View>
            </View>
            <View style={styles.balanceContainer}>
               <TouchableOpacity onPress={handleAvailableBalanceScreen}>
                  <Text style={styles.amount}>
                     {' '}
                     <Text style={styles.naira}>₦</Text>{' '}
                     {secureText ? '****' : user.balance.toFixed(2)}
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.addMoneyButton} onPress={handleAddMoneyScreen}>
                  <Text style={styles.addMoneyText}>+ Add Money</Text>
               </TouchableOpacity>
            </View>
         </View>

         {/*recent transactions */}
         <View style={styles.transactionsContainer}>
            {user.transactions.map((transaction) => {
               let iconName, iconLib;
               switch (transaction.type) {
                  case 'transfer':
                     iconName = 'arrowup';
                     iconLib = AntDesign;
                     break;
                  case 'money-in':
                     iconName = 'arrowdown';
                     iconLib = AntDesign;
                     break;
                  case 'bonus':
                     iconName = 'gift-outline';
                     iconLib = Ionicons;
                     break;
                  default:
                     iconName = 'questioncircleo';
                     iconLib = AntDesign;
                     break;
               }
               return (
                  <View key={transaction.id} style={styles.transactionItem}>
                     <View style={styles.transactionIcon}>
                        {React.createElement(iconLib, {
                           name: iconName,
                           size: 20,
                           color: '#17B169',
                        })}
                     </View>
                     <View style={styles.transactionDetails}>
                        <Text style={styles.transactionTitle}>
                           {secureText ? '********' : transaction.title}
                        </Text>
                        <Text style={styles.transactionDate}>
                           {secureText ? '********' : transaction.date}
                        </Text>
                     </View>

                     <View style={styles.transactionStatus}>
                        <Text
                           style={[
                              styles.transactionAmount,
                              { color: transaction.amount < 0 ? 'black' : '#17B169' },
                           ]}>
                           {secureText
                              ? '****'
                              : transaction.amount < 0
                              ? `-₦${Math.abs(transaction.amount).toFixed(2)}`
                              : `+₦${transaction.amount.toFixed(2)}`}
                        </Text>
                        <View style={styles.successBox}>
                           <Text style={styles.successText}>{transaction.status}</Text>
                        </View>
                     </View>
                  </View>
               );
            })}
         </View>

         {/* bank options */}
         <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.option} onPress={handleTransferToOPay}>
               <View style={styles.iconContainer}>
                  <FontAwesome5
                     name="user-alt"
                     size={20}
                     color="#17B169"
                     style={styles.optionIcon}
                  />
                  <Text style={styles.iconText}>To OPay</Text>
               </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={handleTransferToBank}>
               <View style={styles.iconContainer}>
                  <FontAwesome name="bank" size={20} color="#17B169" style={styles.optionIcon} />
                  <Text style={styles.iconText}>To Bank</Text>
               </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={handleWithdrawScreen}>
               <View style={styles.iconContainer}>
                  <FontAwesome6
                     name="square-arrow-up-right"
                     size={20}
                     color="#17B169"
                     style={styles.optionIcon}
                  />
                  <Text style={styles.iconText}>Withdraw</Text>
               </View>
            </TouchableOpacity>
         </View>

         {/* service card */}
         <View style={styles.serviceCard}>
            <View style={styles.row}>
               <TouchableOpacity style={styles.serviceContent} onPress={handleAirtimeScreen}>
                  <View style={styles.serviceIconContainer}>
                     <MaterialIcons name="signal-cellular-4-bar" size={24} color="#17B169" />
                  </View>
                  <Text style={styles.serviceText}>Airtime</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.serviceContent} onPress={handleDataScreen}>
                  <View style={styles.serviceIconContainer}>
                     <Foundation name="mobile-signal" size={22} color="#17B169" />
                  </View>
                  <Text style={styles.serviceText}>Data</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.serviceContent} onPress={handleBettingScreen}>
                  <View style={styles.serviceIconContainer}>
                     <Ionicons name="football-sharp" size={22} color="#17B169" />
                  </View>
                  <Text style={styles.serviceText}>Betting</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.serviceContent} onPress={handleTVScreen}>
                  <View style={styles.serviceIconContainer}>
                     <MaterialIcons name="live-tv" size={24} color="#17B169" />
                  </View>
                  <Text style={styles.serviceText}>TV</Text>
               </TouchableOpacity>
            </View>

            <View style={styles.row}>
               <TouchableOpacity style={styles.serviceContent} onPress={handleSafeboxScreen}>
                  <View style={styles.serviceIconContainer}>
                     <Fontisto name="wallet" size={22} color="#17B169" />
                  </View>
                  <Text style={styles.serviceText}>Safebox</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.serviceContent} onPress={handleLoanScreen}>
                  <View style={styles.serviceIconContainer}>
                     <MaterialCommunityIcons name="wallet-plus" size={24} color="#17B169" />
                  </View>
                  <Text style={styles.serviceText}>Loan</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.serviceContent} onPress={handlePlay4aChildScreen}>
                  <View style={styles.serviceIconContainer}>
                     <Ionicons name="megaphone" size={22} color="#17B169" />
                  </View>
                  <Text style={styles.serviceText}>Invitation</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.serviceContent} onPress={handleMoreScreen}>
                  <View style={styles.serviceIconContainer}>
                     <FontAwesome name="ellipsis-h" size={24} color="#17B169" />
                  </View>
                  <Text style={styles.serviceText}>More</Text>
               </TouchableOpacity>
            </View>
         </View>

         {/* message section */}
         <View style={styles.messageContainer}>
            <TouchableOpacity style={styles.messageWrapper} onPress={handleMessageScreen}>
               <Entypo name="megaphone" size={25} color="#17B169" style={styles.messageIcon} />
               <View style={styles.messageContent}>
                  <Text style={styles.title}>Cash up for grabs!</Text>
                  <Text style={styles.subtitle}>invite friends and earn up to ₦4,600 Bonus</Text>
               </View>
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
};

export default HomeScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f9f9f9',
   },
   header: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   greeting: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
      fontFamily: 'Inter-black',
   },
   icons: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 6,
   },
   profileContainer: {
      position: 'relative',
   },
   profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
   },
   badge: {
      position: 'absolute',
      bottom: 2,
      right: -2,
      backgroundColor: 'red',
      width: 20,
      height: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
   },
   badgeText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
   },
   animation: {
      transform: [{ translateY: 0 }],
   },

   iconSpace1: {
      marginRight: 10,
   },
   iconSpace2: {
      marginRight: 10,
   },
   customerService: {
      alignItems: 'center',
      marginRight: 15,
      marginBottom: 3,
   },
   help: {
      fontSize: 10,
      position: 'absolute',
      top: -10,
      left: 10,
      backgroundColor: '#FFC0CB',
      fontWeight: 'bold',
      color: '#F9629F',
      paddingVertical: 2,
      borderRadius: 10,
   },
   balanceCard: {
      backgroundColor: '#17B169',
      padding: 15,
      borderRadius: 15,
      marginTop: 16,
   },
   balanceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
   },
   balanceTop: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
   },
   balanceTitle: {
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold',
      marginLeft: 5,
      marginRight: 5,
      fontFamily: 'Inter-Black-Medium',
   },
   transcContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
   },
   transactionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      marginLeft: 40,
   },
   transactionHistory: {
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold',
      flexShrink: 1,
      marginBottom: 10,
      fontFamily: 'Inter-Black-Medium',
   },
   transactionIcon1: {
      marginBottom: 10,
   },
   balanceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
   },
   amount: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
   },
   naira: {
      fontSize: 23,
      fontWeight: 'light',
   },
   addMoneyButton: {
      backgroundColor: '#fff',
      borderRadius: 18,
      alignSelf: 'flex-end',
      paddingHorizontal: 15,
      paddingVertical: 8,
   },
   addMoneyText: {
      fontSize: 14,
      fontWeight: 'light',
      color: '#2AA94A',
   },
   transactionsContainer: {
      marginTop: 15,
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
   },

   transactionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 5,
   },
   transactionIcon: {
      marginRight: 10,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#E8F5E9',
      justifyContent: 'center',
      alignItems: 'center',
   },
   transactionDetails: {
      flex: 1,
   },
   transactionTitle: {
      fontSize: 15,
      fontWeight: 'light',
      fontFamily: 'Inter-Black-Medium',
   },
   transactionDate: {
      fontSize: 12,
      color: 'gray',
   },
   transactionAmount: {
      fontSize: 20,
      fontWeight: 'light',
   },
   transactionStatus: {
      alignItems: 'flex-end',
   },

   successBox: {
      marginTop: 5,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 5,
      backgroundColor: '#E8F5E9',
      alignSelf: 'flex-start',
      marginLeft: 10,
   },
   successText: {
      color: '#17B169',
      fontSize: 12,
      fontWeight: 'light',
   },
   optionsContainer: {
      marginTop: 15,
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 15,
      flexDirection: 'row',
      justifyContent: 'space-around',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
   },
   option: {
      alignItems: 'center',
   },
   iconContainer: {
      padding: 5,
      alignItems: 'center',
   },
   iconText: {
      fontSize: 16,
      fontWeight: 'light',
      marginTop: 8,
      fontFamily: 'Inter-Black-Light',
      textAlign: 'center',
   },
   optionIcon: {
      backgroundColor: '#E8F5E9',
      marginLeft: 6,
      padding: 10,
      borderRadius: 10,
   },
   serviceCard: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 15,
      shadowColor: '#000',
      marginTop: 10,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
   },
   row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
   },
   serviceContent: {
      alignItems: 'center',
   },
   serviceIconContainer: {
      backgroundColor: '#E8F5E9',
      borderRadius: 29,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
   },
   serviceText: {
      fontSize: 14,
      marginTop: 10,
      fontWeight: 'light',
      fontFamily: 'Inter-Black-Light',
   },
   messageContainer: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 15,
      marginTop: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
   },
   messageWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   messageIcon: {
      marginRight: 17,
   },
   messageContent: {
      flex: 1,
   },
   title: {
      fontSize: 18,
      fontWeight: '400',
      fontFamily: 'Inter-Black',
      marginBottom: 5,
   },
   subtitle: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
   },
});
