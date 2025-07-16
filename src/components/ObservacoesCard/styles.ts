import styled from 'styled-components/native';
import AppText from '@/components/AppText';

export const Title = styled(AppText)`
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Info = styled(AppText)`
  font-size: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #1a00afff;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px 10px 30px 10px;
  height: 100%;
`;