import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const profileData = {
   name: 'kofo',
   totalBalance: 28000000,
   cashBack: 990,
   accountLimit: 'Tier 3',
};

const MeScreen = () => {
   const [profile] = useState(profileData);
   const [secureText, setSecureText] = useState(true);

   return (
      <ScrollView style={styles.container}>
         <View style={styles.headerContainer}>
            <View style={styles.headerTitle}>
               <TouchableOpacity>
                  <Image source={require('../assets/images/cat.png')} style={styles.image} />
               </TouchableOpacity>
               <Text style={styles.headerText}>Hi,{profile.name} ❤️</Text>
               <View style={styles.iconContainer}>
                  <TouchableOpacity>
                     <Ionicons name="settings-outline" size={24} color="black" />
                  </TouchableOpacity>
                  <View style={styles.redDot} />
               </View>
            </View>

            <View style={styles.tierSection}>
               <TouchableOpacity>
                  <View style={styles.tierBadge}>
                     <MaterialCommunityIcons name="medal" size={20} color="gold" />
                     <Text style={styles.tierText}>{profile.accountLimit}</Text>
                  </View>
               </TouchableOpacity>
            </View>

            <View style={styles.balance}>
               <Text style={styles.balanceText}>Total Balance</Text>
               <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIcon}>
                  <Ionicons
                     name={secureText ? 'eye-off-outline' : 'eye'}
                     size={18}
                     color="grey"
                     style={styles.eyeIcon}
                  />
               </TouchableOpacity>
            </View>
            <View style={styles.amountContainer}>
               <Text style={styles.profileBalance}>
                  <Text style={styles.naira}>₦</Text>
                  {''}
                  {secureText ? '****' : profile.totalBalance.toFixed(2)}
               </Text>
               <View style={styles.cashbackContainer}>
                  <Text style={styles.cashbackText}>
                     & Cashback{' '}
                     <Text style={styles.highlight}>
                        ₦ {secureText ? '****' : profile.cashBack.toFixed(2)}
                     </Text>
                  </Text>
               </View>
            </View>
         </View>
         <View style={styles.securityContainer}>
            <TouchableOpacity>
               <View style={styles.securityTextContainer}>
                  <Ionicons name="shield-checkmark" size={18} color="white" />
                  <Text style={styles.securityTitle}>Security Check is ON</Text>
               </View>
               <Text style={styles.securitySubtitle}>Your account is fully protected.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewButton}>
               <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
         </View>
         {/* list section1 */}
         <View style={styles.listContainer}>
            <View style={styles.listSection1}>
               <TouchableOpacity style={styles.listItem1}>
                  <FontAwesome5
                     name="clipboard-list"
                     size={24}
                     color="black"
                     style={styles.listIcon}
                  />
                  <Text style={styles.listText}>Transaction History</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={27}
                     color="black"
                     style={styles.listIcon2}
                  />
               </TouchableOpacity>

               <TouchableOpacity style={styles.listItem1}>
                  <FontAwesome name="tachometer" size={24} color="black" style={styles.listIcon} />
                  <Text style={styles.listText}>Account Limits</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={27}
                     color="black"
                     style={styles.listIcon3}
                  />
               </TouchableOpacity>

               <TouchableOpacity style={styles.listItem1}>
                  <FontAwesome
                     name="credit-card-alt"
                     size={24}
                     color="black"
                     style={styles.listIcon}
                  />
                  <Text style={styles.listText}>Bank Card/Account</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={27}
                     color="black"
                     style={styles.listIcon4}
                  />
               </TouchableOpacity>

               <TouchableOpacity style={styles.listItem1}>
                  <Ionicons name="storefront" size={24} color="black" style={styles.listIcon} />
                  <Text style={styles.listText}>Transfer to Me</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={27}
                     color="black"
                     style={styles.listIcon5}
                  />
               </TouchableOpacity>
            </View>
            {/* list section 2 */}
            <View style={styles.listSection2}>
               <TouchableOpacity style={styles.listItem1}>
                  <Ionicons
                     name="shield-checkmark"
                     size={24}
                     color="black"
                     style={styles.listIcon}
                  />
                  <Text style={styles.listText}>Security Center</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={27}
                     color="black"
                     style={styles.listIcon6}
                  />
               </TouchableOpacity>

               <TouchableOpacity style={styles.listItem1}>
                  <AntDesign
                     name="customerservice"
                     size={24}
                     color="black"
                     style={styles.listIcon}
                  />
                  <Text style={styles.listText}>Customer Service Center</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={27}
                     color="black"
                     style={styles.listIcon7}
                  />
               </TouchableOpacity>

               <TouchableOpacity style={styles.listItem1}>
                  <MaterialCommunityIcons
                     name="party-popper"
                     size={24}
                     color="black"
                     style={styles.listIcon}
                  />
                  <Text style={styles.listText}>Invitation</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={27}
                     color="black"
                     style={styles.listIcon8}
                  />
               </TouchableOpacity>

               <TouchableOpacity style={styles.listItem1}>
                  <Foundation name="telephone" size={24} color="black" style={styles.listIcon} />
                  <Text style={styles.listText}>OPay USSD</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={27}
                     color="black"
                     style={styles.listIcon9}
                  />
               </TouchableOpacity>

               <TouchableOpacity style={styles.listItem1}>
                  <MaterialCommunityIcons
                     name="star-face"
                     size={24}
                     color="black"
                     style={styles.listIcon}
                  />
                  <Text style={styles.listText}>Rate Us</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={27}
                     color="black"
                     style={styles.listIcon10}
                  />
               </TouchableOpacity>
            </View>
         </View>
         <View style={styles.licensedContainer}>
            <View style={styles.licensedTextContainer}>
               <Image source={require('../assets/images/cbnlogo.png')} style={styles.cbnLogo} />
               <Text style={styles.licensedText}>
                  Licensed by the <Text style={styles.boldText}>CBN</Text> and insured by the{' '}
                  <Text style={styles.boldText}>|NDIC</Text>
               </Text>
            </View>
            <Text style={styles.nigeria}>Nigeria Deposit Insurance Commission</Text>
         </View>
      </ScrollView>
   );
};

