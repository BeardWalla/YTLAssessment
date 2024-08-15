/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import utils from '../utils';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function HomeScreen({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Text style={styles.mainContainer}>Welcome to YTL Bank</Text>
          <Button
            title="Login Now"
            onPress={async () => {
              try {
                const bioSupported = await utils.verifyBioLogin();

                if (bioSupported === 'FaceID' || bioSupported === 'TouchID') {
                  const auth = await utils.requestBioLogin();
                  console.log('auth: ', auth);
                  if (auth) {
                    navigation.navigate('History');
                  }
                } else {
                  throw new Error(
                    'Ensure you are enrolled to Biometric login feture in your device.',
                  );
                }
              } catch (ex) {
                Alert.alert('YTL Bank', ex?.message);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 50,
  },
});

export default HomeScreen;
