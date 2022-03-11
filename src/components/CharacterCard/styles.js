import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    height: 150px;
    width: auto;
    border-radius: 6px;
    margin: 15px 15px 0 15px;
    background: #F0F0F5;
    flex-direction: row;
    overflow: hidden;
 

`;
export const PhotoContainer = styled.View`
    height: 150px;
    width: 150px;
`;

export const Photo = styled.Image`
    height: 150px;
    width: 150px;
`;

export const InfoContainer = styled.View`
    height: 150px;
    width: 220px;
    padding: 20px;
    justify-content: center;   
`;

export const TitleName = styled.Text`
   color: #333333;
   font-size: 20px ;
   line-height: 30px;
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
