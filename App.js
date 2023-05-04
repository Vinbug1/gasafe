import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigations from './src/navigations/MainNavigations';

export default function App() {
  return (
    <NavigationContainer>
   
  
    <MainNavigations />
      <StatusBar style="auto" />

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
