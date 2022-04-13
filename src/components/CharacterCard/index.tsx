import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {propsStack} from '../../routes/types';
import { 
    Container, 
    InfoContainer, 
    Photo, 
    PhotoContainer, 
    TitleName, 
    TopicDescription, 
    TopicName 
} from './styles';

export function CharacterCard({characterProp}  : {characterProp: any} ) { 
    const navigation = useNavigation<propsStack>();

    return(
            <Container
                key={characterProp.id}
                activeOpacity={.7}
                onPress={() => navigation.navigate('Profile',{characterId: characterProp.id })}
             >
                    <PhotoContainer >
                        <Photo source={{uri : characterProp.image}}/>
                    </PhotoContainer> 
                        <InfoContainer>
                        <TitleName numberOfLines = { 1 }>{characterProp.name}</TitleName>
                        <TopicName>Species:</TopicName>
                        <TopicDescription numberOfLines = { 1 }>{characterProp.species}</TopicDescription>
                        <TopicName>Origin:</TopicName>
                        <TopicDescription numberOfLines = { 1 } >{characterProp.origin.name}</TopicDescription> 
                    </InfoContainer>
            </Container>   
    )
}

