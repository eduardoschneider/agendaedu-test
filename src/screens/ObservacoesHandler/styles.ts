import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 40px 20px;
  background-color: #e9d4ff;
  height: 90%;
  overflow: hidden;
  padding-bottom: 110px;
`;

export const Label = styled(AppText)`
  font-size: 12px;
  color: #333;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: 5px;
  margin-top: 15px;
`;

export const Input = styled.TextInput`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
`;

export const ButtonText = styled(AppText)`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

export const Title = styled(AppText)`
  font-size: 19px;
  margin-bottom: 20px;
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

export const GuideContainer = styled.View`

`;

export const GuideLabel = styled(AppText)`
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
`;