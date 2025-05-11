import { useFonts } from 'expo-font';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
   const [fontLoaded] = useFonts({
      'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
   });

   const fadeAnim = useRef(new Animated.Value(1)).current;

   useEffect(() => {
      if (fontLoaded) {
         setTimeout(() => {
            Animated.timing(fadeAnim, {
               toValue: 0,
               duration: 100,
               useNativeDriver: true,
            }).start(() => {
               navigation.replace('onboard');
            });
         }, 1500);
      }
   }, [fontLoaded, navigation]);

   if (!fontLoaded) {
      return null;
   }
   return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
         <Image source={require('../assets/images/opaylogo.png')} style={styles.logo} />
         <Text style={styles.text}>We are Beyond Banking</Text>
         <View style={styles.licenseContainer}>
            <Image source={require('../assets/images/cbnlogo.png')} style={styles.cbnLogo} />
            <Text style={styles.licenseText}>
               Licensed by the <Text style={styles.boldText}>CBN</Text> and insured by the |{' '}
               <Text style={styles.boldText}>NDIC</Text>
            </Text>
         </View>
         <View style={styles.ndicContainer}>
            <Text style={styles.ndicText}>Nigeria Deposit Insurance Corperation</Text>
         </View>
      </Animated.View>
   );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#17B169',
      alignItems: 'center',
      justifyContent: 'center',
   },
   logo: {
      width: 100,
      height: 100,
      marginBottom: 5,
      borderRadius: 10,
   },
   text: {
      color: '#2D1C5C',
      fontWeight: 'bold',
      fontSize: 34,
      fontFamily: 'Roboto-Bold',
      marginBottom: 30,
   },
   licenseContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
   },
   cbnLogo: {
      width: 18,
      height: 18,
      marginRight: 5,
   },
   licenseText: {
      color: '#2D1C5C',
      fontSize: 16,
   },
   boldText: {
      fontWeight: 'bold',
      fontSize: 20,
   },
   ndicContainer: {
      marginLeft: 289,
      marginBottom: 17,
   },
   ndicText: {
      fontSize: 3,
   },
});
