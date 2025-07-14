import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  height: 90%;
  overflow: hidden;
  padding-bottom: 110px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
  margin-top: 15px;
`;

export const Input = styled.TextInput`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #4CAF50;
    width: 100%;
    position: absolute;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 20px;
    padding: 10px;
    border-radius: 8px;
    `;
