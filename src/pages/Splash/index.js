import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import {splashbg} from "../../assets"
import Mamarecipe from "../../assets/images/mamarecipe.svg"



const Splash = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('MainApp')
    }, 3000)
  },[navigation])
  
  return (
    <ImageBackground source={splashbg} style={styles.background}>
      <Mamarecipe height="40%" width="40%"></Mamarecipe>
      <Text style={styles.text}>Mama Recipe</Text>
    </ImageBackground>
  )
}

export default Splash


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  text: {
    fontSize:45,
    fontWeight: 'bold',
    color:'white',
    marginTop:-70,
    marginBottom:40
  }
}) 