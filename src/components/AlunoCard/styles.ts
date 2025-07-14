import styled from 'styled-components/native';

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 4px;
`;

export const Info = styled.Text`
  font-size: 14px;
  margin-top:3px;
  color: black;
`;

export const ImageContainer = styled.View`
  height: 126px;
  overflow: hidden;
  background-color: red;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  border-radius:5px 0px 0px 5px;
`;

export const AlunoImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 25px;
`;

export const AlunoContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 0px;
`;