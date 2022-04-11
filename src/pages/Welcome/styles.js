import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    height: 100%;
 
`;

export const Wallpaper = styled.Image`
    width: 100%;
    z-index:-5;
    position: absolute;
   
`;

export const WelcomeButton = styled.TouchableOpacity`
        width: 340px;
        height: 55px;
        background: #1E2047;
        border-radius: 8px;
        justify-content: center;
        flex-direction: row;
        align-items: center ;
        top: 265px;


`;

export const TitleButton = styled.Text`
        color: #FFFFFF;
        font-size: 15px;
        margin-right: 18.94px;
        font-family:${'Poppins-Regular'};

`;

