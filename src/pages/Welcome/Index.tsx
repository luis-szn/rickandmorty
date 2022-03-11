import React from 'react';
import {
  Container, 
  WelcomeButton, 
  Wallpaper, 
  TitleButton
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Background from '../../../public/images/wallpaper.png';

export function Welcome({ navigation } : { navigation: any }){

  return(
    <Container> 
      
        <Wallpaper 
          source={Background} 
        />
        <WelcomeButton 
          onPress={() => navigation.navigate('Home') }
        >
          <TitleButton>Prosseguir</TitleButton>
          <Icon  name="arrowright" size={25} color='#FFFFFF'/>

        </WelcomeButton>

    </Container>
  )
}



