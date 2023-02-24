/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';

import styles from './src/styled';

const image = {uri: 'https://reactjs.org/logo-og.png'};

const App = () => {
  console.log('Emre');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.view}>
          <View>
            <Text style={styles.title}>
              The title and onPress handler are required. It is recommended to
              set accessibilityLabel to help make your app usable by everyone.
            </Text>
            <Button
              title="Press me"
              color="#f1940f"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.fixToText}>
            <Button
              title="Left Button"
              color="#11940f"
              onPress={() => Alert.alert('Left Button pressed')}
            />
            <Button
              title="Right Button"
              color="#91940f"
              onPress={() => Alert.alert('Right Button pressed')}
            />
          </View>
          <View style={styles.img}>
            <Image
              style={styles.rnLogo}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  view: {
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    margin: 8,
    padding: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rnLogo: {
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  img: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
