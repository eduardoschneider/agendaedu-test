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
    <Card onPress={onPress} onDelete={onDelete} style={{ backgroundColor: getRandomColor(aluno.name) }}>
      <ImageContainer>
        <AlunoImage source={{ uri: "https://randomuser.me/api/portraits/men/" + (isNaN(aluno.id) ? 1:aluno.id) + ".jpg" }}/>
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
    prev.aluno.name === next.aluno.name &&
    prev.aluno.age === next.aluno.age &&
    prev.aluno.class === next.aluno.class &&
    prev.isFavorite === next.isFavorite
  );
});