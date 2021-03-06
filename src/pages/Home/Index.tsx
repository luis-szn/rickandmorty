import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
        Container, 
        Header, 
        HeaderTitle, 
        SearchContainer, 
        SearchInput, 
        TotalList 
    } from './styles';

import Icon from 'react-native-vector-icons/AntDesign';
import { CharacterCard } from '../../components/CharacterCard';
import {FlatList} from 'react-native';


export function Home(){
    
    interface character{
        image: string;
        name: string;
        species: string;
        origin: string;
    }

    const [characters, setCharacters] = useState<character[]>([]);
    const [charactersCount, setCharactersCount] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const CharactersUrl = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
    const CharactersUrlforSearch = "https://rickandmortyapi.com/api/character";
 
    const getCharacters = (url: string) => {
        axios(url)
            .then(response => {setCharacters([...characters, ...response.data.results]); setCharactersCount(response.data.info.count)})
            .catch(error => console.log(error))

    };

    useEffect(() => {
        getCharacters(CharactersUrl);
    }, [currentPage])

    const getCharactersBySearch = ( url: string ) => {
        axios(url)
            .then(response => setCharacters(response.data.results))
            .catch(error => console.log(error))
    };
    
    const getCharactersBySearchCount = (url: string) => {
        axios(url)
            .then(response => setCharactersCount(response.data.info.count))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        getCharactersBySearch(CharactersUrlforSearch+'/?name='+searchText );
        getCharactersBySearchCount(CharactersUrlforSearch+'/?name='+searchText);
    }, [searchText]);



    const HandleLoadMore = () => {
        setCurrentPage(currentPage + 1)
    }

    return(
        <Container>
            <Header>
                <HeaderTitle>Listagem</HeaderTitle>
                <TotalList>{charactersCount} personagens</TotalList>
            </Header>

            <SearchContainer>
                <Icon name='search1' size={20} color='#1E2047'/>
                <SearchInput 
                    placeholder='Busque por um Personagem'
                    onChangeText={(text) => setSearchText(text)}
                ></SearchInput>
            </SearchContainer>
            
            <FlatList 
                data={characters}
                renderItem={({ item }) =>(
                    <CharacterCard characterProp={item} /> 
                  )}
                onEndReached={ HandleLoadMore }
                onEndReachedThreshold={0.1}
                
             />
           

        </Container>
    )
}