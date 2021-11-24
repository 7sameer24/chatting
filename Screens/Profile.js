import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, images} from '../constants';

const Profile = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Image style={styles.userImg} source={images.avatar_5} />
        <Text style={styles.userName}>Jenny doe</Text>
        <Text style={styles.aboutUser}>
          Wherever you go, no matter what the weather, always bring your own
          sunshine
        </Text>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.userBtnText}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.userBtnText}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: COLORS.secondary,
    borderWidth: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  aboutUser: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: COLORS.MoodyBlue,
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnText: {
    color: COLORS.darkgray,
  },
});
