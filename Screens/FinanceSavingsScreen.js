import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import Foundation from '@expo/vector-icons/Foundation';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const financeData = {
   totalBalance: 240,
   totalInterest: 43,
   wallet: 230,
   OWealth: 0.13,
   save: 0,
};

const FinanceSavingsScreen = () => {
   const [secureText, setSecureText] = useState(true);
   const [finance] = useState(financeData);

   return (
      <ScrollView style={styles.container}>
         <View style={styles.balanceRow}>
            <View style={styles.totalBalanceContainer}>
               <View style={styles.totalBalanceHeader}>
                  <Text style={styles.totalBalanceText}>Total Balance</Text>
                  <TouchableOpacity
                     onPress={() => setSecureText(!secureText)}
                     style={styles.eyeIcon}>
                     <Ionicons
                        name={secureText ? 'eye-off-outline' : 'eye-outline'}
                        size={17}
                        color="black"
                     />
                  </TouchableOpacity>
               </View>
               <TouchableOpacity>
                  <Text style={styles.totalBalance}>
                     {' '}
                     <Text style={styles.naira}>₦</Text>{' '}
                     {secureText ? '****' : finance.totalBalance.toFixed(2)}
                  </Text>
               </TouchableOpacity>
            </View>

            <View style={styles.totalInterestContainer}>
               <Text style={styles.totalInterestText}>Total Interest</Text>
               <TouchableOpacity>
                  <Text style={styles.totalInterest}>
                     {' '}
                     <Text style={styles.naira}>₦</Text>{' '}
                     {secureText ? '****' : finance.totalInterest.toFixed(2)}
                  </Text>
               </TouchableOpacity>
            </View>
         </View>

         {/* cards */}
         <View style={styles.cardContainer}>
            <View style={styles.cardItemsRow}>
               <TouchableOpacity style={styles.cardItem1}>
                  <View style={styles.cardTitleContainer}>
                     <Entypo name="wallet" size={20} color="#17B169" />
                     <Text style={styles.cardTitle}>Wallet</Text>
                  </View>
                  <Text style={styles.cardDescription}>
                     You can deposit this amount in OWealth and earn daily interests.
                  </Text>
                  <Text style={styles.cardBalance}>
                     {' '}
                     <Text style={styles.amount}>₦</Text>{' '}
                     {secureText ? '****' : finance.wallet.toFixed(2)}
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardItem2}>
                  <View style={styles.cardTitleContainer}>
                     <FontAwesome5 name="hand-holding-usd" size={20} color="#720e9e" />
                     <Text style={styles.cardTitle}>OWealth</Text>
                  </View>
                  <Text style={styles.cardDescription}>
                     Your daily returns. You can withdraw at any time.
                  </Text>
                  <Text style={styles.cardBalance}>
                     {' '}
                     <Text style={styles.amount}>₦</Text>{' '}
                     {secureText ? '****' : finance.OWealth.toFixed(2)}
                  </Text>
               </TouchableOpacity>
            </View>

            <View style={styles.cardItemsRow}>
               <TouchableOpacity style={styles.cardItem3}>
                  <View style={styles.cardTitleContainer}>
                     <Foundation name="target" size={22} color="#0076CE" />
                     <Text style={styles.cardTitle}>Targets</Text>
                  </View>
                  <Text style={styles.cardDescription}>
                     Save daily, weekly, or monthly towards your goal.
                  </Text>
                  <Text style={styles.space}> </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardItem4}>
                  <View style={styles.cardTitleContainer}>
                     <Fontisto name="wallet" size={19} color="#FF033E" />
                     <Text style={styles.cardTitle}>SafeBox</Text>
                  </View>
                  <Text style={styles.cardDescription}>
                     Your daily, weekly or monthly automatic savings.
                  </Text>
               </TouchableOpacity>
            </View>

            <View style={styles.cardItemsRow}>
               <TouchableOpacity style={styles.cardItem3}>
                  <View style={styles.cardTitleContainer}>
                     <Fontisto name="locked" size={18} color="#17B169" />
                     <Text style={styles.cardTitle}>Fixed</Text>
                  </View>
                  <Text style={styles.cardDescription}>Min: ₦1000 </Text>
                  <Text style={styles.cardDescription2}> Tenor: 7-1000 days</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.cardItem4}>
                  <View style={styles.cardTitleContainer}>
                     <FontAwesome6 name="sack-dollar" size={18} color="#FFD700" />
                     <Text style={styles.cardTitle}>Spend & Save</Text>
                  </View>
                  <Text style={styles.cardDescription}>
                     Your daily returns. You can withdraw at any time.
                  </Text>
                  <Text style={styles.cardBalance}>
                     {' '}
                     <Text style={styles.amount}>₦</Text>{' '}
                     {secureText ? '****' : finance.save.toFixed(2)}
                  </Text>
               </TouchableOpacity>
            </View>

            <View style={styles.singleCard}>
               <TouchableOpacity style={styles.cardItem5}>
                  <View style={styles.cardTitleContainer}>
                     <Ionicons name="tv" size={22} color="#800080" />
                     <Text style={styles.cardTitle}>Savings Report</Text>
                  </View>
                  <Text style={styles.cardDescription}>Check out your savings journey so far</Text>
                  <Text style={styles.space}> </Text>
               </TouchableOpacity>
            </View>
         </View>
         <View style={styles.ndicContainer}>
            <View style={styles.ndicRow}>
               <Text style={styles.insured}>Insured by</Text>
               <View style={styles.line}></View>
               <Text style={styles.ndic}>NDIC</Text>
            </View>
            <Text style={styles.deposit}>Nigeria Deposit Insurance Corporation</Text>
         </View>
      </ScrollView>
   );
};

