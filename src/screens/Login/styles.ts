import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const BackgroundGradient = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px 40px 130px 40px;
  background-color: #fff;
`;

export const Logo = styled.Text`
  font-size: 48px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 2px;
  width: 100%;
`;

export const Subtitle = styled.Text`
  font-size: 19px;
  color: #000;
  margin-bottom: 24px;
  width: 100%;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background: transparent;
  border-bottom-width: 1px;
  border-bottom-color: #0000001a;
  padding: 0 10px;
  margin-bottom: 16px;
  color: #000;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: transparent;
  border: 2px solid #8332b9;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const ButtonText = styled.Text`
  color: #8332b9;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

export const Cadastro = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

export const CadastroText = styled.Text`
  color: #000;
  font-size: 14px;
  text-decoration: underline;
`;

export const ErrorMessage = styled.Text`
  color: #ff3333;
  margin-bottom: 8px;
  font-weight: 600;
`;
