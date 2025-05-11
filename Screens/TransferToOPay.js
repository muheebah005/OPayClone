import { Entypo } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
      { id: 1, name: 'DANIEL MARK WONG', phone: '912 345 4567', avatar: null },
      { id: 2, name: 'MABEL ELIZABETH CHEN', phone: '901 234 5678', avatar: null },
      { id: 3, name: 'JACKIE CHAN ABEL', phone: '812 456 7890', avatar: null },
   ],
};

const TransferToOPay = () => {
   const navigation = useNavigation();
   const [activeTab, setActiveTab] = useState('Recents');

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
            <Text style={styles.headerText}>Transfer To OPay Account</Text>
            <TouchableOpacity>
               <Text style={styles.historyText}>History</Text>
            </TouchableOpacity>
         </View>
         {/* body */}
         <ScrollView style={styles.scrollContainer}>
            {/* transfer message */}
            <View style={styles.instantContainer}>
               <FontAwesome5 name="bitcoin" size={22} color="#17B169" style={{ marginTop: 5 }} />
               <Text style={styles.instantText}>Instant, Zero Issues, Free</Text>
            </View>
            {/* recipientAccount */}
            <View style={styles.recipientContainer}>
               <Text style={styles.recipientText}>Recipient Account</Text>
               <View style={styles.recipientInputContainer}>
                  <TextInput
                     style={styles.recipientInput}
                     placeholder="Phone No./OPay Account No./Name"
                     placeholderTextColor="#999"
                     keyboardType="default"
                  />
                  <TouchableOpacity>
                     <MaterialCommunityIcons
                        name="line-scan"
                        size={20}
                        color="#999"
                        style={styles.scanIcon}
                     />
                  </TouchableOpacity>
               </View>
               <Text style={styles.numberText}>
                  Don't know the recipient's OPay account number?
               </Text>
               <Text style={styles.askText}>Ask them {'>'} </Text>
            </View>

            {/* Recents and Favourites */}
            <View style={styles.tabWrapper}>
               <View style={styles.tabContainer}>
                  {['Recents', 'Favourites'].map((tab) => (
                     <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        style={[styles.tab]}>
                        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                           {tab}
                        </Text>

                        {activeTab === tab && <View style={styles.tabIndicator} />}
                     </TouchableOpacity>
                  ))}
               </View>
               {/* items */}
               <View style={styles.transferList}>
                  <FlatList
                     data={transferData[activeTab]}
                     keyExtractor={(item) => item.id}
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
                     <Entypo name="chevron-small-right" size={20} color="grey" />
                  </TouchableOpacity>
               </View>
            </View>
            {/* see more */}
            <View style={styles.seeMoreContainer}>
               <View style={styles.userIconContainer}>
                  <FontAwesome5 name="users" size={20} color="#17B169" style={styles.userIcon} />
               </View>
               <View style={styles.seeContainer}>
                  <Text style={styles.seeText}>See who else is using OPay</Text>
                  <Text style={styles.sendText}>Send money to your contact for free</Text>
               </View>
               <TouchableOpacity>
                  <Entypo
                     name="chevron-small-right"
                     size={20}
                     color="grey"
                     style={styles.rightIcon}
                  />
               </TouchableOpacity>
            </View>
            {/* more event  */}
            <View style={styles.moreEventContainer}>
               <Text style={styles.moreText}>More Events</Text>
               <View style={styles.row}>
                  <View style={styles.tagContainer}>
                     <Image source={require('../assets/images/tag.png')} style={styles.tagImage} />
                  </View>
                  <View style={styles.tagTextContainer}>
                     <Text style={styles.tagText}>Claim 15 Discounts</Text>
                     <Text style={styles.claimText}>Claim 15 Discounts with 199 on any Bill</Text>
                  </View>
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default TransferToOPay;

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
      marginLeft: 46,
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
      backgroundColor: '#E8F5E9',
      flexDirection: 'row',
      marginTop: 20,

      padding: 10,
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 10,
   },
   instantText: {
      color: '#17B169',
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
      backgroundColor: '#f5f5f5',
      marginHorizontal: 5,
      padding: 10,
      marginTop: 23,
      borderRadius: 8,
      marginRight: 10,
   },
   scanIcon: {
      marginLeft: 70,
   },
   recipientInput: {
      fontSize: 16,
   },
   numberText: {
      marginTop: 18,
      color: 'grey',
      fontSize: 16,
   },
   askText: {
      marginTop: 5,
      color: '#17B169',
      fontSize: 16,
   },
   tabWrapper: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginHorizontal: 10,
      marginTop: 20,
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
      marginLeft: 130,
      marginBottom: 5,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   viewAllText: {
      color: 'grey',
   },
   seeMoreContainer: {
      flexDirection: 'row',

      marginTop: 20,
      padding: 20,
      marginHorizontal: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      paddingVertical: 15,
   },
   userIconContainer: {
      backgroundColor: '#E8F5E9',
      padding: 8,
      borderRadius: 30,
   },
   seeContainer: {
      marginLeft: 15,
      marginTop: 5,
   },
   seeText: {
      fontSize: 16,
   },
   sendText: {
      color: 'grey',
      fontSize: 13,
      marginTop: 4,
   },
   rightIcon: {
      marginLeft: 90,
      marginTop: 10,
   },
   moreEventContainer: {
      marginTop: 20,
      padding: 20,
      marginHorizontal: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      paddingVertical: 15,
   },
   tagImage: {
      width: 50,
      height: 50,
   },
   tagContainer: {
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
   },
   tagTextContainer: {
      marginLeft: 15,
      marginTop: 10,
   },
   tagText: {
      fontSize: 17,
   },
   claimText: {
      color: 'grey',
      marginTop: 6,
      fontSize: 15,
   },
   row: {
      flexDirection: 'row',
      marginTop: 10,
   },
   moreText: {
      padding: 10,
      marginBottom: 10,
      fontSize: 20,
      marginRight: 10,
      fontWeight: 'bold',
   },
});
