import React from 'react';
import * as SC from './styles';
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
    <SC.Container source={require('@/assets/dashboard-background.jpg')} resizeMode="cover">

      <SC.SairButton onPress={() => logoff()}>
        <SC.SairLabel> Sair </SC.SairLabel>
      </SC.SairButton>

      <SC.Profile
        source={{ uri: "https://randomuser.me/api/portraits/men/4.jpg" }}
        resizeMode="cover"/>

      <SC.Name>{professor?.name}</SC.Name>
      <SC.Bio>{professor?.bio}</SC.Bio>
      <SC.Cargo>PROFESSOR</SC.Cargo>

      <SC.BadgeContainer>
        <SC.Badge>
          <SC.CounterLabel>ALUNOS FAVORITOS</SC.CounterLabel>
          <SC.Counter>{professor?.favorites?.length}</SC.Counter>
        </SC.Badge>
      </SC.BadgeContainer>
      
    </SC.Container>
  );
}