export default MeScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
   },
   headerContainer: {
      backgroundColor: '#E0F7E9',
      paddingHorizontal: 15,
      paddingVertical: 45,
   },
   headerTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
   },
   image: {
      width: 50,
      height: 50,
      borderRadius: 25,
   },
   headerText: {
      fontSize: 22,
      color: '#000',
      marginLeft: 3,
      marginBottom: 6,
   },
   boldText: {
      fontWeight: 'bold',
   },
   iconContainer: {
      position: 'relative',
      marginLeft: 220,
   },
   redDot: {
      width: 8,
      height: 8,
      backgroundColor: 'red',
      borderRadius: 4,
      position: 'absolute',
      top: 0,
      right: 0,
   },
   tierSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: -16,
      marginLeft: 48,
   },
   tierBadge: {
      backgroundColor: '#FFF3CD',
      paddingVertical: 2,
      paddingHorizontal: 10,
      borderRadius: 10,
      flexDirection: 'row',
      marginTop: 2,
   },
   tierText: {
      color: '#FFA000',
      fontSize: 14,
      marginRight: 6,
      marginTop: 2,
   },
   balance: {
      flexDirection: 'row',
      marginTop: 20,
   },
   balanceText: {
      fontSize: 18,
      fontFamily: 'Inter-Black-Light',
      marginLeft: 7,
   },
   eyeIcon: {
      marginLeft: 5,
      marginTop: 1,
   },
   amountContainer: {
      marginTop: 15,
      marginLeft: 4,
   },
   profileBalance: {
      fontSize: 35,
   },
   naira: {
      fontSize: 30,
   },
   cashbackContainer: {
      borderRadius: 15,
      marginTop: 5,
      backgroundColor: '#fff',
      paddingHorizontal: 12,
      paddingVertical: 5,
      maxWidth: '40%',
   },
   highlight: {
      color: '#00C49A',
   },
   shield: {
      width: 60,
      height: 60,
      marginLeft: 150,
   },
   securityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#00C49A',
      borderRadius: 15,
      marginHorizontal: 20,
      marginTop: -19,
      paddingVertical: 10,
      paddingHorizontal: 10,
   },
   securityTextContainer: {
      flex: 1,
      marginLeft: 5,
      flexDirection: 'row',
   },
   securityTitle: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
      marginLeft: 4,
   },
   securitySubtitle: {
      fontSize: 15,
      color: '#fff',
      marginTop: 8,
      marginLeft: 10,
   },
   viewButton: {
      backgroundColor: '#fff',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginLeft: 83,
   },
   viewButtonText: {
      color: '#00C49A',
      fontSize: 16,
   },
   listContainer: {
      flex: 1,
      marginTop: 10,
   },
   listSection1: {
      borderRadius: 10,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      paddingVertical: 10,
   },
   listItem1: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      marginVertical: 5,
      marginBottom: 5,
   },

   listIcon: {
      color: '#00C49A',
      marginLeft: 30,
   },
   listText: {
      color: 'black',
      marginLeft: 10,
      fontSize: 20,
      fontFamily: 'Inter-Black-Light',
   },
   listIcon2: {
      color: 'grey',
      marginLeft: 150,
   },
   listIcon4: {
      color: 'grey',
      marginLeft: 135,
   },
   listIcon3: {
      color: 'grey',
      marginLeft: 180,
   },
   listIcon5: {
      color: 'grey',
      marginLeft: 175,
   },
   listIcon6: {
      color: 'grey',
      marginLeft: 170,
   },
   listIcon7: {
      color: 'grey',
      marginLeft: 95,
   },
   listIcon8: {
      color: 'grey',
      marginLeft: 215,
   },
   listIcon9: {
      color: 'grey',
      marginLeft: 200,
   },
   listIcon10: {
      color: 'grey',
      marginLeft: 220,
   },
   listSection2: {
      borderRadius: 10,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      paddingVertical: 10,
      marginTop: 10,
   },
   licensedContainer: {
      marginTop: 20,
      marginLeft: 70,
   },
   licensedTextContainer: {
      flexDirection: 'row',
   },
   cbnLogo: {
      width: 25,
      height: 25,
   },
   licensedText: {
      marginTop: 5,
      color: 'grey',
   },
   nigeria: {
      marginLeft: 263,
      fontSize: 3,
      marginBottom: 2,
      color: '#002D62',
   },
   boldText: {
      fontWeight: 'bold',
      color: '#002D62',
      fontSize: 16,
   },
});
