import React from 'react';
import Card from '@/components/Card';
import { Student } from '@/types/types';
import { Title, Info, AlunoContainer, AlunoImage, ImageContainer } from './styles';
import { getRandomColor } from '@/utils/colors';

interface AlunoCardProps {
  aluno: Student;
  onPress?: () => void;
  onDelete?: () => void;
}

export default function AlunoCard({ aluno, onPress, onDelete }: AlunoCardProps) {
  return (
    <Card onPress={onPress} onDelete={onDelete}>
      <ImageContainer style={{ backgroundColor: getRandomColor(aluno.name) }}>
        <AlunoImage source={require('@/assets/student-icon.png')}/>
      </ImageContainer>
      <AlunoContainer>
        <Title>{aluno.name}</Title>
        <Info>{aluno.age} anos</Info>
        <Info>Turma {aluno.class}</Info>
      </AlunoContainer>
    </Card>
  );
}