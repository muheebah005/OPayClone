import { MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
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

const Tabs = ['Hot', 'Daily', 'Weekly', 'Monthly', 'XtraValue'];

const dataPlans = {
   Hot: [
      {
         id: 1,
         data: '1GB',
         validity: '1 Day',
         price: '500',
         cashback: '10',
         bonus: '1GB+1.5mins',
      },
      {
         id: 2,
         data: '2.5GB',
         validity: '2 Days',
         price: '900',
         cashback: '18',
      },
      {
         id: 3,
         data: '500MB',
         validity: '7 Days',
         price: '500',
         cashback: '10',
      },
      {
         id: 4,
         data: '1GB',
         validity: '7 Days',
         price: '800',
         cashback: '16',
      },
      {
         id: 5,
         data: '2GB',
         validity: '30 Days',
         price: '1,500',
         cashback: '30',
         bonus: '2GB+2mins',
      },
      {
         id: 6,
         data: '3.5GB',
         validity: '30 Days',
         price: '2,500',
         cashback: '25',
         bonus: '3.5GB+5min',
      },
   ],
   Daily: [
      {
         id: 1,
         data: '110MB',
         validity: '1 Day',
         price: '100',
         cashback: '2',
      },
      {
         id: 2,
         data: '500MB',
         validity: '1 Day',
         price: '350',
         cashback: '7',
         bonus: '1GB+1.5mins',
      },
      {
         id: 3,
         data: '1GB',
         validity: '1 Day',
         price: '500',
         cashback: '10',
      },
      {
         id: 4,
         data: '1.5GB',
         validity: '2 Days',
         price: '600',
         cashback: '12',
         bonus: '+YTM 100MB',
      },
      {
         id: 5,
         data: '2GB',
         validity: '2 Days',
         price: '750',
         cashback: '15',
      },
      {
         id: 6,
         data: '2.5GB',
         validity: '2 Days',
         price: '900',
         cashback: '18',
         bonus: '1GB+1.5mins',
      },
      {
         id: 7,
         data: '3.2GB',
         validity: '2 Days',
         price: '1,000',
         cashback: '20',
      },
      {
         id: 8,
         data: '3.2GB',
         validity: '2 Days',
         price: '1,000',
         cashback: '20',
         bonus: '1GB+1.5mins',
      },
      {
         id: 9,
         data: '3.2GB',
         validity: '2 Days',
         price: '1,000',
         cashback: '20',
      },
   ],
   Weekly: [
      {
         id: 1,
         data: '110MB',
         validity: '1 Day',
         price: '100',
         cashback: '2',
      },
      {
         id: 2,
         data: '500MB',
         validity: '1 Day',
         price: '350',
         cashback: '7',
         bonus: '1GB+1.5mins',
      },
      {
         id: 3,
         data: '1GB',
         validity: '1 Day',
         price: '500',
         cashback: '10',
      },
      {
         id: 4,
         data: '1.5GB',
         validity: '2 Days',
         price: '600',
         cashback: '12',
         bonus: '+YTM 100MB',
      },
      {
         id: 5,
         data: '2GB',
         validity: '2 Days',
         price: '750',
         cashback: '15',
      },
      {
         id: 6,
         data: '2.5GB',
         validity: '2 Days',
         price: '900',
         cashback: '18',
         bonus: '1GB+1.5mins',
      },
      {
         id: 7,
         data: '3.2GB',
         validity: '2 Days',
         price: '1,000',
         cashback: '20',
      },
      {
         id: 8,
         data: '4.2GB',
         validity: '2 Days',
         price: '1,500',
         cashback: '25',
         bonus: '1GB+1.5mins',
      },
      {
         id: 9,
         data: '4.6GB',
         validity: '2 Days',
         price: '2,500',
         cashback: '25',
      },
   ],
   Monthly: [
      {
         id: 1,
         data: '110MB',
         validity: '1 Day',
         price: '100',
         cashback: '2',
      },
      {
         id: 2,
         data: '500MB',
         validity: '1 Day',
         price: '350',
         cashback: '7',
      },
      {
         id: 3,
         data: '1GB',
         validity: '1 Day',
         price: '500',
         cashback: '10',
         bonus: '1GB+1.5mins',
      },
      {
         id: 4,
         data: '1.5GB',
         validity: '2 Days',
         price: '600',
         cashback: '12',
         bonus: '+YTM 100MB',
      },
      {
         id: 5,
         data: '2GB',
         validity: '2 Days',
         price: '750',
         cashback: '15',
         bonus: '1GB+1.5mins',
      },
      {
         id: 6,
         data: '2.5GB',
         validity: '2 Days',
         price: '900',
         cashback: '18',
      },
      {
         id: 7,
         data: '3.2GB',
         validity: '2 Days',
         price: '1,000',
         cashback: '20',
         bonus: '1GB+1.5mins',
      },
      {
         id: 8,
         data: '4.2GB',
         validity: '2 Days',
         price: '1,500',
         cashback: '25',
      },
      {
         id: 9,
         data: '4.5GB',
         validity: '2 Days',
         price: '2,000',
         cashback: '27',
      },
      {
         id: 10,
         data: '4.5GB',
         validity: '2 Days',
         price: '2,500',
         cashback: '30',
      },
      {
         id: 11,
         data: '4.7GB',
         validity: '2 Days',
         price: '2,700',
         cashback: '34',
      },
      {
         id: 12,
         data: '5.0GB',
         validity: '2 Days',
         price: '3,000',
         cashback: '37',
      },
      {
         id: 13,
         data: '5.0GB',
         validity: '2 Days',
         price: '3,000',
         cashback: '37',
      },
      {
         id: 14,
         data: '5.0GB',
         validity: '2 Days',
         price: '3,000',
         cashback: '37',
      },
      {
         id: 15,
         data: '5.2GB',
         validity: '2 Days',
         price: '3,200',
         cashback: '37',
      },
   ],
   XtraValue: [
      {
         id: 1,
         data: '110MB',
         validity: '1 Day',
         price: '100',
         cashback: '2',
      },
      {
         id: 2,
         data: '500MB',
         validity: '1 Day',
         price: '350',
         cashback: '7',
      },
      {
         id: 3,
         data: '1GB',
         validity: '1 Day',
         price: '500',
         cashback: '10',
         bonus: '1GB+1.5mins',
      },
   ],
};

const DataScreen = () => {
   const navigation = useNavigation();
   const [activeTab, setActiveTab] = useState('Hot');
   const activeDataPlans = dataPlans[activeTab];

   const handleGoBack = () => {
      navigation.goBack();
   };

   const handleTabPress = (tab) => (
      <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
         <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>
            {tab === 'Hot' ? '🔥 Hot ' : tab}
         </Text>
         {activeTab === tab && <View style={styles.tabIndicator} />}
      </TouchableOpacity>
   );

   const renderTabs = ({ item }) => {
      const match = item.data.match(/^([\d.]+)([A-Za-z]+)$/);
      const number = match ? match[1] : item.data;
      const unit = match ? match[2] : '';

      return (
         <TouchableOpacity style={styles.card}>
            <View style={styles.cardContainer}>
               <Text style={styles.data}>
                  {number}
                  <Text style={styles.dataUnit}>{unit}</Text>
               </Text>
               <Text style={styles.validity}>{item.validity}</Text>
               <Text style={styles.price}>₦{item.price}</Text>
               <Text style={styles.cashback}>₦{item.cashback} Cashback</Text>
               {item.bonus && (
                  <View style={styles.bonusContainer}>
                     <Text style={styles.bonus}>{item.bonus}</Text>
                  </View>
               )}
            </View>
         </TouchableOpacity>
      );
   };

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleGoBack}>
               <Entypo name="chevron-small-left" size={26} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Mobile Data</Text>
            <TouchableOpacity>
               <Text style={styles.history}>History</Text>
            </TouchableOpacity>
         </View>

         {/* scrollable */}
         <ScrollView style={styles.scrollContainer}>
            {/* number input */}
            <View style={styles.numberContainer}>
               <Image source={require('../assets/images/mtn.jpg')} style={styles.mtnImg} />
               <AntDesign name="caretdown" size={10} color="grey" style={styles.downArrow} />
               <View style={styles.verticalLine} />

               <View style={styles.inputContainer}>
                  <TextInput
                     placeholder="0XX XXXX XXXX"
                     placeholderTextColor="#999"
                     maxLength={11}
                     style={styles.input}
                     keyboardType="numeric"
                  />
               </View>
               <FontAwesome name="user-circle" size={28} color="#17B169" style={styles.userIcon} />
            </View>

            {/* data details */}
            <View style={styles.dataDetails}>
               <View style={styles.tabContainer}>{Tabs.map(handleTabPress)}</View>
               <FlatList
                  data={activeDataPlans}
                  renderItem={renderTabs}
                  keyExtractor={(item) => item.id}
                  numColumns={3}
                  columnWrapperStyle={styles.row}
                  contentContainerStyle={styles.grid}
               />
            </View>

            {/* data service */}
            <View style={styles.airtimeServiceContainer}>
               <Text style={styles.airtimeServiceText}>Mobile Data Service</Text>
               <View style={styles.airtimeItemContainer}>
                  <View style={styles.phoneIcon}>
                     <MaterialCommunityIcons name="cellphone-text" size={24} color="#17B169" />
                  </View>
                  <Text style={styles.ussdText}>USSD enquiry</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={24}
                     color="black"
                     style={styles.rightIcon}
                  />
               </View>
               <Text style={styles.checkText}>Check phone balance and more</Text>
            </View>

            {/* more event */}
            <View style={styles.moreEventContainer}>
               <Text style={styles.moreText}>More Events</Text>

               <TouchableOpacity style={styles.itemSpace}>
                  <View style={styles.item1Container}>
                     <Image
                        source={require('../assets/images/geniex.png')}
                        style={styles.ilotImg}
                     />
                     <Text style={styles.getText}>Get Affordable Data on GENIEX!</Text>
                  </View>
                  <Text style={styles.winText}>Enjoy your fast network experience any...</Text>
               </TouchableOpacity>

               <TouchableOpacity>
                  <View style={styles.item1Container}>
                     <Image
                        source={require('../assets/images/light.png')}
                        style={styles.geniexImg}
                     />
                     <Text style={styles.getText}>Power up your hustle!</Text>
                  </View>
                  <Text style={styles.winText}>Seamlessly pay your Electricity bill today</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default DataScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#fff',
   },
   headerText: {
      fontSize: 20,
      fontWeight: 'bold',
   },
   history: {
      fontSize: 17,
      color: '#17B169',
   },
   scrollContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',
   },
   numberContainer: {
      flexDirection: 'row',
      padding: 18,
      backgroundColor: '#fff',
   },
   mtnImg: {
      width: 38,
      height: 36,
      borderRadius: 25,
      marginLeft: 15,
   },
   downArrow: {
      marginLeft: 12,
      marginTop: 12,
   },
   verticalLine: {
      height: '90%',
      width: 1,
      backgroundColor: 'lightgrey',
      marginLeft: 16,
   },
   inputContainer: {
      flex: 1,
   },
   input: {
      marginTop: 12,
      marginLeft: 10,
      fontSize: 20,
   },
   userIcon: {
      marginRight: 7,
      marginTop: 5,
   },
   // grid
   tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
      marginBottom: 15,
   },
   dataDetails: {
      backgroundColor: '#fff',
      marginTop: 20,
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 10,
   },
   tabText: {
      fontSize: 16,
      fontWeight: 350,
      textAlign: 'center',
      paddingVertical: 5,
      color: 'grey',
   },
   activeTab: {
      color: 'black',
      fontWeight: 'bold',
   },
   tabIndicator: {
      backgroundColor: '#17B169',
      height: 4,
      width: '50%',
      borderRadius: 10,
      marginLeft: 5,
   },
   row: {
      justifyContent: 'space-between',
      marginBottom: 15,
   },
   card: {
      flex: 1,
      margin: 5,
      borderRadius: 10,
      backgroundColor: '#f5f5f5',
      overflow: 'hidden',
   },
   cardContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   data: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 7,
      marginTop: 5,
   },
   dataUnit: {
      fontSize: 14,
      fontWeight: 'normal',
   },
   validity: {
      marginBottom: 7,
      fontSize: 15,
   },
   price: {
      marginBottom: 7,
      fontSize: 15,
   },
   cashback: {
      marginBottom: 7,
      fontSize: 12,
      color: '#17B169',
   },
   bonus: {
      fontSize: 12,
      marginTop: 2,
      color: '#FFAA33',
   },
   bonusContainer: {
      backgroundColor: '#FFECD1',
      width: '100%',
      paddingVertical: 2,
      alignItems: 'center',
   },

   airtimeServiceContainer: {
      backgroundColor: '#fff',
      marginTop: 15,
      borderRadius: 10,
      padding: 15,
      marginHorizontal: 10,
      paddingVertical: 20,
   },
   airtimeServiceText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 14,
      marginLeft: 8,
   },
   airtimeItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
   },
   phoneIcon: {
      marginLeft: 5,
      marginRight: 10,
      backgroundColor: '#DFF5E3',
      padding: 6,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#17B169',
   },
   ussdText: {
      marginTop: -10,
      fontSize: 16,
   },
   rightIcon: {
      marginLeft: 202,
      color: 'grey',
   },
   checkText: {
      marginLeft: 50,
      marginTop: -16,
      color: 'grey',
   },

   item1Container: {
      marginTop: 10,
      marginLeft: 10,
   },
   ilotImg: {
      width: 42,
      height: 42,
      borderRadius: 10,
   },
   geniexImg: {
      width: 42,
      height: 42,
      borderRadius: 10,
      backgroundColor: '#f5f5f5',
   },
   item1Container: {
      flexDirection: 'row',
      marginLeft: 16,
   },
   getText: {
      marginTop: 5,
      marginLeft: 12,
      fontSize: 18,
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
      marginBottom: 28,
      marginLeft: 14,
   },
   winText: {
      marginLeft: 70,
      marginTop: -12,
      color: 'grey',
   },
   itemSpace: {
      marginBottom: 25,
   },
});
