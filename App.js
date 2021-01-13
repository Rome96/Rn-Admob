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
    await AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712");
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }

  return (
    <View style={styles.container}>
      <Text>Turiano el capo</Text>
      <StatusBar style="auto" />

      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        setTestDeviceIDAsync
        // onDidFailToReceiveAdWithError={this.bannerError}
      />

      {/* <PublisherBanner
        bannerSize="fullBanner"
        servePersonalizedAds
        adUnitID="ca-app-pub-8273327659294554/9641202057" // Test ID, Replace with your-admob-unit-id
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
