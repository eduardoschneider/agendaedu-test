import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 46px 16px 110px 16px;
  background-color: #e9d4ff;
`;

export const Message = styled.Text`
  text-align: center;
  margin: 16px 0;
  color: red;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #4CAF50;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  align-items: center;
  margin-top: 16px;
  position: absolute;
  top: 40px;
  right: 20px;
`;

export const AddButtonText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #000;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #000;
  margin-bottom: 12px;
`;