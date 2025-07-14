import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 36px 16px;
  background-color: #e9d4ff;
`;

export const Message = styled.Text`
  text-align: center;
  margin: 16px 0;
  color: red;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #4CAF50;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  align-items: center;
  margin-top: 16px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const AddButtonText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;