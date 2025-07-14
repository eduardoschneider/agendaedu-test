import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding: 150px 40px 130px 40px;
`;

export const Profile = styled.Image`
    width:170px;
    height:170px;
    border-radius: 85px;
    border-width: 5px;
    border-color: #8332b9;
`;

export const Name = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin-top: 10px;
`;

export const Cargo = styled.Text`
    font-size: 16px;
    font-weight: 600;
    background-color: #8332b9;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 5px;
`;


export const BadgeContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
`;

export const Badge = styled.View`
    width: 100%;
    height: 100px;
    border: 3px solid #8332b9;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 10px;
`;

export const Counter = styled.Text`
    font-size: 32px;
    font-weight: bold;
    padding-top: 20px;
    color: black;
`;

export const CounterLabel = styled.Text`
    font-size: 12px;
    font-weight: bold;
    background-color: #8332b9;
    position: absolute;
    padding: 5px;
    top: 0;
    text-align: center;
    width: 100%;
    color: white;
`;