import React, { useEffect, useRef, useState } from 'react';
import {
   Dimensions,
   FlatList,
   Image,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const Carousel = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const flatListRef = useRef();
   const carouselData = [
      {
         id: 1,
         title: 'Invite friends and earn up to ',
         title2: '₦4,600',
         title3: 'Bonus',
         button: 'Invite Now',
         image: require('../assets/images/gift_box.png'),
         backgroundColor: '#FFE6E6',
         buttonColor: ['#FF7A7A', '#FF5050'],
         title2Color: ['#FF7A7A', '#FF5050'],
      },
      {
         id: 2,
         title: 'Claim 15 Discounts with ',
         title2: '₦199',
         title3: 'on any Bill',
         button: 'Claim 15 Discounts',
         image: require('../assets/images/coupon.png'),
         backgroundColor: '#E6FAF2',
         buttonColor: ['#00CC99', '#00B383'],
         title2Color: ['#00CC99', '#00B383'],
      },
   ];

   useEffect(() => {
      let interval = setInterval(() => {
         if (activeIndex === carouselData.length - 1) {
            setActiveIndex(0);
            flatListRef.current.scrollToIndex({ index: 0, animation: true });
         } else {
            flatListRef.current.scrollToIndex({ index: activeIndex + 1, animation: true });
         }
      }, 2000);
      return () => clearInterval(interval);
   });

   const getItemLayout = (data, index) => ({
      length: screenWidth,
      offset: screenWidth * index,
      index: index,
   });

   const renderItem = ({ item }) => {
      return (
         <View style={[styles.carouselContainer, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.textContainer}>
               <Text style={styles.carouselTitle}>{item.title}</Text>
               <View style={styles.carouselTitleContainer}>
                  <Text style={[styles.carouselTitle2, { color: item.title2Color[0] }]}>
                     {item.title2}
                  </Text>
                  <Text style={styles.carouselTitle3}>{item.title3}</Text>
               </View>
               <TouchableOpacity style={[styles.button, { backgroundColor: item.buttonColor[0] }]}>
                  <Text style={styles.buttonText}>{item.button}</Text>
               </TouchableOpacity>
            </View>
            <Image source={item.image} style={styles.carouselImage} />
         </View>
      );
   };

   const handleScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.x;
      const index = Math.round(scrollPosition / screenWidth);
      setActiveIndex(index);
   };

   const renderDots = () => {
      return carouselData.map((dot, index) => {
         if (activeIndex === index) {
            return <View style={styles.inactiveDot} key={index}></View>;
         } else {
            return <View style={styles.dots} key={index}></View>;
         }
      });
   };

   return (
      <View>
         <FlatList
            data={carouselData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            ref={flatListRef}
            getItemLayout={getItemLayout}
         />
         <View style={styles.renderDot}>{renderDots()}</View>
      </View>
   );
};

export default Carousel;

const styles = StyleSheet.create({
   carouselContainer: {
      width: screenWidth,
      height: 200,
      flexDirection: 'row',
      paddingHorizontal: 20,
      marginVertical: 10,
      alignItems: 'center',
      marginTop: 25,
   },
   textContainer: {
      flex: 1,
   },
   carouselTitle: {
      fontSize: 19,
      fontWeight: 'bold',
   },
   carouselTitleContainer: {
      flexDirection: 'row',
   },
   carouselTitle2: {
      fontSize: 30,
      marginVertical: 5,
   },
   carouselTitle3: {
      fontSize: 16,
      marginTop: 14,
      marginLeft: 8,
   },
   button: {
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 20,
      alignSelf: 'flex-start',
      marginTop: 5,
   },
   buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 15,
   },
   carouselImage: {
      width: 100,
      height: 200,
      resizeMode: 'contain',
   },
   dots: {
      width: 15,
      height: 2,
      borderRadius: 5,
      backgroundColor: 'black',
      marginHorizontal: 5,
   },
   renderDot: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
   },
   inactiveDot: {
      width: 10,
      height: 2,
      borderRadius: 5,
      backgroundColor: 'grey',
      marginHorizontal: 5,
   },
});
