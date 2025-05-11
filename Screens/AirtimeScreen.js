import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
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

const airtimeTopUp = [
   { id: 1, amount: 50, cashback: 1 },
   { id: 2, amount: 100, cashback: 2 },
   { id: 3, amount: 200, cashback: 4 },
   { id: 4, amount: 500, cashback: 10 },
   { id: 5, amount: 1000, cashback: 20 },
   { id: 6, amount: 2000, cashback: 40 },
];

const AirtimeScreen = () => {
   const navigation = useNavigation();
   const [amount, setAmount] = useState('');
   const isButtonDisabled = parseInt(amount) < 50 || isNaN(parseInt(amount));

   const handleGoBack = () => {
      navigation.goBack();
   };

   const renderItem = ({ item }) => {
      return (
         <TouchableOpacity style={styles.itemCard}>
            <View style={styles.coloredContainer}>
               <View style={styles.cashbackContainer}>
                  <Text style={styles.cashback}>₦{item.cashback} Cashback</Text>
               </View>
               <View style={styles.amountContainer}>
                  <Text style={styles.amount}>₦{item.amount}</Text>
                  <Text style={styles.pay}>Pay ₦{item.amount}</Text>
               </View>
            </View>
         </TouchableOpacity>
      );
   };

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleGoBack}>
               <Entypo name="chevron-small-left" size={28} color="black" style={styles.arrow} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Airtime</Text>
            <TouchableOpacity>
               <Text style={styles.historyText}>History</Text>
            </TouchableOpacity>
         </View>
         {/* scrollable */}
         <ScrollView style={styles.scrollContainer}>
            <View style={styles.numContainer}>
               <Image source={require('../assets/images/mtn.jpg')} style={styles.mtnImage} />
               <AntDesign name="caretdown" size={10} color="grey" style={styles.downIcon} />
               <View style={styles.verticalLine} />

               <View style={styles.inputContainer}>
                  <TextInput
                     placeholder="0XX XXXX XXXX"
                     style={styles.airtimeInput}
                     placeholderTextColor="#999"
                     keyboardType="numeric"
                     maxLength={11}
                  />
               </View>
               <FontAwesome name="user-circle" size={28} color="#17B169" style={styles.userIcon} />
            </View>
            {/* airtime section */}
            <View style={styles.airtimeContainer}>
               <Text style={styles.topUpText}>Top Up</Text>

               <FlatList
                  data={airtimeTopUp}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={3}
                  columnWrapperStyle={styles.row}
                  contentContainerStyle={{ paddingBottom: 20 }}
               />

               <View style={styles.topUpTextInputContainer}>
                  <Text style={styles.naira}>₦</Text>
                  <View style={styles.topInputContainer}>
                     <TextInput
                        style={styles.topupInput}
                        placeholder="50 - 500,000"
                        placeholderTextColor="999"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                        maxLength={6}
                     />
                  </View>

                  <TouchableOpacity
                     style={[styles.payButton, isButtonDisabled && styles.disabledPayButton]}
                     disabled={isButtonDisabled}>
                     <Text style={styles.payText}>Pay</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.line} />
            </View>

            {/* airtime service */}
            <View style={styles.airtimeServiceContainer}>
               <Text style={styles.airtimeServiceText}>Airtime Service</Text>
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
                        source={require('../assets/images/ilotbet.jpg')}
                        style={styles.ilotImg}
                     />
                     <Text style={styles.getText}>Get an Iphone 16 and cash bonuses n...</Text>
                  </View>
                  <Text style={styles.winText}>Win an Iphone 16 and cash bonuses...</Text>
               </TouchableOpacity>

               <TouchableOpacity>
                  <View style={styles.item1Container}>
                     <Image
                        source={require('../assets/images/geniex.png')}
                        style={styles.geniexImg}
                     />
                     <Text style={styles.getText}>Top UP with GENIEX Now!</Text>
                  </View>
                  <Text style={styles.winText}>Enjoy your fast airtime experience anyw...</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default AirtimeScreen;

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
      marginLeft: 102,
   },
   historyText: {
      marginLeft: 120,
      fontSize: 18,
      color: '#17B169',
   },
   scrollContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',
   },
   mtnImage: {
      width: 38,
      height: 35,
      borderRadius: 25,
      marginLeft: 20,
   },
   numContainer: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 15,
   },
   verticalLine: {
      height: '90%',
      width: 1,
      backgroundColor: 'lightgrey',
      marginLeft: 12,
   },
   downIcon: {
      marginTop: 13,
      marginLeft: 14,
   },
   userIcon: {
      marginTop: 2,
      marginRight: 7,
   },
   inputContainer: {
      flex: 1,
   },
   airtimeInput: {
      fontSize: 18,
      marginTop: 10,
      marginLeft: 10,
   },

   airtimeContainer: {
      backgroundColor: '#fff',
      marginTop: 20,
      borderRadius: 10,
      padding: 15,
      marginHorizontal: 10,
   },
   topUpText: {
      marginBottom: 20,
      fontSize: 18,
      fontWeight: 'bold',
   },
   itemCard: {
      flex: 1,
      margin: 5,
      borderRadius: 10,
      backgroundColor: '#f5f5f5',
      overflow: 'hidden',
      maxWidth: '32%',
   },
   coloredContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   row: {
      justifyContent: 'space-between',
   },
   cashbackContainer: {
      backgroundColor: '#DFF5E3',
      width: '100%',
      paddingVertical: 6,
      alignItems: 'center',
   },
   cashback: {
      color: '#17B169',
      fontSize: 14,
   },
   amountContainer: {
      paddingVertical: 10,
      alignItems: 'center',
   },
   amount: {
      fontSize: 19,
   },
   pay: {
      fontSize: 15,
      marginTop: 10,
      color: 'grey',
   },
   topUpTextInputContainer: {
      marginTop: 20,
      flexDirection: 'row',
      marginLeft: 10,
   },
   naira: {
      marginRight: 5,
      fontSize: 25,
      marginTop: 9,
   },
   topupInput: {
      marginLeft: 8,
      fontSize: 18,
      marginTop: 11,
   },
   line: {
      height: 1,
      backgroundColor: 'transparent',
      borderWidth: 0.5,
      borderColor: '#D3D3D3',
      width: '85%',
      alignSelf: 'center',
      marginVertical: 20,
      marginRight: 27,
      borderStyle: 'solid',
   },
   payButton: {
      backgroundColor: '#17B169',

      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
   },
   disabledPayButton: {
      backgroundColor: '#A5DAB3',
   },
   payText: {
      fontSize: 16,
      color: '#fff',
   },
   topInputContainer: {
      flex: 1,
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
