import React from 'react';
import { CardContainer, DeleteButton, DeleteText } from './styles';
import { Swipeable } from 'react-native-gesture-handler';

interface CardProps {
  children: React.ReactNode;
  style?: any;
  onPress?: () => void;
  onDelete?: () => void;
  testID: any;
}

export default function Card({ children, style, onPress, onDelete, testID }: CardProps) {
  
  return (
    <Swipeable
      friction={3}
      renderRightActions={() => (
        <DeleteButton onPress={onDelete}>
          <DeleteText>Deletar</DeleteText>
        </DeleteButton>
      )}>
      <CardContainer testID={testID} onPress={onPress} style={style}>
        {children}
      </CardContainer>
    </Swipeable>
  );
}
