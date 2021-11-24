import React,{useState} from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'


import AppDrawer from './navigation/DrawerNavigator'

console.warn = () => {}

const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSans-Regular': require('./assets/font/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/font/OpenSans-Bold.ttf'),
    'OpenSans-SemiBold': require('./assets/font/OpenSans-SemiBold.ttf'),
    'Texturina-BoldItalic':require('./assets/font/Texturina-BoldItalic.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
    />
  }

  return (
    <View style={{flex:1}}>
      <AppDrawer/>
    </View>
  );
}

