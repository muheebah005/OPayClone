import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
   Image,
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from 'react-native';

const SafeboxScreen = () => {
   const navigation = useNavigation();

   const handleGoBack = () => {
      navigation.goBack();
   };

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleGoBack}>
               <Entypo name="chevron-small-left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.safeBoxText}>SafeBox</Text>
            <TouchableOpacity>
               <Text style={styles.moreText}>More</Text>
            </TouchableOpacity>
         </View>
         <ScrollView style={styles.scrollContainer}>
            <View style={styles.safeBoxContainer}>
               <LinearGradient
                  style={styles.safeBoxCard}
                  colors={['#7442C8', '#1d1160']}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 1 }}>
                  <View style={styles.leftContainer}>
                     <Text style={styles.safeText}>SafeBox</Text>
                     <Text style={styles.depositText}>Deposit & earn massive returns</Text>
                     <View style={styles.badgeContainer}>
                        <Ionicons
                           name="shield-checkmark"
                           size={14}
                           color="#7442C8"
                           style={styles.shield}
                        />
                        <Text style={styles.badgeText}>Powered by BlueRidge Microfinance Bank</Text>
                     </View>
                  </View>
                  <View style={styles.rightContainer}>
                     <Image
                        source={require('../assets/images/vault.png')}
                        style={styles.vaultImage}
                     />
                  </View>
               </LinearGradient>
               <View style={styles.safeBoxItemContainer}>
                  <View style={styles.iconContainer}>
                     <MaterialCommunityIcons name="crown" size={24} color="#7442C8" />
                  </View>
                  <View style={styles.textContainer}>
                     <Text style={styles.title}>Interest Yield</Text>
                     <Text style={styles.subTitle}>
                        ₦300,000 and below, 15% p.a. Over ₦300,000, the first ₦300,000 at 15% p.a.
                        the remaining balance at 6% p.a.
                     </Text>
                  </View>
               </View>

               <View style={styles.safeBoxItemContainer}>
                  <View style={styles.iconContainer}>
                     <FontAwesome6 name="piggy-bank" size={24} color="#7442C8" />
                  </View>
                  <View style={styles.textContainer}>
                     <Text style={styles.title}>Savings Top-Up</Text>
                     <Text style={styles.subTitle}>
                        Deposit anytime. You can also set up scheduled deposits on daily, weekly or
                        monthly basis through AutoSave.
                     </Text>
                  </View>
               </View>

               <View style={styles.safeBoxItemContainer}>
                  <View style={styles.iconContainer}>
                     <Ionicons name="cash-sharp" size={24} color="#7442C8" />
                  </View>
                  <View style={styles.textContainer}>
                     <Text style={styles.title}>Withdrawal</Text>
                     <Text style={styles.subTitle}>
                        4 free withdrawal days yearly. Break fee applies for withdrawals on a
                        non-free day.
                     </Text>
                  </View>
               </View>

               <View style={styles.safeBoxItemContainer}>
                  <View style={styles.iconContainer}>
                     <MaterialIcons name="verified" size={24} color="#7442C8" />
                  </View>
                  <View style={styles.textContainer}>
                     <Text style={styles.title}>Halal Compliant</Text>
                     <Text style={styles.subTitle}>
                        You have the option to choose not to receive interests on your savings.
                     </Text>
                  </View>
               </View>
            </View>
            <TouchableOpacity style={styles.proceedButton}>
               <Text style={styles.proceedText}>Proceed</Text>
            </TouchableOpacity>

            <View style={styles.ndicContainer}>
               <View style={styles.ndicRow}>
                  <Text style={styles.insured}>Insured by</Text>
                  <View style={styles.line} />
                  <Text style={styles.ndic}>NDIC</Text>
               </View>
               <Text style={styles.deposit}>Nigeria Deposit Insurance Corporation</Text>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default SafeboxScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fff',
   },
   safeBoxText: {
      fontWeight: 'bold',
      fontSize: 22,
   },
   moreText: {
      fontSize: 18,
      color: '#17B169',
   },
   scrollContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',
   },
   safeBoxContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginTop: 10,
      padding: 15,
      marginHorizontal: 10,
   },
   safeBoxCard: {
      backgroundColor: '#5F00BA',
      borderRadius: 15,
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 16,
   },
   vaultImage: {
      width: 100,
      height: 100,
   },
   leftContainer: {
      paddingRight: 10,
      flex: 1,
   },
   safeText: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 10,
   },
   depositText: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 8,
      fontFamily: 'Inter-Black-Light',
   },
   badgeContainer: {
      backgroundColor: '#fff',
      marginTop: 20,
      paddingVertical: 5,
      paddingHorizontal: 12,
      borderRadius: 20,
      alignSelf: 'flex-start',
      flexDirection: 'row',
   },
   badgeText: {
      fontSize: 11,
      marginTop: 2,
      color: '#5F00BA',
   },
   shield: {
      marginRight: 8,
   },
   safeBoxItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      marginBottom: 28,
   },
   iconContainer: {
      backgroundColor: '#f5f5f5',
      padding: 5,
      borderRadius: 10,
      marginRight: 10,
   },
   textContainer: {
      flex: 1,
   },
   title: {
      fontSize: 18,
      marginBottom: 7,
      fontWeight: 300,
   },
   subTitle: {
      fontSize: 14,
      fontFamily: 'Inter-Black-Light',
   },
   proceedButton: {
      backgroundColor: '#7442C8',
      padding: 15,
      paddingVertical: 20,
      marginHorizontal: 30,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 18,
   },
   proceedText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 300,
   },
   ndicContainer: {
      alignItems: 'center',
      marginTop: 30,
   },
   ndicRow: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   line: {
      height: '100%',
      width: 2,
      backgroundColor: '#002D62',
      marginLeft: 8,
   },
   ndic: {
      marginLeft: 2,
      color: '#002D62',
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: -4,
   },
   deposit: {
      fontSize: 3,
      marginBottom: 15,
      marginLeft: 85,
      marginTop: -3,
   },
});
