import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Input,Icon,Card,Button} from "react-native-elements"
import { genericStyles } from '../constants/genericStyles'
import { FONTS,COLORS} from '../constants/theme'
import LinearGradient from 'react-native-linear-gradient';



export default function LoginScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={[ '#eeaeca','#94bbe9',]} style={styles.LinearGradient}>
            <View style={styles.BackDrop}>
                <Icon
                name="account-circle"
                type="material-community"
                size={130}
                color={COLORS.white}
                />
                <Text style={styles.title}>
                    Member Login.
                </Text>
            </View>
            
            <Card containerStyle={styles.inputContainer}>
              <Input
                placeholder='Email'
                placeholderTextColor={COLORS.darkgray}
                leftIcon={
                    <Icon
                      name='people-outline'
                      size={24}
                      color='black'
                      type="ionicon"
                    />
                  }
                inputContainerStyle={styles.inputContainerStyle}
                errorStyle={
                genericStyles.m(0)
                }
            />
               <Input 
               placeholder="Password"
               placeholderTextColor={COLORS.darkgray}
               secureTextEntry={true}
               leftIcon={
                <Icon
                  name='lock-outline'
                  size={24}
                  color='black'
                  type="material-community"
                />
              }
              inputContainerStyle={styles.inputContainerStyle}
            errorStyle={
            genericStyles.m(0)
            }
              />
              <Button
            title="Login"
            type="outline"
            titleStyle={{color:COLORS.white}}
            containerStyle={styles.LoginInBtn}
        />
            </Card>
          <View style={styles.signUpBtn}>
          <Text style={styles.signUp}>
          Don't have an account?
          </Text>
          <TouchableOpacity style={genericStyles.mt(12)} onPress={()=>navigation.navigate('SignScreen')}>
              <Text style={styles.signUpBtn2}>Sign up.</Text>
          </TouchableOpacity>
          </View>
            </LinearGradient>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    LinearGradient:{
    flex:1
    },
    title:{
        fontSize:24,
        color:COLORS.white,
        textAlign:'center',
        fontFamily:"PlayfairDisplay-Black",
     
    },
    BackDrop:{
        padding:10,
        margin:10,
        marginTop:20,
        borderRadius:10,
    },
    inputContainer:{
        marginTop:20,
        padding:5,
        borderRadius:7,
        backgroundColor:COLORS.white,
    },
    inputContainerStyle:{
        borderBottomWidth:0.6,
        // backgroundColor:COLORS.primary,
        padding:7,
        borderRadius:7
    },
    signUp:{
        fontSize:15,
        color:COLORS.black,
        fontFamily:"NotoSans-Bold",
        marginTop:10
    },
    signUpBtn:{
    flexDirection:'row',
    alignSelf:'center'
    },
    signUpBtn2:{
        fontSize:13,
        color:COLORS.red,
        fontFamily:"NotoSans-Bold",
    },
    LoginInBtn:{
        margin:15,
        backgroundColor:"#94bbe9",
        borderRadius:7
    }
})
