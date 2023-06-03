import { StatusBar } from 'expo-status-bar';
import {LogBox, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import store from "./Redux/store";
import MainNavigations from './src/navigations/MainNavigations';
// import Main from './src/navigations/Main';
import Auth from './Context/store/Auth';

LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar style="auto" />
        <MainNavigations/>
        </NavigationContainer>
      </Provider>
    </Auth>
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
