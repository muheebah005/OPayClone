import Entypo from '@expo/vector-icons/Entypo';
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

const Tabs = ['Hot', 'Premium'];

const offers = {
   Hot: [
      { id: 1, title: 'DSTV Padi', duration: '1 Month', price: '4,400' },
      { id: 2, title: 'DSTV Yanga', duration: '1 Month', price: '6,000' },
      { id: 3, title: 'DSTV Confam', duration: '1 Month', price: '11,000' },
      { id: 4, title: 'DSTV Compact', duration: '1 Month', price: '19,000' },
      { id: 5, title: 'DSTV Compact Plus', duration: '1 Month', price: '30,000' },
      { id: 6, title: 'DSTV Stream Premium', duration: '1 Month', price: '44,500' },
   ],
   Premium: [
      { id: 1, title: 'DSTV Premium', duration: '1 Month', price: '44,500' },
      { id: 2, title: 'DSTV Premium + French', duration: '1 Month', price: '69,000' },
      { id: 3, title: 'DSTV Premium + Showmax', duration: '1 Month', price: '44,500' },
      { id: 4, title: 'DSTV PremiumFrench + Showmax', duration: '1 Month', price: '69,000' },
      { id: 5, title: 'DSTV PremiumAsia', duration: '1 Month', price: '50,500' },
      { id: 6, title: 'DSTV PremiumAsia Showmax', duration: '1 Month', price: '50,500' },
      { id: 7, title: 'DSTV Premium + Xtraview', duration: '1 Month', price: '50,500' },
      { id: 8, title: 'DSTV Premium + French + Xtraview', duration: '1 Month', price: '75,000' },
      { id: 9, title: 'DSTV PremiumAsia + Xtraview', duration: '1 Month', price: '56,500' },
      { id: 10, title: 'DSTV Stream Premium', duration: '1 Month', price: '44,500' },
   ],
};

