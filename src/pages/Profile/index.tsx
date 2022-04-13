import React, { useEffect, useState } from "react";
import {useGlobal} from '../../hook/globalContext'
import { useNavigation } from '@react-navigation/native';
import {propsStack} from '../../routes/types';
import Icon from 'react-native-vector-icons/AntDesign';

import { 
    Alert, 
    Linking 
} from "react-native";
import { 
    BackButton, 
    Container, 
    InfoContainer,
    OrganizeContainer, 
    OrganizeIndividualContainer, 
    Photo, 
    PhotoContainer, 
    SearchGoogleContainer, 
    TitleContainer, 
    TitleName, 
    TitleSearchGoogle, 
    TopicDescription, 
    TopicName ,
    FavoriteContainer,
    StatusDescription
} from "./styles";

type CharacterProps = {
    characterId: String
    route: any
}



const SearchGoogleUrl = "https://www.google.com/search?q=";

const openURL = async(url : any) => {
    const isSupported = await Linking.canOpenURL(url);
    if(isSupported) {
        await Linking.openURL(url);
    }
    else{
        Alert.alert(`Não foi possivel abrir a URL: ${url}`);
    }
}

export function Profile(props: CharacterProps){

    const [character, setCharacter] = useState({
        image:'.',
        name:'',
        species:'',
        gender:'',
        location: {name:''},
        origin:{name:''},
        status:'',
    });

    const CharacterUrl = "https://rickandmortyapi.com/api/character/" + props.route.params.characterId;
 
    const getCharacter = ( url: string ) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacter(data))
            .catch(error => console.log(error))
    };


    useEffect(() => {
        getCharacter(CharacterUrl);
    }, [])
    
    const navigation = useNavigation<propsStack>();
    const {favorite, handleFavorite, heart} = useGlobal();


    return(
        
        <Container>
            <PhotoContainer >
                 <Photo source={{uri : character.image}}/>
            </PhotoContainer> 

            <InfoContainer>
                <TitleContainer>
                    <TitleName>{character.name}</TitleName>
                    <FavoriteContainer onPress={() => handleFavorite(props.route.params.characterId)}>
                        <Icon  name={heart} size={25} color='#1E2047'/>
                    </FavoriteContainer>
                </TitleContainer>

                <OrganizeContainer>
                    <OrganizeIndividualContainer>
                        <TopicName>Species</TopicName>
                        <TopicDescription>{character.species}</TopicDescription>
                    </OrganizeIndividualContainer>
                    
                    <OrganizeIndividualContainer>
                        <TopicName>Gender</TopicName>
                        <TopicDescription>{character.gender}</TopicDescription>
                    </OrganizeIndividualContainer>
                </OrganizeContainer>

                <TopicName>Location</TopicName>
                <TopicDescription numberOfLines = { 1 }>{character.location.name}</TopicDescription>

                <OrganizeContainer>
                    <OrganizeIndividualContainer>
                        <TopicName>Origin</TopicName>
                        <TopicDescription numberOfLines = { 1 } >{character.origin.name}</TopicDescription>
                    </OrganizeIndividualContainer>
                    <OrganizeIndividualContainer>
                        <TopicName>Status</TopicName>
                        <StatusDescription lifeStatus={character.status}>{character.status}</StatusDescription>
                    </OrganizeIndividualContainer>
                </OrganizeContainer>
                
            </InfoContainer>
            <SearchGoogleContainer 
                activeOpacity={.7}
                onPress={() => {
                    openURL(SearchGoogleUrl + character.name + ' from Rick and Morty');
                }}
            >
                <TitleSearchGoogle>Buscar no Google</TitleSearchGoogle>
            </SearchGoogleContainer>
            <BackButton 
                activeOpacity={.7} 
                onPress={() => navigation.goBack()}
            >
                <Icon  name="arrowleft" size={25} color='#FFFFFF'/>
            </BackButton>

        </Container>
    )
}