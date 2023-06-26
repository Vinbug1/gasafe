import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import MainNavigations from './src/navigations/MainNavigations';
// import Main from './src/navigations/Main';
import Auth from './Context/store/Auth';

LogBox.ignoreAllLogs();

const { width, height } = Dimensions.get('window');

const responsiveWidth = (widthPercent) => {
  const screenWidth = width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const responsiveHeight = (heightPercent) => {
  const screenHeight = height;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar style="auto"/>
          <MainNavigations />
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
  // Example of responsive styling
  text: {
    fontSize: responsiveWidth('5%'), // Responsive font size based on width
    marginBottom: responsiveHeight('5%'), // Responsive margin based on height
  },
  box: {
    width: responsiveWidth('50%'), // Responsive width based on width
    height: responsiveHeight('20%'), // Responsive height based on height
    backgroundColor: 'blue',
  },
});



// import { StatusBar } from 'expo-status-bar';
// import {LogBox, StyleSheet} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { Provider } from "react-redux";
// import store from "./Redux/store";
// import MainNavigations from './src/navigations/MainNavigations';
// // import Main from './src/navigations/Main';
// import Auth from './Context/store/Auth';

// LogBox.ignoreAllLogs();
// export default function App() {
//   return (
//     <Auth>
//       <Provider store={store}>
//         <NavigationContainer>
//           <StatusBar style="auto" />
//         <MainNavigations/>
//         </NavigationContainer>
//       </Provider>
//     </Auth>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
