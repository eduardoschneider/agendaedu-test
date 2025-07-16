import React from 'react';
import Card from '@/components/Card';
import { Student } from '@/types/types';
import  * as SC  from './styles';
import { getRandomColor } from '@/utils/colors';
import isEqual from 'lodash.isequal';

interface AlunoCardProps {
  aluno: Student;
  onPress?: () => void;
  onDelete?: () => void;
  isFavorite?: boolean;
  toggleFavorite: () => void;
}

 function AlunoCard({ aluno, onPress, onDelete, isFavorite, toggleFavorite }: AlunoCardProps) {

  return (
    <Card onPress={onPress} onDelete={onDelete} style={{ backgroundColor: getRandomColor(aluno.name) }} testID="card">
      <SC.ImageContainer>
        <SC.AlunoImage source={require('@/assets/profile-pic.png')}/>
        <SC.AlunoImage source={{ uri: "https://randomuser.me/api/portraits/men/" + aluno.id + ".jpg" }}/>
      </SC.ImageContainer>

      <SC.FavoriteIconContainer testID="favorite-icon" onPress={(e) => { e?.stopPropagation?.(); toggleFavorite() }}>

        <SC.FavoriteIcon source={require('@/assets/favorite.png')} style={{opacity: isFavorite === true ? 1:0.2}}/>
      </SC.FavoriteIconContainer>

      <SC.AlunoContainer>
        <SC.Title>{aluno.name}</SC.Title>
        <SC.Info>{aluno.age} anos</SC.Info>
        <SC.Info>Turma {aluno.class}</SC.Info>
      </SC.AlunoContainer>
    </Card>
  );
}

export default React.memo(AlunoCard, (prev, next) => {
  return isEqual(prev.aluno, next.aluno) && prev.isFavorite === next.isFavorite;
});