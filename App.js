import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigator from './Navigators/StackNavigator';

const App = () => {
   return (
      <GestureHandlerRootView style={{ flex: 1 }}>
         <NavigationContainer>
            <StackNavigator />
         </NavigationContainer>
      </GestureHandlerRootView>
   );
};

export default App;

const styles = StyleSheet.create({});
