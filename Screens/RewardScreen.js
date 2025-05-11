import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useRef, useState } from 'react';
import {
   FlatList,
   Image,
   SafeAreaView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import Carousel from './Carousel';

import { ScrollView } from 'react-native-virtualized-view';

const rewardsData = {
   cashback: 151,
   voucher: 0,
};

const RewardScreen = () => {
   const [reward] = useState(rewardsData);
   const modalizeRef = useRef(null);

   const bonusData = {
      bonus: [
         {
            id: '1',
            title: 'Glo Airtime',
            cashback: 'Up to 6%',
            desc: 'Buy Airtime and get up to 6% Cashback',
         },
         {
            id: '2',
            title: '9 Mobile Airtime',
            cashback: 'Up to 5%',
            desc: 'Buy Airtime and get up to 5% Cashback',
         },
         {
            id: '3',
            title: 'MTN/Airtel Airtime',
            cashback: 'Up to 3.5%',
            desc: 'Buy Airtime and get up to 3.5% Cashback',
         },
         {
            id: '4',
            title: 'Glo Data',
            cashback: 'Up to 6%',
            desc: 'Buy Data and get up to 6% Cashback',
         },
         {
            id: '5',
            title: '9 Mobile Data',
            cashback: 'Up to 5%',
            desc: 'Buy Data and get up to 5% Cashback',
         },
      ],
   };

   const openBottomSheet = () => modalizeRef.current?.open();

   return (
      <GestureHandlerRootView style={{ flex: 1 }}>
         <ScrollView style={styles.container}>
            <View style={styles.headerContainer} pointerEvents="box-none">
               {/* header */}
               <View style={styles.header}>
                  <Text style={styles.headerText}>Rewards</Text>
                  <TouchableOpacity>
                     <Ionicons
                        name="ellipsis-horizontal-circle"
                        size={24}
                        color="black"
                        style={styles.headerIcon}
                     />
                  </TouchableOpacity>
               </View>

               {/* cashback and voucher */}
               <View style={styles.cashbackContainer}>
                  {/* cashback */}
                  <View style={styles.cashbackItems}>
                     <View style={styles.row}>
                        <Text style={styles.cashbackText}>Cashback</Text>
                        <FontAwesome6 name="circle-question" size={14} color="black" />
                     </View>
                     <View style={styles.cashbackAmountContainer}>
                        <Image source={require('../assets/images/coin.png')} style={styles.coin} />
                        <Text style={styles.cashbackAmount}>₦{reward.cashback.toFixed(2)}</Text>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                     </View>
                  </View>

                  {/* voucher */}
                  <View style={[styles.cashbackItems, styles.voucherContainer]}>
                     <Text style={styles.cashbackText}>Voucher</Text>
                     <View style={styles.cashbackItemsContainer}>
                        <FontAwesome5 name="ticket-alt" size={24} color="black" />
                        <Text style={styles.cashbackAmount}>{reward.voucher}</Text>
                        <Entypo name="chevron-small-right" size={24} color="black" />
                     </View>
                  </View>
               </View>

               {/* reward options */}
               <View style={styles.rewardOptionsContainer}>
                  <TouchableOpacity style={styles.rewardOptions}>
                     <Image
                        source={require('../assets/images/coupon.png')}
                        style={styles.rewardOptionImage}
                     />
                     <Text style={styles.rewardOptionText}>Friday Bonus</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.rewardOptions}>
                     <Image
                        source={require('../assets/images/emoji.png')}
                        style={styles.rewardOptionImage}
                     />
                     <Text style={styles.rewardOptionText}>Refer Friends</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.rewardOptions}>
                     <Image
                        source={require('../assets/images/spin_and_win.png')}
                        style={styles.rewardOptionImage}
                     />
                     <Text style={styles.rewardOptionText}>Spin & Win</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.rewardOptions}>
                     <Image
                        source={require('../assets/images/star.png')}
                        style={styles.rewardOptionImage}
                     />
                     <Text style={styles.rewardOptionText}>Play4aChild</Text>
                  </TouchableOpacity>
               </View>
            </View>

            {/* bonus */}
            <View style={styles.dailyBonusContainer}>
               <Text style={styles.dailyBonusText}>Daily Bonus</Text>

               <View style={styles.bonusBox}>
                  {bonusData.bonus.slice(0, 3).map((item) => (
                     <View key={item.id} style={styles.bonusItem}>
                        {/* icon */}
                        <View style={styles.bonusIconContainer}>
                           <MaterialIcons name="phone-android" size={24} color="black" />
                        </View>

                        {/* bonus texts */}
                        <View style={styles.bonusTextContainer}>
                           <View style={styles.bonusTitleContainer}>
                              <Text style={styles.bonusTitle}>{item.title}</Text>
                              <Image
                                 source={require('../assets/images/coin.png')}
                                 style={styles.coinItem}
                              />
                              <Text style={styles.bonusCashback}> +{item.cashback}</Text>
                           </View>
                           <Text style={styles.bonusDesc}>{item.desc}</Text>
                        </View>
                        {/* bonus button */}
                        <TouchableOpacity style={styles.bonusItemButton}>
                           <Text style={styles.bonusButtonText}>Go</Text>
                        </TouchableOpacity>
                     </View>
                  ))}

                  {/* bonus button */}
                  <TouchableOpacity style={styles.bonusButton} onPress={openBottomSheet}>
                     <Text style={styles.viewAllText}>View all</Text>
                     <Entypo name="chevron-small-down" size={24} color="black" />
                  </TouchableOpacity>
               </View>

               {/* modal */}
               <Modalize
                  ref={modalizeRef}
                  modalHeight={500}
                  withHandle={true}
                  panGestureEnabled={true}
                  modalStyle={styles.modalContent}
                  handleStyle={styles.handleStyle}>
                  <View style={styles.modalHeader}>
                     <Text style={styles.modalTitle}>Daily Bonus</Text>
                     <FlatList
                        nestedScrollEnabled={true}
                        data={bonusData.bonus}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                           <View style={styles.bonusItem}>
                              {/* icon */}
                              <View style={styles.bonusIconContainer}>
                                 <MaterialIcons name="phone-android" size={24} color="black" />
                              </View>

                              {/* bonus texts */}
                              <View style={styles.bonusTextContainer}>
                                 <View style={styles.bonusTitleContainer}>
                                    <Text style={styles.bonusTitle}>{item.title}</Text>
                                    <Image
                                       source={require('../assets/images/coin.png')}
                                       style={styles.coinItem}
                                    />
                                    <Text style={styles.bonusCashback}> +{item.cashback}</Text>
                                 </View>
                                 <Text style={styles.bonusDesc}>{item.desc}</Text>
                              </View>
                              {/* bonus button */}
                              <TouchableOpacity style={styles.bonusItemButton}>
                                 <Text style={styles.bonusButtonText}>Go</Text>
                              </TouchableOpacity>
                           </View>
                        )}
                     />
                  </View>
               </Modalize>
            </View>

            {/* footer */}
            <SafeAreaView>
               <Carousel />
            </SafeAreaView>
         </ScrollView>
      </GestureHandlerRootView>
   );
};

