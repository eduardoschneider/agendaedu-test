import styled from 'styled-components/native';

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Info = styled.Text`
  font-size: 10px;
  position: absolute;
  bottom: 10px;
  font-weight: bold;
  right: 10px;
  color: #1a00afff;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  height: 100%;
`;