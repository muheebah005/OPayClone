import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import {
   Dimensions,
   FlatList,
   Image,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
   {
      id: 1,
      title: 'Up to 15% Annual Interest on OWealth',
      description: 'Flexible savings, daily interest, and unlimited withdrawal for free',
      image: require('../assets/images/onb1.png'),
   },
   {
      id: 2,
      title: 'Free Debit Card',
      description:
         'Available without BVN, zero fee(Application, ATM withdrawal & Maintenance), and accepted at any POS, ATM & online chanel',
      image: require('../assets/images/onb2.png'),
   },
   {
      id: 3,
      title: 'Manage All Payment from One App',
      description:
         'Enjoy free transfers, free and instant payments, bonuses on transactions & more',
      image: require('../assets/images/onb3.png'),
   },
   {
      id: 4,
      title: 'Easy and Instant Account Opening',
      description: 'Open an account easily and instantly with Phone number or NIN or BVN or others',
      image: require('../assets/images/onb4.png'),
   },
   {
      id: 5,
      title: 'Licensed by the CBN and Insured by the NDIC',
      description: 'Your account and funds are safe on OPay',
      image: require('../assets/images/onb5.png'),
   },
];

const OnBoardScreen = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const flatListRef = useRef(null);
   const navigation = useNavigation();

   const handleSkip = () => {
      navigation.navigate('signup');
   };

   const handleSignIn = () => {
      navigation.navigate('signIn');
   };

   const handleScroll = (event) => {
      const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
      setCurrentIndex(slideIndex);
   };

   return (
      <View style={styles.container}>
         <View style={styles.skipButton}>
            <TouchableOpacity onPress={handleSkip}>
               <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
         </View>
         <FlatList
            ref={flatListRef}
            data={slides}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            renderItem={({ item }) => (
               <View style={styles.slide}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.description}>{item.description}</Text>
               </View>
            )}
         />

         <View style={styles.pagination}>
            {slides.map((_, index) => (
               <View
                  key={index}
                  style={[
                     styles.dot,
                     currentIndex === index ? styles.activeDot : styles.inactiveDot,
                  ]}
               />
            ))}
         </View>

         <TouchableOpacity style={styles.button} onPress={handleSkip}>
            <Text style={styles.buttonText}>Create a new account</Text>
         </TouchableOpacity>

         <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Have an account?</Text>
            <TouchableOpacity onPress={handleSignIn}>
               <Text style={styles.signIn}>Sign in</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
   },
   skipButton: {
      position: 'absolute',
      top: 30,
      right: 20,
      padding: 6,
      zIndex: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
   },
   skipText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#17B169',
   },
   slide: {
      width,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
   },
   image: {
      width: 350,
      height: 350,
      resizeMode: 'contain',
      marginBottom: 30,
   },
   title: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 40,
      color: '#2D1C5C',
   },
   description: {
      fontSize: 16,
      textAlign: 'center',
      color: '#2D1C5C',
      marginBottom: 58,
      paddingHorizontal: 40,
   },
   pagination: {
      flexDirection: 'row',
      position: 'absolutes',
      bottom: 20,
      alignSelf: 'center',
   },
   dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
      marginBottom: 15,
   },
   activeDot: {
      backgroundColor: '#17B169',
   },
   inactiveDot: {
      backgroundColor: '#C4C4C4',
   },
   button: {
      backgroundColor: '#17B169',
      paddingVertical: 20,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginBottom: 25,
   },
   buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
   },
   signInContainer: {
      flexDirection: 'row',
   },
   signInText: {
      fontSize: 16,
      marginBottom: 19,
      marginRight: 5,
   },
   signIn: {
      color: '#17B169',
      fontSize: 16,
      marginBottom: 19,
      marginRight: 5,
   },
});
