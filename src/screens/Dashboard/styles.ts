import Icon from '@react-native-vector-icons/fontawesome6';
import styled from 'styled-components/native';

export const CustomIcon = styled(Icon)`
    font-size: 24px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    background-color: #730dd3ff;
    border-radius: 50px;
    padding: 5px;

    /* Sombra para React Native */
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.65;
    shadow-radius: 100px;
    elevation: 10;
`;