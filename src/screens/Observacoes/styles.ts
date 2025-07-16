import AppText from '@/components/AppText';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 56px 26px 120px 26px;
  background-color: #e9d4ff;
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

export const AddButtonText = styled(AppText)`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;