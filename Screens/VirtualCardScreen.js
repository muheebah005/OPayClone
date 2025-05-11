import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const VirtualCardScreen = () => {
   return (
      <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
         <View style={styles.cardContainer}>
            <Image
               source={require('../assets/images/opay_virtual_card.png')}
               style={styles.image}
            />

            {/* card information */}
            <View style={styles.infoSection}>
               <View style={styles.infoRow}>
                  <View style={styles.rows}>
                     <View style={styles.iconContainer}>
                        <MaterialIcons name="flash-on" size={24} color="#00C49A" />
                     </View>
                     <Text style={styles.infoTitle}>Instant Access</Text>
                  </View>
                  <Text style={styles.infoText}>
                     Apply and activate <Text style={styles.highlight}>Instantly</Text>
                  </Text>
               </View>

               <View style={styles.infoRow}>
                  <View style={styles.rows}>
                     <View style={styles.iconContainer}>
                        <Image source={require('../assets/images/map.png')} style={styles.map} />
                     </View>
                     <Text style={styles.infoTitle}>Rep Your State Of Origin</Text>
                  </View>
                  <Text style={styles.infoText}>
                     <Text style={styles.highlight}>
                        Get a virtual OPay card unique to your state of origin
                     </Text>
                  </Text>
               </View>
               <View style={styles.infoRow}>
                  <View style={styles.rows}>
                     <View style={styles.iconContainer}>
                        <Ionicons name="basketball-outline" size={24} color="#00C49A" />
                     </View>
                     <Text style={styles.infoTitle}>Online Merchant Acceptance</Text>
                  </View>
                  <Text style={styles.infoText}>
                     Accepted by <Text style={styles.highlight}>40,000+</Text> online merchants
                     including JUMIA, KONGA, NETFLIX, UBER Wallet Funding and others
                  </Text>
               </View>
               <View style={styles.infoRow}>
                  <View style={styles.rows}>
                     <View style={styles.iconContainer}>
                        <Ionicons name="shield-checkmark" size={24} color="#00C49A" />
                     </View>
                     <Text style={styles.infoTitle}>Security</Text>
                  </View>
                  <Text style={styles.infoText}>
                     {' '}
                     <Text style={styles.highlight}>CBN</Text> licensed,{' '}
                     <Text style={styles.highlight}>NDIC</Text> Insured
                  </Text>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

export default VirtualCardScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
   },
   cardContainer: {
      backgroundColor: '#fff',
      padding: 2,
      borderRadius: 20,
      marginTop: 5,
      width: '90%',
      alignItems: 'center',
   },
   image: {
      width: 300,
      height: 180,
      marginTop: 20,
   },
   map: {
      width: 20,
      height: 20,
   },
   infoSection: {
      marginTop: 10,
      marginLeft: 40,
   },
   infoRow: {
      marginBottom: 16,
   },
   infoTitle: {
      fontSize: 18,
      marginLeft: 8,
   },
   infoText: {
      marginBottom: 3,
      fontSize: 18,
      marginLeft: 38,
   },
   highlight: {
      color: '#00C49A',
   },
   rows: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
   },
   iconContainer: {
      backgroundColor: '#E8F5E9',
      borderRadius: 29,
      width: 34,
      height: 34,
      justifyContent: 'center',
      alignItems: 'center',
   },
});
