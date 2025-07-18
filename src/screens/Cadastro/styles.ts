import AppText from '@/components/AppText';
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

export const Logo = styled(AppText)`
  font-size: 48px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 40px;
`;

export const Title = styled(AppText)`
  font-size: 22px;
  font-weight: 600;
  color: #6f07e6ff;
  margin-bottom: 2px;
  width: 100%;
`;

export const Subtitle = styled(AppText)`
  font-size: 15px;
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

export const ButtonText = styled(AppText)`
  color: #8332b9;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

export const CadastroContainer = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

export const CadastroText = styled(AppText)`
  color: #000;
  font-size: 14px;
  text-decoration: underline;
`;

export const ErrorMessage = styled(AppText)`
  color: #ff3333;
  margin-bottom: 8px;
  font-weight: 600;
`;
