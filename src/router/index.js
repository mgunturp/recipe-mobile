import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Splash, Profile, UploadRecipe, Chat} from "../pages"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="UploadRecipe" component={UploadRecipe} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  
  );
};


const Router = () => {
  return (
    <Stack.Navigator initialRouteName='MainApp'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};


export default Router;

const styles = StyleSheet.create({});