const TvScreen = () => {
   const [smartCardNo, setSmartCardNo] = useState('');
   const [selectedTab, setSelectedTab] = useState('Hot');
   const activeOffers = offers[selectedTab];
   const navigation = useNavigation();

   const clearInput = () => {
      setSmartCardNo('');
   };

   const handleBackButton = () => {
      navigation.goBack();
   };

   const handleProceedButton = () => {
      console.log('proceed button pressed');
   };

   const handleTabPress = (tab) => {
      return (
         <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTab]}>
               {tab === 'Hot' ? ' Hot offers' : tab}
            </Text>
            {selectedTab === tab && <View style={styles.tabIndicator} />}
         </TouchableOpacity>
      );
   };

   const renderTabOffers = ({ item }) => {
      return (
         <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.durationContainer}>
               <Text style={styles.duration}>{item.duration}</Text>
            </View>
            <Text style={styles.price}>₦{item.price}</Text>
         </TouchableOpacity>
      );
   };

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.header}>
            <TouchableOpacity onPress={handleBackButton}>
               <Entypo name="chevron-small-left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.tvText}>TV</Text>
            <TouchableOpacity>
               <Text style={styles.historyText}>History</Text>
            </TouchableOpacity>
         </View>
         <ScrollView style={styles.scrollContainer}>
            <View style={styles.tvContainer}>
               <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../assets/images/dstv.jpeg')} style={styles.image} />
                  <Text style={styles.dstvText}>DStv</Text>
                  <TouchableOpacity>
                     <Entypo
                        name="chevron-small-right"
                        size={24}
                        color="grey"
                        style={styles.rightIcon}
                     />
                  </TouchableOpacity>
               </View>
               <View style={styles.horizontalLine} />
               <Text style={styles.highlight}>
                  Share the joy this season with DStv - your home of drama series and football
               </Text>
            </View>
            {/* smartcard container */}
            <View style={styles.smartcardContainer}>
               <View style={styles.smartcardNoContainer}>
                  <Text style={styles.smartCardText}>Smartcard Number</Text>
                  <Text style={styles.beneficiariesText}>Bene...iaries</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={24}
                     color="grey"
                     style={{ marginTop: -5, marginLeft: 5 }}
                  />
               </View>

               {/* input */}
               <View style={styles.inputContainer}>
                  <TextInput
                     placeholderTextColor="#999"
                     placeholder="Enter Your Smartcard Number"
                     value={smartCardNo}
                     onChangeText={setSmartCardNo}
                     keyboardType="numeric"
                     style={styles.input}
                  />
                  {smartCardNo.length > 0 && (
                     <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
                        <Entypo name="circle-with-cross" size={24} color="grey" />
                     </TouchableOpacity>
                  )}
                  {smartCardNo.length >= 5 && (
                     <TouchableOpacity onPress={handleProceedButton} style={styles.proceedButton}>
                        <Text style={styles.proceedText}>Proceed</Text>
                     </TouchableOpacity>
                  )}
               </View>
            </View>

            {/* offers */}
            <View style={styles.offerContainer}>
               <View style={styles.tabContainer}>{Tabs.map(handleTabPress)}</View>
               <FlatList
                  renderItem={renderTabOffers}
                  data={activeOffers}
                  keyExtractor={(item) => item.id}
                  numColumns={2}
                  columnWrapperStyle={styles.row}
                  contentContainerStyle={styles.grid}
               />
            </View>

            {/* more event */}
            <View style={styles.moreEventContainer}>
               <Text style={styles.moreText}>More Events</Text>
               <View style={styles.row}>
                  <View style={styles.tagContainer}>
                     <Image source={require('../assets/images/tag.png')} style={styles.tagImage} />
                  </View>
                  <View style={styles.tagTextContainer}>
                     <Text style={styles.tagText}>Amazing Deal!</Text>
                     <Text style={styles.claimText}>FIFTEEN vouchers to save you money</Text>
                  </View>
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default TvScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
   },
   tvText: {
      fontSize: 22,
      fontWeight: 600,
   },
   historyText: {
      fontSize: 18,
      color: '#17B169',
   },
   scrollContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',
   },
   tvContainer: {
      backgroundColor: '#fff',
      padding: 15,
   },
   image: {
      width: 40,
      height: 40,
      borderRadius: 50,
      marginLeft: 10,
   },
   dstvText: {
      marginTop: 10,
      marginLeft: 8,
      fontSize: 22,
      fontWeight: 500,
   },
   rightIcon: {
      marginTop: 10,
      marginLeft: 255,
   },
   horizontalLine: {
      height: 1,
      backgroundColor: 'transparent',
      borderWidth: 0.5,
      borderColor: '#D3D3D3',
      width: '95%',
      alignSelf: 'center',
      marginVertical: 20,
      borderStyle: 'solid',
      marginTop: 10,
   },
   highlight: {
      flex: 1,
      fontSize: 16,
      marginLeft: 8,
      color: '#17B169',
   },
   smartcardContainer: {
      backgroundColor: '#fff',
      marginTop: 15,
      marginHorizontal: 10,
      padding: 15,
      borderRadius: 10,
   },
   smartcardNoContainer: {
      flexDirection: 'row',
      marginTop: 5,
   },
   smartCardText: {
      fontSize: 15,
      fontWeight: 310,
      marginLeft: 5,
   },
   beneficiariesText: {
      fontSize: 15,
      marginLeft: 145,
      color: 'grey',
   },
   inputContainer: {
      marginTop: 20,
      flexDirection: 'row',
      padding: 12,
   },
   input: {
      flex: 1,
      fontSize: 18,
   },
   clearButton: {
      marginRight: 22,
   },
   proceedButton: {
      backgroundColor: '#17B169',
      padding: 10,
      borderRadius: 20,
      marginTop: -5,
   },
   proceedText: {
      color: '#fff',
      fontSize: 15,
   },
   tabContainer: {
      flexDirection: 'row',
      marginTop: 10,
      marginLeft: 10,
      marginBottom: 10,
   },
   offerContainer: {
      backgroundColor: '#fff',
      marginTop: 15,
      marginHorizontal: 10,
      padding: 15,
      borderRadius: 10,
   },
   tabText: {
      fontSize: 18,
      marginLeft: 10,
      textAlign: 'center',
      paddingVertical: 5,
   },
   activeTab: {
      fontWeight: 'bold',
   },
   tabIndicator: {
      height: 4,
      backgroundColor: '#17B169',
      width: '30%',
      marginLeft: 25,
      borderRadius: 10,
   },
   row: {
      marginBottom: 15,
      marginLeft: 8,
      justifyContent: 'flex-start',
      gap: 10,
   },
   card: {
      flex: 1,
      margin: 5,
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
      padding: 15,
   },
   title: {
      fontSize: 17,
      marginTop: 5,
      marginBottom: 6,
   },
   durationContainer: {
      backgroundColor: '#FFECD1',
      borderRadius: 3,
      width: 50,
      paddingVertical: 3,
      alignItems: 'center',
      marginBottom: 5,
      marginTop: 5,
   },
   duration: {
      color: '#FFAA33',
      fontWeight: 300,
   },
   price: {
      fontSize: 18,
      fontWeight: 600,
      marginTop: 5,
      marginBottom: 5,
   },
   moreEventContainer: {
      marginTop: 20,
      padding: 20,
      marginHorizontal: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      paddingVertical: 10,
      marginBottom: 20,
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
