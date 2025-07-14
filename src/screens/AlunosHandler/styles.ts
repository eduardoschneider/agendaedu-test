import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #e9d4ff;
  height: 90%;
  overflow: hidden;
  padding-bottom: 110px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #333;
  margin-bottom: 5px;
  font-weight: bold;
  margin-top: 15px;
  margin-left:4px;
`;

export const Input = styled.TextInput`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  background-color: white;
  padding: 10px 15px;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: purple;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #8332b9;
  width: 100%;
  position: absolute;
  bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 20px;
  padding: 10px;
  border-radius: 8px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #4CAF50;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 5px;
`;

export const AddButtonText = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
`;