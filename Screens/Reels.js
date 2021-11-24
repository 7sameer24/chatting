import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';

const backgroundVideo = require('../assets/Videos');
const Reels = () => {
  return (
    <View style={styles.container}>
      <Video source={backgroundVideo} style={styles.Video} />
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
  },
  Video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
