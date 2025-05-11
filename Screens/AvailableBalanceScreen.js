import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
   Image,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from 'react-native';

const userData = {
   accountNumber: '913 456 7890',
   availableBalance: 23000000,
   wallet: 23000000,
   OWealth: 0,
   interest: 0,
};

const AvailableBalanceScreen = () => {
   const [balance] = useState(userData);
   const [secureText, setSecureText] = useState(true);
   const navigation = useNavigation();

   const handleGoBack = () => {
      navigation.goBack();
   };

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle="dark-content" backgroundColor="#fff" />
         <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleGoBack}>
               <Entypo name="chevron-small-left" size={26} color="black" style={styles.arrow} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Available Balance Details</Text>
         </View>

         {/* content */}
         <ScrollView style={styles.scrollContainer}>
            <TouchableOpacity>
               <View style={styles.accountBalanceSection}>
                  <Text style={styles.accountText}>Account Number</Text>
                  <Text style={styles.accountNumber}>{balance.accountNumber}</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={22}
                     color="grey"
                     style={styles.rightArrow}
                  />
               </View>
            </TouchableOpacity>

            <View style={styles.availableContainer}>
               <View style={styles.availableRow}>
                  <Text style={styles.balance}>Available Balance</Text>
                  <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                     <Ionicons
                        name={secureText ? 'eye-off-outline' : 'eye'}
                        size={17}
                        color="white"
                        style={styles.eyeIcon}
                     />
                  </TouchableOpacity>
               </View>
               <Text style={styles.amount}>
                  {' '}
                  <Text style={styles.naira}>₦</Text>{' '}
                  {secureText ? '****' : balance.availableBalance.toFixed(2)}
               </Text>
            </View>

            <View style={styles.walletContainer}>
               <TouchableOpacity>
                  <View style={styles.walletRow}>
                     <FontAwesome5
                        name="wallet"
                        size={15}
                        color="#17B169"
                        style={styles.walletIcon}
                     />
                     <Text style={styles.walletText}>Wallet</Text>
                     <Entypo
                        name="chevron-small-right"
                        size={20}
                        color="grey"
                        style={styles.walletArrow}
                     />
                  </View>
                  <Text style={styles.walletAmount}>
                     {' '}
                     <Text style={styles.walletAmount}>₦</Text>{' '}
                     {secureText ? '****' : balance.wallet.toFixed(2)}
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity>
                  <View style={styles.autosaveContainer}>
                     <Text style={styles.autosaveText}>
                        Turn on your <Text style={styles.highlight}>AutoSave</Text> and start making
                        money every day on OWealth!
                     </Text>
                     <Entypo
                        name="chevron-small-right"
                        size={20}
                        color="grey"
                        style={styles.autosaveArrow}
                     />
                  </View>
               </TouchableOpacity>
               <View style={styles.dashedLine} />

               <TouchableOpacity>
                  <View style={styles.walletRow}>
                     <View style={styles.walletIcon}>
                        <FontAwesome5 name="weebly" size={16} color="#17B169" />
                     </View>
                     <Text style={styles.walletText}>OWealth</Text>
                     <Entypo
                        name="chevron-small-right"
                        size={20}
                        color="grey"
                        style={styles.owealthArrow}
                     />
                  </View>
                  <Text style={styles.walletAmount}>
                     {' '}
                     <Text style={styles.walletAmount}>₦</Text>{' '}
                     {secureText ? '****' : balance.OWealth.toFixed(2)}
                  </Text>
               </TouchableOpacity>
               <View style={styles.owealthContainer}>
                  <Text style={styles.autosaveText}>
                     Yesterday's Interest Earned{' '}
                     <Text style={styles.highlight}> ₦{balance.interest.toFixed(2)}</Text>
                  </Text>
               </View>
            </View>
            <View style={styles.dashedLine} />

            {/* ndic section */}
            <View style={styles.infoContainer}>
               <View style={styles.insuranceContainer}>
                  <View style={styles.ndicContainer}>
                     <View style={styles.insuredContainer}>
                        <Text style={styles.insuredText}>INSURED BY THE</Text>
                     </View>
                     <View style={styles.nContainer}>
                        <View style={styles.verticalLine} />
                        <Text style={styles.ndicText}>NDIC</Text>
                     </View>
                     <Text style={styles.depositText}>Nigeria Deposit Insurance Corporation</Text>
                     <Text style={styles.protectText}>Protecting your bank deposits</Text>
                  </View>

                  <View style={styles.noteContainer}>
                     <Text style={styles.noteText}>
                        OPay Digital Service Limited is a member of the NDIC. Eligible deposits
                        taken by this OPay are protected by the NDIC up to ₦5,000,000 per user which
                        is the same as traditional bank.
                     </Text>
                     <Text style={styles.detailsText}>Details pls check the links below:</Text>
                     <TouchableOpacity>
                        <Text style={styles.opayText}>OPay listed on NDIC website</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               {/* tollfree */}
               <View style={styles.tollContainer}>
                  <View style={styles.callContainer}>
                     <Text style={styles.callText}>CALL</Text>
                     <Text style={styles.tollText}>TOLL-FREE</Text>
                     <Ionicons name="play-forward" size={10} color="white" />
                  </View>
                  <View style={styles.numContainer}>
                     <Text style={styles.number}>0800-6342-4357</Text>
                     <View style={styles.linkSection}>
                        <Text style={styles.helpText}>
                           helpdesk@ndic.gov.ng | www.ndic.gov.ng |{' '}
                        </Text>
                        <Entypo name="facebook" size={8} color="white" style={styles.helpIcon} />
                        <FontAwesome6
                           name="square-x-twitter"
                           size={8}
                           color="white"
                           style={styles.helpIcon}
                        />
                        <FontAwesome5
                           name="instagram-square"
                           size={8}
                           color="white"
                           style={styles.helpIcon}
                        />
                        <FontAwesome6
                           name="square-whatsapp"
                           size={8}
                           color="white"
                           style={styles.helpIcon}
                        />
                        <MaterialCommunityIcons
                           name="gmail"
                           size={8}
                           color="white"
                           style={styles.helpIcon}
                        />
                        <Text style={styles.helpText}>/NDICNigeria</Text>
                     </View>
                  </View>
               </View>
            </View>

            <View style={styles.licenseContainer}>
               <Image source={require('../assets/images/cbnlogo.png')} style={styles.cbnLogo} />
               <Text>
                  Licensed by the <Text style={styles.boldText}>CBN</Text> and insured by the |
                  <Text style={styles.boldText}>NDIC</Text>
               </Text>
            </View>
            <View style={styles.ndicContainer1}>
               <Text style={styles.ndic1}>Nigeria Deposit Insurance Corperation</Text>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default AvailableBalanceScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 16,
   },
   arrow: {
      marginRight: 15,
   },
   headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 50,
   },
   scrollContainer: {
      backgroundColor: '#f9f9f9',
   },
   accountBalanceSection: {
      flexDirection: 'row',
      marginTop: 20,
      marginLeft: 20,
      backgroundColor: '#E8F5E9',
      padding: 10,
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 10,
   },
   accountText: {
      marginTop: 3,
      marginLeft: 10,
   },
   accountNumber: {
      marginTop: 3,
      marginLeft: 150,
   },
   rightArrow: {
      marginTop: -2,
   },
   availableContainer: {
      backgroundColor: '#17B169',
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 10,
      marginLeft: 20,
      marginTop: -9,
      minHeight: 130,
   },
   availableRow: {
      flexDirection: 'row',
   },
   balance: {
      color: '#fff',
      marginTop: 10,
      marginLeft: 10,
      fontSize: 16,
   },
   eyeIcon: {
      marginLeft: 4,
      marginTop: 10,
   },
   amount: {
      marginTop: 25,
      marginLeft: 8,
      fontSize: 24,
      color: '#fff',
   },
   naira: {
      fontSize: 20,
   },
   walletContainer: {
      backgroundColor: '#fff',
      marginLeft: 20,
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 10,
      marginTop: -22,
   },
   walletRow: {
      flexDirection: 'row',
   },
   walletIcon: {
      backgroundColor: '#E8F5E9',
      padding: 5,
      borderRadius: 14,
      alignItems: 'center',
      marginLeft: 10,
   },
   walletText: {
      marginTop: 5,
      marginLeft: 5,
   },
   walletArrow: {
      marginTop: 1,
      marginLeft: 265,
   },
   walletAmount: {
      marginLeft: 10,
      marginTop: 15,
      fontSize: 18,
   },
   autosaveContainer: {
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      marginTop: 10,
      marginHorizontal: 6,
      flexDirection: 'row',
      padding: 5,
   },
   autosaveText: {
      fontSize: 13,
      marginTop: 5,
      marginLeft: 5,
      fontFamily: 'Inter-Black-Light',
   },
   autosaveArrow: {
      marginRight: 3,
      marginTop: 2,
   },
   highlight: {
      color: '#17B169',
   },
   dashedLine: {
      height: 1,
      backgroundColor: 'transparent',
      borderWidth: 0.5,
      borderColor: '#D3D3D3',
      width: '95%',
      alignSelf: 'center',
      marginVertical: 20,
      borderStyle: 'dashed',
   },
   owealthArrow: {
      marginLeft: 250,
      marginTop: 2,
   },
   owealthContainer: {
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      marginTop: 8,
      padding: 5,
      marginHorizontal: 10,
      alignSelf: 'flex-start',
      maxWidth: '70%',
   },
   infoContainer: {
      marginLeft: 10,
      flexDirection: 'column',
      marginTop: -1,
      padding: 10,
      borderRadius: 18,
      backgroundColor: '#f9f9f9',
   },
   insuranceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      borderRadius: 20,
   },

   ndicContainer: {
      backgroundColor: '#fff',
      padding: 10,
      flex: -1,
   },
   insuredContainer: {
      padding: 6,
      backgroundColor: '#0071c5',
      borderRadius: 15,
      marginHorizontal: 5,
      width: 115,
      height: 28,
   },
   insuredText: {
      color: '#fff',
   },
   ndicText: {
      color: '#002D62',
      fontWeight: 'bold',
      marginLeft: 3,
      fontSize: 38,
   },
   verticalLine: {
      height: '109%',
      width: 3,
      backgroundColor: '#002D62',
      marginTop: 5,
   },
   nContainer: {
      flexDirection: 'row',
      marginLeft: 18,
      marginTop: 15,
   },
   depositText: {
      marginLeft: 24,
      fontSize: 6,
      marginBottom: 5,
   },
   protectText: {
      fontSize: 5,
      marginLeft: 55,
      marginBottom: 10,
   },
   noteContainer: {
      backgroundColor: '#f9f9f9',
      flex: 1,
   },
   noteText: {
      marginTop: 10,
      fontSize: 14,
      lineHeight: 15,
      color: 'grey',
   },
   detailsText: {
      marginTop: 11,
      fontSize: 14,
      color: 'grey',
   },
   opayText: {
      fontSize: 14,
      color: '#17B169',
      textDecorationLine: 'underline',
   },
   tollContainer: {
      backgroundColor: '#87CEFA',
      borderRadius: 5,
      flexDirection: 'row',
   },
   callContainer: {
      marginLeft: 70,
      backgroundColor: '#002D62',
      borderRadius: 28,
      marginTop: 10,
      padding: 3,
      marginHorizontal: 10,

      alignItems: 'center',
      width: 40,
      height: 40,
   },
   callText: {
      color: '#fff',
      fontSize: 8,
   },
   tollText: {
      color: '#fff',
      fontSize: 8,
   },
   numContainer: {
      marginTop: 10,
      padding: 10,
   },
   linkSection: {
      flexDirection: 'row',
   },
   helpText: {
      fontSize: 6,
      color: '#fff',
   },
   helpIcon: {
      marginLeft: 1,
      marginTop: -1,
   },

   licenseContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      marginLeft: 60,
   },
   cbnLogo: {
      width: 22,
      height: 22,
   },
   boldText: {
      fontWeight: 'bold',
      color: '#2D1C5C',
   },
   ndicContainer1: {
      marginBottom: 6,
      marginLeft: 316,
   },
   ndic1: {
      fontSize: 3,
   },
   number: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
   },
});
