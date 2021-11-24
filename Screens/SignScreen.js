import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,SafeAreaView } from 'react-native'
import {Input,Icon,Card,Button} from "react-native-elements"
import { genericStyles } from '../constants/genericStyles'
import { FONTS,COLORS} from '../constants/theme'
import LinearGradient from 'react-native-linear-gradient';



export default function SingScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
            <LinearGradient colors={[ '#eeaeca','#94bbe9',]} style={styles.container}>
                <View>
                 <Icon
                    name="chevron-left"
                    type="material-community"
                    containerStyle={{position:"absolute",marginVertical:15,marginLeft:5}}
                    size={30}
                    onPress={()=>navigation.goBack()}
                    color={COLORS.white}
                 />
                </View>

            <View style={styles.BackDrop}>
                <Icon
                name="account-circle"
                type="material-community"
                size={130}
                color={COLORS.white}
                />
                <Text style={styles.title}>
                    SignUp
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
            title="Sign in"
            type="outline"
            titleStyle={{color:COLORS.white}}
            containerStyle={styles.SignInBtn}
        />
            </Card>
          <View style={styles.signUpBtn}>
          <TouchableOpacity style={genericStyles.mt(12)} onPress={()=>navigation.goBack()}>
              <Text style={styles.signUpBtn2}>Login?</Text>
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
        fontSize:14,
        color:COLORS.red,
        fontFamily:"NotoSans-Bold",
    },
    SignInBtn:{
        margin:15,
        backgroundColor:"#94bbe9",
        borderRadius:7
    }
})


