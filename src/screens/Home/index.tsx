import React from 'react';
import { Container, Badge, Profile, BadgeContainer, Name, Cargo, Counter, CounterLabel, Bio, SairButton, SairLabel } from './styles';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { StackScreenNavigationProp } from '@/navigation';
import { logout } from '@/store/professor/professorSlice';

export default function Home({ navigation }: { navigation: StackScreenNavigationProp<'Dashboard'> }) {

  const professor = useSelector((state: RootState) => state.professor.data);
  const dispatch = useDispatch();

  const logoff = () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  return (
    <Container source={require('@/assets/dashboard-background.jpg')} resizeMode="cover">

      <SairButton onPress={() => logoff()}>
        <SairLabel> Sair </SairLabel>
      </SairButton>

      <Profile
        source={{ uri: "https://randomuser.me/api/portraits/men/4.jpg" }}
        resizeMode="cover"/>

      <Name>{professor?.name}</Name>
      <Bio>{professor?.bio}</Bio>
      <Cargo>PROFESSOR</Cargo>

      <BadgeContainer>
        <Badge>
          <CounterLabel>ALUNOS FAVORITOS</CounterLabel>
          <Counter>{professor?.favorites?.length}</Counter>
        </Badge>
      </BadgeContainer>
      
    </Container>
  );
}
