import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
   FlatList,
   Image,
   SafeAreaView,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   View,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

const transferData = {
   Recents: [
      { id: 1, name: 'DANIEL MARK WONG', phone: '912 345 4567', avatar: null },
      { id: 2, name: 'JAMES BOND CHEN', phone: '901 234 5678', avatar: null },
      { id: 3, name: 'JACKIE CHAN ABEL', phone: '812 456 7890', avatar: null },
   ],
   Favourites: [
      { id: 1, name: 'BENNY JOHN DOE', phone: '912 345 4567', avatar: null },
      { id: 2, name: 'MABEL ELIZABETH CHEN', phone: '901 234 5678', avatar: null },
      { id: 3, name: 'JACKIE MARY ANNY', phone: '812 456 7890', avatar: null },
   ],
};

const TransferToBank = () => {
   const navigation = useNavigation();
   const [activeTab, setActiveTab] = useState('Recents');
   const [accountNumber, setAccountNumber] = useState('');

   const isButtonDisabled = accountNumber.length < 10;

   const handleGoBack = () => {
      navigation.goBack();
   };

   return (
      <SafeAreaView style={styles.container}>
         {/* header */}
         <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleGoBack}>
               <Entypo name="chevron-small-left" size={28} color="black" style={styles.arrow} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Transfer To Bank Account</Text>
            <TouchableOpacity>
               <Text style={styles.historyText}>History</Text>
            </TouchableOpacity>
         </View>
         <ScrollView style={styles.scrollContainer}>
            {/* transfer message */}
            <View style={styles.instantContainer}>
               <FontAwesome5 name="bitcoin" size={22} color="#4B0082" style={{ marginTop: 5 }} />
               <Text style={styles.instantText}>Free transfer for the day: 3</Text>
            </View>
            {/* recipientAccount */}

            <View style={styles.recipientContainer}>
               <Text style={styles.recipientText}>Recipient Account</Text>
               <View style={styles.recipientInputContainer}>
                  <TextInput
                     style={styles.recipientInput}
                     placeholder="Enter 10 digits Account Number"
                     placeholderTextColor="#999"
                     keyboardType="number-pad"
                     maxLength={10}
                     value={accountNumber}
                     onChangeText={setAccountNumber}
                  />
               </View>
               <View style={styles.line} />
               <View style={styles.selectContainer}>
                  <Text style={styles.selectText}>Select Bank</Text>
                  <TouchableOpacity>
                     <Entypo
                        name="chevron-small-right"
                        size={20}
                        color="grey"
                        style={styles.rightIcon}
                     />
                  </TouchableOpacity>
               </View>
               <View style={styles.line} />
               <TouchableOpacity
                  style={[styles.nextButton, isButtonDisabled && styles.disabledNextButton]}
                  disabled={isButtonDisabled}>
                  <View>
                     <Text style={styles.nextText}>Next</Text>
                  </View>
               </TouchableOpacity>
            </View>

            {/* success monitor */}
            <View style={styles.successContainer}>
               <View style={styles.iconBorder}>
                  <Ionicons name="tv-sharp" size={20} color="#00AA55" />
               </View>
               <Text style={styles.bankText}>Bank Transfer Success Rate Monitor</Text>
               <TouchableOpacity>
                  <Entypo
                     name="chevron-small-right"
                     size={20}
                     color="grey"
                     style={styles.successIcon}
                  />
               </TouchableOpacity>
            </View>

            {/* transfer list */}
            <View style={styles.tabWrapper}>
               <View style={styles.tabRow}>
                  <View style={styles.tabContainer}>
                     {['Recents', 'Favourites'].map((tab) => (
                        <TouchableOpacity
                           key={tab}
                           onPress={() => setActiveTab(tab)}
                           style={[styles.tab]}>
                           <Text
                              style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                              {tab}
                           </Text>
                           {activeTab === tab && <View style={styles.tabIndicator} />}
                        </TouchableOpacity>
                     ))}
                  </View>

                  {/* Search Icon */}
                  <TouchableOpacity style={styles.searchContainer}>
                     <Ionicons name="search" size={20} color="#00AA55" style={styles.searchIcon} />
                  </TouchableOpacity>
               </View>

               {/* items */}
               <View style={styles.transferList}>
                  <FlatList
                     data={transferData[activeTab]}
                     keyExtractor={(item) => item.id.toString()}
                     renderItem={({ item }) => (
                        <View style={styles.transferItem}>
                           {item.avatar ? (
                              <Image source={{ uri: item.avatar }} style={styles.avatar} />
                           ) : (
                              <Image
                                 source={require('../assets/images/profile1.png')}
                                 style={styles.avatar}
                              />
                           )}
                           <TouchableOpacity>
                              <View style={styles.nameSection}>
                                 <Text style={styles.name}>{item.name}</Text>
                                 <Text style={styles.phone}>{item.phone}</Text>
                                 <View />
                              </View>
                           </TouchableOpacity>
                        </View>
                     )}
                  />
                  <TouchableOpacity style={styles.viewAll}>
                     <Text style={styles.viewAllText}>View All</Text>
                     <Entypo
                        name="chevron-small-right"
                        size={18}
                        color="grey"
                        style={styles.viewIcon}
                     />
                  </TouchableOpacity>
               </View>
            </View>

            {/* more event  */}
            <View style={styles.moreEventContainer}>
               <Text style={styles.moreText}>More Events</Text>

               <TouchableOpacity>
                  <View style={styles.eventItems}>
                     <Image
                        source={require('../assets/images/ilotbet.jpg')}
                        style={styles.eventImage}
                     />
                     <Text style={styles.eventText1}>Predict & Win Up to ₦10,000,000!</Text>
                  </View>
                  <Text style={styles.eventText2}>Enjoy FREE predictions and unlock your...</Text>
               </TouchableOpacity>

               <TouchableOpacity>
                  <View style={styles.eventItems2}>
                     <View style={styles.tagContainer}>
                        <Image
                           source={require('../assets/images/tag.png')}
                           style={styles.tagImage}
                        />
                     </View>
                     <Text style={styles.eventText1}>Mega Savings with 15 Vouchers!</Text>
                  </View>
                  <Text style={styles.eventText3}>Unlock 15 vouchers with just...</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default TransferToBank;

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
      marginLeft: 44,
   },
   historyText: {
      marginLeft: 30,
      fontSize: 18,
      color: '#17B169',
   },
   scrollContainer: {
      backgroundColor: '#f9f9f9',
   },
   instantContainer: {
      backgroundColor: '#E6E6FA',
      flexDirection: 'row',
      marginTop: 20,

      padding: 10,
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 10,
   },
   instantText: {
      color: '#4B0082',
      marginTop: 3,
      marginLeft: 8,
      fontSize: 18,
      padding: 5,
   },
   recipientContainer: {
      marginTop: 10,
      backgroundColor: '#fff',

      padding: 15,
      marginHorizontal: 10,
      borderRadius: 10,
   },
   recipientText: {
      fontSize: 18,
      marginTop: 5,
   },
   recipientInputContainer: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      marginHorizontal: 5,
      padding: 10,
      marginTop: 23,
      borderRadius: 8,
      marginRight: 10,
      flex: 1,
   },
   recipientInput: {
      fontSize: 16,
      flex: 1,
   },
   line: {
      borderBottomWidth: 1,
      borderBottomColor: '#f9f9f9',
      marginTop: 20,
   },
   selectContainer: {
      flexDirection: 'row',
      marginTop: 30,
      marginLeft: 10,
   },
   selectText: {
      color: '#999',
      fontSize: 18,
      marginTop: 4,
   },
   rightIcon: {
      marginTop: 4,
      marginLeft: 230,
   },
   nextButton: {
      marginTop: 40,
      alignItems: 'center',
      backgroundColor: '#17B169',
      padding: 10,
      height: 50,
      borderRadius: 25,
      marginHorizontal: 15,
   },
   nextText: {
      marginTop: 8,
      color: '#fff',
      fontSize: 18,
   },
   disabledNextButton: {
      backgroundColor: '#A5DAB3',
   },
   tabWrapper: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginHorizontal: 10,
      marginTop: 15,
      padding: 5,
   },
   tabContainer: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#f9f9f9',
      backgroundColor: '#fff',
      marginTop: 20,
      marginHorizontal: 10,
      borderRadius: 10,
      marginRight: 30,
   },
   tab: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
      position: 'relative',
   },
   activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: '#00AA55',
   },
   tabText: {
      color: '#999',
   },
   activeTabText: {
      color: '#00AA55',
      fontSize: 16,
   },
   tabIndicator: {
      height: 2,
      width: 30,
      backgroundColor: '#00AA55',
      marginTop: 8,
      borderRadius: 10,
      position: 'absolute',
      bottom: 0,
   },
   transferList: {
      marginTop: 20,
      marginLeft: 20,
   },
   transferItem: {
      flexDirection: 'row',
      marginLeft: 10,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f9f9f9',
   },
   avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginBottom: 10,
      backgroundColor: '#f5f5f5',
      padding: 4,
   },
   nameSection: {
      marginLeft: 15,
      marginTop: 10,
   },
   name: {
      fontSize: 16,
      fontWeight: '300',
   },
   phone: {
      fontSize: 16,
      marginTop: 6,
      fontWeight: '300',
   },
   viewAll: {
      marginTop: 10,
      borderRadius: 20,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      width: '23%',
      marginLeft: 125,
      marginBottom: 5,
      padding: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   viewAllText: {
      color: 'grey',
      marginLeft: 5,
   },
   tabRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 25,
      marginTop: 10,
   },
   searchIcon: {
      marginRight: 20,
      marginTop: 15,
      paddingRight: 40,
   },
   successContainer: {
      flexDirection: 'row',
      marginTop: 20,
      marginLeft: 20,
      padding: 10,
      marginHorizontal: 10,
      marginVertical: 8,
      borderRadius: 10,
      backgroundColor: '#fff',
   },
   iconBorder: {
      backgroundColor: '#E8F5E9',
      padding: 8,
      borderRadius: 20,
      marginRight: 10,
   },
   bankText: {
      marginTop: 10,
      fontSize: 16,
   },
   successIcon: {
      marginTop: 10,
      marginLeft: 50,
   },
   viewIcon: {
      marginTop: -1,
      marginLeft: 2,
   },
   moreEventContainer: {
      backgroundColor: '#fff',
      marginTop: 15,
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 10,

      marginBottom: 20,
   },

   moreText: {
      marginTop: 3,
      fontSize: 18,
      fontWeight: 'bold',
   },
   eventImage: {
      width: 45,
      height: 45,
      borderRadius: 15,
   },
   tagImage: {
      width: 50,
      height: 50,
   },
   tagContainer: {
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
   },
   eventItems: {
      flexDirection: 'row',
      padding: 5,
      marginTop: 30,
   },
   eventText1: {
      fontSize: 17,
      marginLeft: 10,
      marginTop: 5,
   },
   eventText2: {
      marginLeft: 59,
      marginTop: -20,
      color: '#999',
      fontSize: 15,
   },
   eventItems2: {
      flexDirection: 'row',
      padding: 5,
      marginTop: 30,
   },
   eventText3: {
      marginLeft: 64,
      marginTop: -24,
      color: '#999',
      fontSize: 15,
   },
});
