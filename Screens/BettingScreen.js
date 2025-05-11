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
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-virtualized-view';

const ilotTopUp = [
   { id: 1, amount: 100, cashback: 20 },
   { id: 2, amount: 500, cashback: 60 },
   { id: 3, amount: '1,000', cashback: 100 },
   { id: 4, amount: '2,000', cashback: 100 },
   { id: 5, amount: '5,000', cashback: 20 },
   { id: 6, amount: '10,000', cashback: 100 },
];

const BettingScreen = () => {
   const navigation = useNavigation();
   const [userId, setUserId] = useState('');
   const [error, setError] = useState('');
   const [amount, setAmount] = useState('');
   const isButtonDisabled = parseInt(amount) < 50 || isNaN(parseInt(amount));

   const handleBackButton = () => {
      navigation.goBack();
   };

   const clearInput = () => {
      setUserId('');
   };

   const handleTextChange = (text) => {
      setUserId(text);

      if (text.length === 0) {
         setError('Please Enter the correct User ID');
      } else if (text.length !== 10) {
         setError('Please Enter the correct User ID');
      } else {
         setError('');
      }
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
         <View style={styles.header}>
            <TouchableOpacity onPress={handleBackButton}>
               <Entypo name="chevron-small-left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.bettingText}>Betting</Text>
            <TouchableOpacity>
               <Text style={styles.history}>History</Text>
            </TouchableOpacity>
         </View>
         <ScrollView style={styles.scrollContainer}>
            <View style={styles.ilotContainer}>
               <View style={styles.ilotRow}>
                  <Image
                     source={require('../assets/images/ilotbet.jpg')}
                     style={styles.ilotImage}
                  />
                  <Text style={styles.ilot}>iLOTBet</Text>
                  <Entypo
                     name="chevron-small-right"
                     size={30}
                     color="grey"
                     style={styles.ilotIcon}
                  />
               </View>
               <View style={styles.horizontalLine} />
               <Text style={styles.ilotText}>
                  Win Big with iLOTBet! Deposit and get a chance to hit the road in style
                  now!(www.ilotbet.com)
               </Text>

               <Text style={error ? styles.errorMessage : styles.userId}>
                  {error ? error : 'User ID'}
               </Text>

               <View style={[styles.textInputContainer, error && styles.inputError]}>
                  <TextInput
                     placeholderTextColor="#999"
                     placeholder="Enter ilot phone number"
                     style={styles.textInput}
                     value={userId}
                     onChangeText={handleTextChange}
                     keyboardType="numeric"
                  />
                  {userId.length > 0 && (
                     <TouchableOpacity onPress={clearInput}>
                        <Entypo name="circle-with-cross" size={22} color="grey" />
                     </TouchableOpacity>
                  )}
               </View>

               <View style={styles.itemContainer}>
                  <FlatList
                     data={ilotTopUp}
                     renderItem={renderItem}
                     keyExtractor={(item) => item.id.toString()}
                     numColumns={3}
                     columnWrapperStyle={styles.row}
                     contentContainerStyle={{ paddingBottom: 20 }}
                  />
               </View>

               <View style={styles.topUpTextInputContainer}>
                  <Text style={styles.naira}>₦</Text>
                  <View style={styles.topInputContainer}>
                     <TextInput
                        style={styles.topupInput}
                        placeholder="100 - 1,000,000"
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

            {/* more event */}
            <View style={styles.moreEventContainer}>
               <Text style={styles.moreText}>More Events</Text>

               <TouchableOpacity style={styles.itemSpace}>
                  <View style={styles.item1Container}>
                     <Image
                        source={require('../assets/images/football.jpg')}
                        style={styles.ilotImg}
                     />
                     <Text style={styles.getText}>You're eligible for massive bonus!</Text>
                  </View>
                  <Text style={styles.winText}>Deposit ₦100 & get ₦20, or ₦500 & get ₦...</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.itemSpace}>
                  <View style={styles.item1Container}>
                     <Image
                        source={require('../assets/images/ilotbet.jpg')}
                        style={styles.geniexImg}
                     />
                     <Text style={styles.getText}>Win iPhone 16 and Cash Bonus Today!</Text>
                  </View>
                  <Text style={styles.winText}>Get a chance to win cash bonuses and n...</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.itemSpace}>
                  <View style={styles.item1Container}>
                     <Image source={require('../assets/images/tag.png')} style={styles.geniexImg} />
                     <Text style={styles.getText}>The Big Boost!</Text>
                  </View>
                  <Text style={styles.winText}>Claim 15 money saving vouchers on all bi...</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.itemSpace}>
                  <View style={styles.item1Container}>
                     <Image
                        source={require('../assets/images/hand.jpg')}
                        style={styles.geniexImg}
                     />
                     <Text style={styles.getText}>Stream, Chat and Surf</Text>
                  </View>
                  <Text style={styles.winText}>Up to 50% discount and 6% cashback!</Text>
               </TouchableOpacity>
               <TouchableOpacity>
                  <View style={styles.item1Container}>
                     <Image
                        source={require('../assets/images/ilotbet.jpg')}
                        style={styles.geniexImg}
                     />
                     <Text style={styles.getText}>Turn Deposits into Dreams!</Text>
                  </View>
                  <Text style={styles.winText}>Your daily deposit could lead to a life-ch...</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default BettingScreen;

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
   bettingText: {
      fontSize: 20,
      fontWeight: 500,
   },
   history: {
      fontSize: 18,
      color: '#17B2A6',
   },
   scrollContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',
   },
   ilotContainer: {
      backgroundColor: '#fff',
      marginHorizontal: 10,
      padding: 15,
      marginTop: 10,
   },
   ilotRow: {
      flexDirection: 'row',
   },
   ilotImage: {
      width: 45,
      height: 45,
      borderRadius: 25,
      marginLeft: 10,
   },
   ilot: {
      fontSize: 18,
      marginTop: 12,
      marginLeft: 10,
      fontWeight: 600,
   },
   ilotIcon: {
      marginTop: 5,
      marginLeft: 210,
   },
   horizontalLine: {
      height: 1,
      backgroundColor: 'transparent',
      borderWidth: 0.5,
      borderColor: '#D3D3D3',
      width: '100%',
      alignSelf: 'center',
      marginVertical: 20,
      borderStyle: 'solid',
      marginTop: 8,
   },
   ilotText: {
      flex: 1,
      marginLeft: 10,
      fontSize: 17,
      color: 'grey',
   },
   userId: {
      fontFamily: 'Inter-Black-Light',
      marginTop: 30,
      marginLeft: 10,
      fontSize: 18,
      fontWeight: 600,
   },
   textInputContainer: {
      backgroundColor: '#f5f5f5',
      marginTop: 20,
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
   },
   textInput: {
      fontSize: 17,
      flex: 1,
   },
   errorMessage: {
      color: 'red',
      fontFamily: 'Inter-Black-Light',
      marginTop: 30,
      marginLeft: 10,
      fontSize: 18,
      fontWeight: 600,
   },
   inputError: {
      borderColor: 'red',
      borderWidth: 1,
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
   itemContainer: {
      flex: 1,
      marginTop: 30,
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
});
