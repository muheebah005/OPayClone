import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import {
   Image,
   Keyboard,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View,
} from 'react-native';

const SignUpScreen = () => {
   const navigation = useNavigation();
   const [phoneNumber, setPhoneNumber] = useState('');
   const [isPhoneFocused, setIsPhoneFocused] = useState(false);
   const [isChecked, setIsChecked] = useState(false);
   const [fontLoaded] = useFonts({
      'interTight-Black': require('../assets/fonts/InterTight-Regular.ttf'),
      'inter-Black': require('../assets/fonts/Inter_18pt-Light.ttf'),
   });

   const isButtonDisabled = phoneNumber.length < 10;

   const handleGoBack = () => {
      navigation.goBack();
   };

   const handleSignIn = () => {
      navigation.navigate('signIn');
   };

   if (!fontLoaded) {
      return null;
   }

   return (
      <TouchableWithoutFeedback
         onPress={() => {
            Keyboard.dismiss();
         }}>
         <View style={styles.container}>
            <TouchableOpacity onPress={handleGoBack}>
               <View style={styles.iconContainer}>
                  <AntDesign name="left" color="black" size={20} />
               </View>
            </TouchableOpacity>
            <Image source={require('../assets/images/opay.png')} style={styles.opayImage} />
            <View style={styles.textHeaderContainer}>
               <Text style={styles.headerText1}>Get an OPay Account</Text>
               <Text style={styles.headerText2}>
                  We use your Phone Number to identify your account so please enter it below.
               </Text>
            </View>
            <View style={[styles.inputContainer, isPhoneFocused && styles.activeBorder]}>
               <View style={styles.countryContainer}>
                  <Image
                     source={require('../assets/images/nigeriaflag.png')}
                     style={styles.nigeriaFlag}
                  />
                  <Text style={styles.countryCode}> +234 </Text>
                  <View style={styles.lineSeperator} />
               </View>

               <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  placeholderTextColor="#C4C4C4"
                  keyboardType="numeric"
                  maxLength={11}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  onFocus={() => setIsPhoneFocused(true)}
                  onBlur={() => setIsPhoneFocused(false)}
               />
            </View>
            <TouchableOpacity
               style={[styles.signUpButton, isButtonDisabled && styles.disabledSignUpButton]}
               disabled={isButtonDisabled}>
               <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.termsContainer}>
               <Checkbox
                  value={isChecked}
                  onValueChange={setIsChecked}
                  color={isChecked ? '#00A859' : undefined}
                  style={styles.checkbox}
               />
               <Text style={styles.termText1}>
                  I have read, understood and agreed to the{' '}
                  <Text style={styles.termText2}>Terms & Conditions</Text> and{' '}
                  <Text style={styles.termText3}>Privacy Policy.</Text>
               </Text>
            </View>
            <View style={styles.loginContainer}>
               <Text style={styles.account}>Already have an OPay Account?</Text>
               <TouchableOpacity onPress={handleSignIn}>
                  <Text style={styles.login}>Click here to Log in</Text>
               </TouchableOpacity>
            </View>

            <View style={styles.licenseContainer}>
               <Image source={require('../assets/images/cbnlogo.png')} style={styles.cbnLogo} />
               <Text>
                  Licensed by the <Text style={styles.boldText}>CBN</Text> and insured by the |
                  <Text style={styles.boldText}>NDIC</Text>
               </Text>
            </View>
            <View style={styles.ndicContainer}>
               <Text style={styles.ndic}>Nigeria Deposit Insurance Corperation</Text>
            </View>
         </View>
      </TouchableWithoutFeedback>
   );
};

export default SignUpScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
   },
   iconContainer: {
      marginTop: 38,
      marginRight: 363,
   },
   opayImage: {
      width: 120,
      height: 78,
      marginTop: 30,
   },
   textHeaderContainer: {
      marginTop: 18,
      marginLeft: 7,
   },
   headerText1: {
      fontFamily: 'interTight-Black',
      fontSize: 29,
      marginBottom: 10,
   },
   headerText2: {
      fontFamily: 'inter-Black',
      fontSize: 18,
      marginBottom: 10,
   },
   inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 13,
      width: '90%',
      height: 45,
      marginTop: 20,
      borderColor: '#cccc',
      borderWidth: 1,
   },
   activeBorder: {
      borderColor: '#17B169',
   },
   countryContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
   },
   input: {
      flex: 1,
      fontSize: 16,
      color: '#000',
   },
   nigeriaFlag: {
      width: 24,
      height: 16,
      marginRight: 6,
   },
   countryCode: {
      fontSize: 16,
      fontWeight: '500',
      color: '#000',
   },
   lineSeperator: {
      width: 1,
      height: 20,
      backgroundColor: '#C4C4C4',
      marginLeft: 8,
   },
   signUpButton: {
      marginTop: 40,
      backgroundColor: '#17B169',
      paddingVertical: 18,
      paddingHorizontal: 140,
      borderRadius: 25,
   },
   disabledSignUpButton: {
      backgroundColor: '#A5DAB3',
   },
   signUp: {
      fontSize: 20,
      color: '#fff',
   },
   termsContainer: {
      flexDirection: 'row',
      marginTop: 29,
      marginLeft: 35,
      marginRight: 10,
   },
   checkbox: {
      width: 15,
      height: 15,
      marginRight: 8,
   },
   termText1: {
      fontSize: 15,
      fontFamily: 'inter-Black',
   },
   termText2: {
      color: '#17B169',
   },
   termText3: {
      color: '#17B169',
   },
   loginContainer: {
      marginTop: 125,
   },
   account: {
      fontSize: 18,
      fontFamily: 'interTight-Black',
   },
   login: {
      fontSize: 16,
      marginLeft: 43,
      color: '#17B169',
      marginTop: 3,
   },
   licenseContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 46,
   },
   cbnLogo: {
      width: 22,
      height: 22,
   },
   boldText: {
      fontWeight: 'bold',
      color: '#2D1C5C',
   },
   ndicContainer: {
      marginLeft: 270,
      marginBottom: 14,
   },
   ndic: {
      fontSize: 3,
   },
});
