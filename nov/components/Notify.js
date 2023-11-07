import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const foot = require('../assets/assets/footer.png');

export default function Notify() {
return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Svg width={130} height={5} viewBox="0 0 130 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0.5" width="37" height="5" rx={2.5} fill="black" />
        <Rect x="46.5" width="37" height="5" rx={2.5} fill="black" />
        <Rect x="92.5" width="37" height="5" rx={2.5} fill="black" />
      </Svg>
      <Text style={styles.skipText}>SKIP</Text>
    </View>
    <View style={{alignItems: 'center', top: 45}}>
    <Image source={require('../assets/assets/notify.png')} style={styles.image} /></View>
    <View style={styles.content}>
      <View style={styles.imageBg}>
        <ImageBackground source={foot} resizeMode="cover" style={styles.footImg}/>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>Provide Security</Text>
        <Text style={{ color: '#fff',}}>
          It provides 24/7 monitoring, giving{'\n'}
          customers peace of mind that their{'\n'}
          garden is protected at all times.
        </Text>
      </View>
    </View>
    <StatusBar style="auto" />
  </View>
)};

const styles = StyleSheet.create({
container: {
  flex: 1,
  width: '100%', 
  height: '100%', 
},
image: {
  marginTop: 50,
  maxHeight: 280,
  maxWidth: 280,
  
},
imageBg: {
  width: '100%',
  height: '100%',
  top: 80,
},
footImg:{
  width: '100%',
  height: '100%',
},
header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 30,
  marginTop: 50,
},
content: {
  flex: 1,
  justifyContent: 'center',
},
info: {
  marginLeft: 20,
  position: 'absolute',
  display: 'flex',
},
infoText: {
  fontSize: 20,
  fontWeight: 'bold',
},
});
