import { Entypo } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import {
   Image,
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from 'react-native';

const MoreScreen = () => {
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.header}>
            <TouchableOpacity>
               <Entypo name="chevron-small-left" size={34} color="black" />
            </TouchableOpacity>
            <Text style={styles.moreText}>More</Text>
            <TouchableOpacity>
               <Ionicons name="search-outline" size={20} color="#17B2A6" />
            </TouchableOpacity>
         </View>
         <ScrollView style={styles.scrollContainer}>
            <View style={styles.recentlyContainer}>
               <Text style={styles.recentText}>Recently Used</Text>
               <View style={styles.recentIcons}>
                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome6 name="building-columns" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Government Payments</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <MaterialCommunityIcons
                           name="lightbulb-variant-outline"
                           size={24}
                           color="#17B169"
                        />
                     </View>
                     <Text style={styles.iconTitle}>Electricity</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome6 name="sack-dollar" size={22} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Spend & Save</Text>
                  </TouchableOpacity>
               </View>
            </View>
            {/* e commerce section */}
            <View style={styles.recentlyContainer}>
               <Text style={styles.recentText}>E-commerce</Text>

               <TouchableOpacity style={styles.iconContainer}>
                  <Image source={require('../assets/images/oraimo.png')} style={styles.image} />
                  <Text style={styles.iconTitle}>Spend & Save</Text>
               </TouchableOpacity>

               <View style={styles.horizontalLine} />

               <Text style={styles.recentText}>Bills Payment</Text>

               {/* row 1 */}
               <View style={styles.billsIcon}>
                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <MaterialCommunityIcons
                           name="lightbulb-variant-outline"
                           size={24}
                           color="#17B169"
                        />
                     </View>
                     <Text style={styles.iconTitle}>Electricity</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <Ionicons name="trash-bin-outline" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Waste bill</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <MaterialCommunityIcons name="clover" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Products and Servi...</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome5 name="school" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>School & Exam</Text>
                  </TouchableOpacity>
               </View>

               {/* row 2 */}
               <View style={styles.billsIcon}>
                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome6 name="hand-holding-dollar" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Credit and Loans</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome5 name="internet-explorer" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Internet Services</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <MaterialCommunityIcons
                           name="hand-coin-outline"
                           size={24}
                           color="#17B169"
                        />
                     </View>
                     <Text style={styles.iconTitle}>Financial Services</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome5 name="file-invoice-dollar" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Invoice Payments</Text>
                  </TouchableOpacity>
               </View>

               {/* row 3 */}
               <View style={styles.billsIcon}>
                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome6 name="hand-holding-heart" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Aid Grants and Dona...</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome name="building-o" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Religious</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome6 name="building-columns" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Government Payments</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome6 name="building-columns" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Embassies</Text>
                  </TouchableOpacity>
               </View>

               {/* row 4 */}
               <View style={styles.billsIcon}>
                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <MaterialIcons name="live-tv" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>TV(Others)</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <Feather name="shopping-bag" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Shopping</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <Feather name="shopping-bag" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Online Shopping</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome name="pencil-square-o" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Merchant Payments</Text>
                  </TouchableOpacity>
               </View>

               {/* row 5 */}
               <View style={styles.billsIcon}>
                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <Feather name="tag" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Blackberry</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <Ionicons name="wallet-outline" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>PayChoice</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <Feather name="shield" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Commerce Retail Trade</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome name="credit-card" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Prepaid Card Serv...</Text>
                  </TouchableOpacity>
               </View>

               {/* row 6 */}
               <View style={styles.billsLastRow}>
                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <AntDesign name="earth" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>International Airtime</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <MaterialCommunityIcons
                           name="gas-station-outline"
                           size={24}
                           color="#17B169"
                        />
                     </View>
                     <Text style={styles.iconTitle}>Transport & Toll</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <MaterialCommunityIcons name="palm-tree" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Travel & Hotel</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.horizontalLine} />

               <Text style={styles.recentText}>Finance</Text>

               <View style={styles.billsIcon}>
                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome5 name="weebly" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>OWealth</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <Octicons name="lock" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Fixed</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <Ionicons name="wallet-outline" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>SafeBox</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <MaterialCommunityIcons name="bullseye-arrow" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Targets</Text>
                  </TouchableOpacity>
               </View>
               <TouchableOpacity style={styles.iconContainer}>
                  <View style={styles.iconBorder}>
                     <FontAwesome6 name="sack-dollar" size={22} color="#17B169" />
                  </View>
                  <Text style={styles.iconTitle}>Spend & Save</Text>
               </TouchableOpacity>

               <View style={styles.horizontalLine} />

               <Text style={styles.recentText}>Reward</Text>

               <View style={styles.recentIcons}>
                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome name="calendar-check-o" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Daily Check-In</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <FontAwesome6 name="hand-holding-heart" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Play4aChild</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <Ionicons name="megaphone-outline" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Refer & Earn</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.horizontalLine} />

               <Text style={styles.recentText}>Others</Text>
               <View style={styles.recentIcons}>
                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <AntDesign name="creditcard" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Physical Card</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                     <View style={styles.iconBorder}>
                        <AntDesign name="creditcard" size={24} color="#17B169" />
                     </View>
                     <Text style={styles.iconTitle}>Virtual Card</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default MoreScreen;

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fff',
      flex: 1,
   },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
   },
   moreText: {
      fontSize: 20,
      fontWeight: 600,
   },
   scrollContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',
   },
   recentlyContainer: {
      backgroundColor: '#fff',
      marginTop: 15,
      padding: 10,
      marginHorizontal: 14,
      borderRadius: 10,
   },
   recentText: {
      fontSize: 20,
      fontWeight: 400,
      marginBottom: 10,
      marginTop: 15,
      marginLeft: 10,
   },
   recentIcons: {
      flexDirection: 'row',
      marginLeft: 18,
      marginTop: 10,
      marginBottom: 30,
      gap: 6,
   },
   iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 68,
      marginHorizontal: 5,
   },
   iconBorder: {
      backgroundColor: '#f5f5f5',
      padding: 12,
      borderRadius: 50,
   },
   iconTitle: {
      fontSize: 13,
      lineHeight: 15,
      fontFamily: 'Inter-Black-Light',
      marginTop: 15,
   },
   image: {
      width: 45,
      height: 45,
      borderRadius: 50,
      backgroundColor: '#f5f5f5',
      padding: 2,
   },
   horizontalLine: {
      height: 1,
      backgroundColor: 'transparent',
      borderWidth: 0.5,
      borderColor: '#D3D3D3',
      width: '100%',
      alignSelf: 'center',
      marginVertical: 20,
      borderStyle: 'dashed',
      marginTop: 30,
   },
   billsIcon: {
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
      marginBottom: 10,
   },
   billsLastRow: {
      flexDirection: 'row',
      marginTop: 10,
      gap: 18,
      marginBottom: 5,
   },
});
