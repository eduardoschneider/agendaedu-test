import React from 'react';
import Card from '@/components/Card';
import { Observation } from '@/types/types';
import { Title, Info } from './styles';

interface ObservationCardProps {
  obs: Observation;
  onPress?: () => void;
  onDelete?: () => void;
}

export default function ObservationCard({ obs, onPress, onDelete }: ObservationCardProps) {
  return (
    <Card onPress={onPress} onDelete={onDelete}>
      <Title>{obs?.text}</Title>
      <Info>{obs?.date}</Info>
    </Card>
  );
}