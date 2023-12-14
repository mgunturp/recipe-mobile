import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import {logo, splashbg} from "../../assets"



const Splash = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('MainApp')
    }, 3000)
  },[navigation])
  
  return (
    <ImageBackground source={splashbg} style={styles.background}>
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
    color:'white'
  }
}) 