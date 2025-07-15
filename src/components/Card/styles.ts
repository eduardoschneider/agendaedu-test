import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  background-color: #e9d4ff;
  border-radius: 8px;
  margin-vertical: 8px;
  border: 2px solid #8332b9;
  display: flex;
  flex-direction: row;
  height: 130px;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: transparent;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  height: 90%;
  background-color: transparent;
  margin-vertical: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const DeleteText = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 16px;
`;