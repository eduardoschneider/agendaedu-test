import React from 'react';
import { CardContainer } from './styles';

interface CardProps {
  children: React.ReactNode;
  style?: any;
  onPress?: () => void;
}

export default function Card({ children, style, onPress }: CardProps) {
  return <CardContainer onPress={onPress} style={style}>{children}</CardContainer>;
}