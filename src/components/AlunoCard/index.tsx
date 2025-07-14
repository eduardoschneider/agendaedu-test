import React from 'react';
import Card from '@/components/Card';
import { Student } from '@/types/types';
import { Title, Info } from './styles';

interface AlunoCardProps {
  aluno: Student;
  onPress?: () => void;
  onDelete?: () => void;
}

export default function AlunoCard({ aluno, onPress, onDelete }: AlunoCardProps) {
  return (
    <Card onPress={onPress} onDelete={onDelete}>
      <Title>{aluno.name}</Title>
      <Info>Idade: {aluno.age}</Info>
      <Info>Turma: {aluno.class}</Info>
    </Card>
  );
}