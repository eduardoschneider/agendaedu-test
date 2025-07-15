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

export default function ObservationCard({
  obs,
  onPress,
  onDelete,
}: ObservationCardProps) {

  const customStyle = {backgroundColor: 'white', borderColor: '#00000011'};

  return (
    <Card onPress={onPress} onDelete={onDelete} style={customStyle}>
      <Container>
        <Title>{obs?.text}</Title>
        <Info>
          Observação registrada no dia{' '}
          {obs?.date
            ? new Date(obs.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
            : 'data desconhecida'}
        </Info>
      </Container>
    </Card>
  );
}