export default RewardScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   headerContainer: {
      backgroundColor: '#D1F2EB',
      paddingBottom: 60,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      position: 'relative',
   },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
   },
   headerText: {
      fontSize: 23,
      fontWeight: 'bold',
      marginTop: 10,
      fontFamily: 'Inter-Black-Regular',
   },
   headerIcon: {
      marginTop: 4,
   },
   cashbackContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 1,
      padding: 20,
      marginHorizontal: 15,
      alignItems: 'center',
   },
   cashbackItems: {
      flexDirection: 'column',
      justifyContent: 'center',
   },
   voucherContainer: {
      marginRight: 15,
   },
   coin: {
      width: 40,
      height: 40,
   },
   row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
   },
   cashbackText: {
      fontSize: 18,
      fontWeight: 'light',
      marginBottom: 6,
   },
   cashbackItemsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   cashbackAmountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
   },
   cashbackAmount: {
      fontSize: 28,
      fontWeight: 'light',
      marginHorizontal: 5,
   },
   rewardOptionsContainer: {
      position: 'absolute',
      top: '85%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      paddingHorizontal: 15,
      marginTop: 50,
      zIndex: 1,
   },
   rewardOptions: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      width: '22%',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
   },
   rewardOptionImage: {
      width: 50,
      height: 40,
      resizeMode: 'contain',
   },
   rewardOptionText: {
      fontSize: 12,
      textAlign: 'center',
      marginTop: 5,
   },
   dailyBonusContainer: {
      marginTop: 75,
      marginLeft: 10,
   },
   dailyBonusText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 15,
   },
   bonusBox: {
      backgroundColor: '#fff',
      borderRadius: 12,
      paddingVertical: 15,
      paddingHorizontal: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
   },
   bonusItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderColor: '#ddd',
   },
   bonusIconContainer: {
      backgroundColor: '#F5F5F5',
      padding: 10,
      borderRadius: 15,
   },
   bonusTextContainer: {
      flex: 1,
      marginLeft: 10,
   },
   bonusTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   bonusTitle: {
      fontSize: 18,
      fontWeight: 'light',
      marginRight: 6,
   },
   coinItem: {
      width: 20,
      height: 20,
      marginRight: 2,
   },
   bonusCashback: {
      fontSize: 16,
      fontWeight: 'light',
      color: '#00C49A',
   },
   bonusDesc: {
      fontSize: 12,
      fontWeight: 'light',
      color: '#777',
      marginTop: 3,
   },
   bonusItemButton: {
      backgroundColor: '#00C49A',
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 10,
   },
   bonusButtonText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
   },
   bonusButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 18,
   },
   viewAllText: {
      fontSize: 14,
      color: '#333',
   },
   modalContent: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
   },
   modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
   },
   handleStyle: {
      backgroundColor: '#E0E0E0',
      width: 50,
      height: 5,
      alignSelf: 'center',
      marginVertical: 8,
      borderRadius: 10,
   },
   modalHeader: {
      paddingHorizontal: 20,
      paddingVertical: 10,
   },
});
