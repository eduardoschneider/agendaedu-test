import React from 'react';
import * as SC from './styles';
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
    <Swipeable friction={3} renderRightActions={() => (
        <SC.DeleteButton onPress={onDelete}>
          <SC.DeleteText>Deletar</SC.DeleteText>
        </SC.DeleteButton>
      )}>

      <SC.CardContainer testID={testID} onPress={onPress} style={style}>
        {children}
      </SC.CardContainer>
      
    </Swipeable>
  );
}
