import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
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

const SignInScreen = () => {
   const [phoneNumber, setPhoneNumber] = useState('');
   const [password, setPassword] = useState('');
   const navigation = useNavigation();
   const [isPhoneFocused, setIsPhoneFocused] = useState(false);
   const [isPasswordFocused, setIsPasswordFocused] = useState(false);
   const [secureText, setSecureText] = useState(true);

   const isButtonDisabled = password.length < 6 || phoneNumber.length < 11;

   const handleGoBack = () => {
      navigation.goBack();
   };

   const handleSignUp = () => {
      navigation.navigate('signup');
   };

   const handleLogIn = () => {
      navigation.navigate('BottomTab');
   };

   return (
      <TouchableWithoutFeedback
         onPress={() => {
            Keyboard.dismiss();
         }}>
         <View style={styles.container}>
            <TouchableOpacity onPress={handleGoBack}>
               <View style={styles.iconContainer}>
                  <AntDesign name="left" size={20} color="black" />
               </View>
            </TouchableOpacity>

            <Image source={require('../assets/images/opay.png')} style={styles.opayImage} />

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
            <View style={[styles.passwordContainer, isPasswordFocused && styles.activeBorder]}>
               <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter 6-digit password"
                  placeholderTextColor="C4C4C4"
                  keyboardType="numeric"
                  maxLength={6}
                  value={password}
                  secureTextEntry={secureText}
                  onChangeText={setPassword}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
               />
               <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                  <MaterialCommunityIcons
                     name={secureText ? 'eye-off-outline' : 'eye-outline'}
                     size={15}
                     color="black"
                     style={styles.icon}
                  />
               </TouchableOpacity>
            </View>
            <TouchableOpacity>
               <View style={styles.forgotPasswordContainer}>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               style={[styles.loginButton, isButtonDisabled && styles.disabledLoginButton]}
               disabled={isButtonDisabled}
               onPress={handleLogIn}>
               <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
               <Text style={styles.footerText}>Don't have an OPay Account yet?</Text>
               <TouchableOpacity onPress={handleSignUp}>
                  <Text style={styles.footerSecondText}>Click here to get one</Text>
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

export default SignInScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
   },
   opayImage: {
      width: 119,
      height: 75,
      marginTop: 25,
   },
   iconContainer: {
      marginTop: 30,
      marginRight: 350,
   },
   inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 14,
      width: '90%',
      height: 55,
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
   passwordContainer: {
      backgroundColor: '#F5F5F5',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 14,
      width: '90%',
      height: 55,
      marginTop: 20,
      textAlign: 'left',
      borderColor: '#cccc',
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
   },
   passwordInput: {
      flex: 1,
      fontSize: 16,
      color: '#000',
   },
   icon: {
      padding: 10,
   },
   forgotPasswordContainer: {
      marginTop: 20,
      marginLeft: 255,
   },
   forgotPasswordText: {
      fontSize: 16,
      color: '#00A859',
   },
   loginButton: {
      marginTop: 30,
      backgroundColor: '#17B169',
      paddingVertical: 18,
      paddingHorizontal: 140,
      borderRadius: 25,
   },
   disabledLoginButton: {
      backgroundColor: '#A5DAB3',
   },
   loginText: {
      fontSize: 19,
      color: '#fff',
   },
   footer: {
      marginTop: 200,
   },
   footerText: {
      fontSize: 15,
   },
   footerSecondText: {
      color: '#17B169',
      fontSize: 15,
      marginLeft: 35,
      marginTop: 4,
   },
   licenseContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30,
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
