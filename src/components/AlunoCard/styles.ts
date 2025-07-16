import styled from 'styled-components/native';
import AppText from '@/components/AppText';

export const Title = styled(AppText)`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 4px;
`;

export const Info = styled(AppText)`
  font-size: 14px;
  margin-top:3px;
  color: black;
`;

export const ImageContainer = styled.View`
  height: 126px;
  width: 120px;
  overflow: hidden;
  background-color: white;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  border-radius:5px 0px 0px 5px;
  position: relative;
`;

export const AlunoImage = styled.Image`
  width: 200%;
  height: 100%;
`;

export const AlunoContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 0px;
`;

export const FavoriteIcon = styled.Image`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -2px;
  right: 10px;
  z-index: 1;
`;


export const FavoriteIconContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: absolute;
  padding: 30px;
  top: -2px;
  right: 0px;
  z-index: 1;
`;