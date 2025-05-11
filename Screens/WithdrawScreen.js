import { Entypo } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WithdrawScreen = () => {
   const navigation = useNavigation();

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
            <Text style={styles.headerText}>Withdraw</Text>
         </View>
         <ScrollView style={styles.scrollContainer}>
            {/* items */}
            <TouchableOpacity>
               <View style={styles.withdrawItem}>
                  <View style={styles.withdrawItemIconcontainer}>
                     <MaterialIcons
                        name="storefront"
                        size={26}
                        color="black"
                        style={styles.withdrawItemIcon}
                     />
                  </View>
                  <View style={styles.textContainer}>
                     <Text style={styles.withdrawHeader}>Withdraw via OPay merchants</Text>
                     <Text style={styles.withdrawText}>
                        Send money to an OPay merchant's wallet and get cash equivalent
                     </Text>
                  </View>
                  <AntDesign name="right" size={18} color="grey" />
               </View>
            </TouchableOpacity>

            <TouchableOpacity>
               <View style={styles.withdrawItem}>
                  <View style={styles.withdrawItemIconcontainer}>
                     <AntDesign name="creditcard" size={24} color="black" />
                  </View>
                  <View style={styles.textContainer}>
                     <Text style={styles.withdrawHeader}>Withdraw with OPay Card</Text>
                     <Text style={styles.withdrawText}>
                        Withdraw from any ATM or POS around you
                     </Text>
                  </View>
                  <AntDesign name="right" size={18} color="grey" />
               </View>
            </TouchableOpacity>

            <TouchableOpacity>
               <View style={styles.withdrawItem}>
                  <View style={styles.locationContainer}>
                     <Ionicons name="location-sharp" size={28} color="white" />
                  </View>
                  <Text style={styles.clickText}>Click here to find nearby merchant or ATM</Text>
                  <AntDesign name="right" size={18} color="grey" style={styles.rightIcon} />
               </View>
            </TouchableOpacity>
         </ScrollView>
      </SafeAreaView>
   );
};

export default WithdrawScreen;

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
      marginLeft: 110,
   },
   scrollContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',
   },
   withdrawItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginTop: 20,
      marginHorizontal: 10,
      padding: 20,
      borderRadius: 8,
   },

   withdrawItemIconcontainer: {
      padding: 8,
      marginRight: 10,
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
   },
   withdrawHeader: {
      fontSize: 16,
   },
   withdrawText: {
      fontSize: 14,
      color: 'grey',
      marginTop: 4,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
   },
   textContainer: {
      flex: 1,
   },
   locationContainer: {
      padding: 13,
      marginRight: 10,
      backgroundColor: '#6A5ACD',
      borderRadius: 28,
   },
   clickText: {
      flex: 1,
      fontSize: 17,
   },
});
