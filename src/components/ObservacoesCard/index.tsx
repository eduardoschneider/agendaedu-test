import React from 'react';
import Card from '@/components/Card';
import { Observation } from '@/types/types';
import { Title, Info } from './styles';

interface ObservationCardProps {
  obs: Observation;
}

export default function ObservationCard({ obs }: ObservationCardProps) {
  return (
    <Card>
      <Title>{obs?.text}</Title>
      <Info>{obs?.date}</Info>
    </Card>
  );
}