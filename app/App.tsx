/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HOME} from './src/constants';

import {store} from './src/store';
import {Provider} from 'react-redux';
import {navigationScreens} from './src/constants/navigation';

function stackHandler() {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <Navigator initialRouteName={HOME}>
      {navigationScreens?.map((screenInfo, idx) => (
        <Screen key={'nav' + idx} {...screenInfo} />
      ))}
    </Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>{stackHandler()}</NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
