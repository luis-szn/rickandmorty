import styled from "styled-components/native";

export const Container = styled.View`
    height: 100%;
    width: 100%;
    background: #C4C4C4;

`;

export const Header = styled.View`
    width: 100%;
    height: 125px;
    background: #1E2047 ;
    justify-content: space-between;
    align-items: center ;
    flex-direction: row;

`;

export const HeaderTitle = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    margin-left: 23px;
    color: #FFFFFF;
    
`;

export const TotalList = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 14px;
    margin-right: 15px ;
    color: #FFFFFF;
`;

export const SearchContainer = styled.View`
    background: #FFFFFF;
    margin: -25px 15px 15px 15px;
    padding-left: 15px;
    border-radius: 6px;
    width: auto;
    height: 50px;
    align-items: center ;
    flex-direction: row;
    
`;

export const SearchInput = styled.TextInput`
    font-family: 'Poppins-Regular';
    width: 100%;
    height: 100%;
    margin-left: 20px;
   
`;

export const Loader = styled.View`
    align-items: center;
    justify-content: center;
    height: 56px;

`;