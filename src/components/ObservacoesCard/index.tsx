import React from 'react';
import Card from '@/components/Card';
import { Observation } from '@/types/types';
import { Title, Info, Container } from './styles';
import { View } from 'react-native';

interface ObservationCardProps {
  obs: Observation;
  onPress?: () => void;
  onDelete?: () => void;
}

export default function ObservationCard({ obs, onPress, onDelete }: ObservationCardProps) {
  return (
    <Card onPress={onPress} onDelete={onDelete}>
      <Container>
        <Title>{obs?.text}</Title>
        <Info>Observação registrada no dia {obs?.date}</Info>
      </Container>
    </Card>
  );
}