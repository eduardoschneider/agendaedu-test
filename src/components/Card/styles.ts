import styled from 'styled-components/native';
import AppText from '../AppText';

export const CardContainer = styled.TouchableOpacity`
  background-color: #e9d4ff;
  border-radius: 8px;
  margin-vertical: 8px;
  display: flex;
  flex-direction: row;
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

export const DeleteText = styled(AppText)`
  color: red;
  font-weight: 600;
  font-size: 16px;
`;