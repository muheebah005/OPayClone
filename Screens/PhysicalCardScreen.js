import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const PhysicalCardScreen = () => {
   return (
      <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
         <View style={styles.cardContainer}>
            <Image source={require('../assets/images/opay_verve.png')} style={styles.image} />

            {/* card information */}
            <View style={styles.infoContainer}>
               <View style={styles.infoRow}>
                  <View style={styles.rows}>
                     <View style={styles.iconContainer}>
                        <FontAwesome name="credit-card-alt" size={24} color="#00C49A" />
                     </View>
                     <Text style={styles.infoTitle}>Free Application and Usage</Text>
                  </View>
                  <Text style={styles.infoText}>
                     <Text style={styles.highlight}>Free</Text> application,{' '}
                     <Text style={styles.highlight}>Zero</Text> maintenance
                  </Text>
               </View>

               <View style={styles.infoRow}>
                  <View style={styles.rows}>
                     <View style={styles.iconContainer}>
                        <FontAwesome6 name="sack-dollar" size={24} color="#00C49A" />
                     </View>
                     <Text style={styles.infoTitle}>Earn</Text>
                  </View>
                  <Text style={styles.infoText}>
                     Flexible Spending with <Text style={styles.highlight}>15%</Text> annual
                     interest
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

export default PhysicalCardScreen;

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
      marginTop: 15,
   },
   infoContainer: {
      marginBottom: 40,
      marginLeft: 25,
   },
   infoRow: {
      marginTop: 20,
   },
   infoTitle: {
      fontSize: 18,
      marginLeft: 8,
   },
   infoText: {
      marginBottom: 2,
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
      width: 36,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
   },
});
