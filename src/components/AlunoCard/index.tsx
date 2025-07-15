import React from 'react';
import Card from '@/components/Card';
import { Student } from '@/types/types';
import { Title, Info, AlunoContainer, AlunoImage, ImageContainer, FavoriteIcon, FavoriteIconContainer } from './styles';
import { getRandomColor } from '@/utils/colors';

interface AlunoCardProps {
  aluno: Student;
  onPress?: () => void;
  onDelete?: () => void;
  isFavorite?: boolean;
  toggleFavorite: () => void;
}

 function AlunoCard({ aluno, onPress, onDelete, isFavorite, toggleFavorite }: AlunoCardProps) {

  return (
    <Card onPress={onPress} onDelete={onDelete}>
      <ImageContainer style={{ backgroundColor: getRandomColor(aluno.name) }}>
        <AlunoImage source={require('@/assets/student-icon.png')}/>
      </ImageContainer>

      <FavoriteIconContainer onPress={(e) => {
        e.stopPropagation();
        toggleFavorite()
      }}>
        <FavoriteIcon source={require('@/assets/favorite.png')} style={{opacity: isFavorite ? 1:0.2}}/>
      </FavoriteIconContainer>

      <AlunoContainer>
        <Title>{aluno.name}</Title>
        <Info>{aluno.age} anos</Info>
        <Info>Turma {aluno.class}</Info>
      </AlunoContainer>
    </Card>
  );
}

export default React.memo(AlunoCard, (prev, next) => {
  return (
    prev.aluno.id === next.aluno.id &&
    prev.isFavorite === next.isFavorite
  );
});