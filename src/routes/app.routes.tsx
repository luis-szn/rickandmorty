import React from 'react';
import { propsNavigationStack } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../../src/pages/Home/Index';
import { Welcome } from '../../src/pages/Welcome/Index';
import { Profile } from '../../src/pages/Profile';

const Stack = createNativeStackNavigator<propsNavigationStack>();

export default function AppRoutes (){
  return (
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Welcome'
          screenOptions={{
            headerShown: false
          }}
        >

          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Profile" component={Profile}/>
          
        </Stack.Navigator>

    </NavigationContainer>
  
  )
}

