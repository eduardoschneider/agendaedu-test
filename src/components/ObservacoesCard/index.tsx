import React from 'react';
import Card from '@/components/Card';
import { Observation } from '@/types/types';
import * as SC from './styles';

interface ObservationCardProps {
  obs: Observation;
  onPress?: () => void;
  onDelete?: () => void;
}

export default function ObservationCard({ obs, onPress, onDelete }: ObservationCardProps) {

  const customStyle = {backgroundColor: 'white', borderColor: '#00000011'};

  return (
    <Card onPress={onPress} onDelete={onDelete} style={customStyle} testID="card">
      <SC.Container>
        <SC.Title>{obs?.text}</SC.Title>
        <SC.Info>
          Observação registrada no dia{' '}
          {obs?.date
            ? new Date(obs.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
            : '-'}
        </SC.Info>
      </SC.Container>
    </Card>
  );
}