export default FinanceSavingsScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
   },
   balanceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
   },
   totalBalanceContainer: {
      marginLeft: 5,
   },
   totalBalanceHeader: {
      flexDirection: 'row',
   },
   totalBalanceText: {
      fontSize: 19,
      fontFamily: 'Inter-Black-Light',
   },
   eyeIcon: {
      marginLeft: 6,
      marginTop: 2,
   },
   totalBalance: {
      marginTop: 10,
      fontSize: 20,
   },
   naira: {
      fontSize: 15,
   },
   totalInterestContainer: {
      marginRight: 17,
   },
   totalInterestText: {
      fontSize: 19,
      fontFamily: 'Inter-Black-Light',
   },
   totalInterest: {
      marginTop: 10,
      fontSize: 20,
   },
   cardContainer: {
      marginTop: 25,
   },
   cardItemsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
   },
   cardItem1: {
      flex: 1,
      borderRadius: 20,
      backgroundColor: '#E0F7E9',
      padding: 15,
      marginRight: 10,
   },
   cardItem2: {
      flex: 1,
      borderRadius: 20,
      backgroundColor: '#EDE4FF',
      padding: 15,
      marginLeft: 10,
   },
   cardTitleContainer: {
      flexDirection: 'row',
   },
   cardTitle: {
      marginLeft: 10,
      marginTop: 5,
      fontSize: 15,
   },
   cardDescription: {
      marginTop: 20,
      fontSize: 15,
      fontFamily: 'Inter-Black-Light',
   },
   cardDescription2: {
      marginBottom: 3,
      marginRight: 5,
      fontSize: 15,
      fontFamily: 'Inter-Black-Light',
   },
   cardBalance: {
      marginTop: 28,
      fontSize: 18,
   },
   cardItem3: {
      flex: 1,
      borderRadius: 20,
      backgroundColor: '#F5F5F5',
      padding: 15,
      marginRight: 10,
   },
   cardItem4: {
      flex: 1,
      borderRadius: 20,
      backgroundColor: '#F5F5F5',
      padding: 15,
      marginLeft: 10,
   },
   space: {
      marginTop: 38,
   },
   singleCard: {
      width: '47%',
      marginRight: 10,
      marginBottom: 20,
   },
   cardItem5: {
      flex: 1,
      borderRadius: 20,
      backgroundColor: '#F5F5F5',
      padding: 15,
      marginRight: 10,
   },
   ndicContainer: {
      alignItems: 'center',
      marginTop: 160,
   },
   ndicRow: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   insured: {
      marginRight: 5,
      fontSize: 16,
      color: '#002D62',
   },
   line: {
      height: 20,
      width: 2,
      marginTop: 5,
      backgroundColor: '#002D62',
   },
   ndic: {
      marginLeft: 2,
      fontWeight: 'bold',
      color: '#002D62',
      fontSize: 20,
   },
   deposit: {
      fontSize: 3,
      marginLeft: 83,
      marginBottom: 1,
      marginTop: -4,
   },
});
