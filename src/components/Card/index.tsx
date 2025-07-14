import React from 'react';
import { CardContainer, DeleteButton, DeleteText } from './styles';
import { Swipeable } from 'react-native-gesture-handler';

interface CardProps {
  children: React.ReactNode;
  style?: any;
  onPress?: () => void;
  onDelete?: () => void;
}

export default function Card({ children, style, onPress, onDelete }: CardProps) {
  
  return (
    <Swipeable
      renderRightActions={() => (
        <DeleteButton onPress={onDelete}>
          <DeleteText>Deletar</DeleteText>
        </DeleteButton>
      )}>
      <CardContainer onPress={onPress} style={style}>
        {children}
      </CardContainer>
    </Swipeable>
  );
}
