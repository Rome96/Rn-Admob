import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";


export default function App() {

  useEffect(() => {
    interstitalAd()
  }, []);


  const interstitalAd = async () => {
    await setTestDeviceIDAsync('EMULATOR');
    await AdMobInterstitial.setAdUnitID("ca-app-pub-8273327659294554/2005262338");
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }

  return (
    <View style={styles.container}>
      <Text>Turiano el capo</Text>
      <StatusBar style="auto" />

      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-8273327659294554/3889189649" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        setTestDeviceIDAsync
        onDidFailToReceiveAdWithError={err => console.log('ERROR DEL BANNER =>', err)}
      />

      {/* <PublisherBanner
        bannerSize="fullBanner"
        servePersonalizedAds
        adUnitID="ca-app-pub-3940256099942544/2934735716" // Test ID, Replace with your-admob-unit-id
        onDidFailToReceiveAdWithError={(err) => console.log(err)}
        onAdMobDispatchAppEvent={(data) => console.log(`dataaaa ${data}`)}
      /> */}
    </View>
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
