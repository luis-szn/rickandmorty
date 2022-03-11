import styled from "styled-components/native";

export const Container = styled.View`
    width:100%;
    height: 100%;
    background: #F0F0F5;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #1E2047;
    border-radius: 40px;
    left: 20px;
    top: 20px;
`;

export const PhotoContainer = styled.View`
    width: auto;
    height: 350px;
`;

export const Photo = styled.Image`
    width: auto;
    height: 350px;
`;

export const InfoContainer = styled.View`
    width: auto;
    height: 387px;
    padding: 31px 20px 39px 20px;
`;

export const TitleContainer = styled.View`
    margin:0;
    padding:0;
    justify-content:space-between;
    align-items: center;
    flex-direction: row;
`;
export const FavoriteContainer = styled.View`
    margin:0;
    padding:0;
    justify-content:center;
    align-items: center;
`;

export const OrganizeIndividualContainer = styled.View`
    max-width: 80px;
    height: 48px;
    flex-direction: column;
`;

export const OrganizeContainer = styled.View`
    width: 243px;
    height: 48px;
    margin-bottom: 30px;
    margin-top: 30px;
    justify-content: space-between;
    flex-direction: row;
`;

export const SearchGoogleContainer = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 56px;
    background: #1E2047;
    justify-content: center;
    align-items: center;
`;

export const TitleSearchGoogle = styled.Text`
   color: #E1E1E6;
   font-size: 22px ;
   line-height: 33px;
   font-family: 'Poppins-SemiBold';
   
`;



export const TitleName = styled.Text`
   color: #333333;
   font-size: 24px ;
   line-height: 36px;
   font-family: 'Poppins-SemiBold';
   
`;

export const TopicName = styled.Text`
   color: #333333;
   font-size: 16px ;
   line-height: 24px;
   font-family: 'Poppins-Regular';
`;

export const TopicDescription = styled.Text`
   color: #555555;
   font-size: 16px ;
   line-height: 24px;
   font-family: 'Poppins-SemiBold';
`;



