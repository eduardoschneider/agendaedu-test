import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-vertical: 8px;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
    border: 3px solid #8332b9;
  elevation: 3;

  display: flex;
  flex-direction: row;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: transparent;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  height: 90%;
  background-color: green;
  margin-vertical: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const DeleteText = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 16px;
`;