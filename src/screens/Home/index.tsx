import React from 'react';
import { Container, Badge, Profile, BadgeContainer, Name, Cargo, Counter, CounterLabel, Bio } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Home() {

  const professor = useSelector((state: RootState) => state.professor.data);

  return (
    <Container source={require('@/assets/dashboard-background.jpg')} resizeMode="cover">
      <Profile
        source={{ uri: "https://randomuser.me/api/portraits/men/" + (Math.floor(Math.random() * 20) + 1) + ".jpg" }}
        resizeMode="cover"
      />
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
