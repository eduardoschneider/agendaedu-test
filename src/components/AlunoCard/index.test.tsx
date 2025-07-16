import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AlunoCard from './';
import { Student } from '../../types/types';

describe('AlunoCard', () => {
  const mockStudent: Student = {
    id: 1,
    name: 'João Silva',
    age: 15,
    class: '1A',
  };

  it('verifica se o estudante foi renderizado corretamente', () => {
    const { getByText } = render(
      <AlunoCard aluno={mockStudent} toggleFavorite={() => {}} />
    );

    expect(getByText('João Silva')).toBeTruthy();
    expect(getByText('15 anos')).toBeTruthy();
    expect(getByText('Turma 1A')).toBeTruthy();
  });

  it('chama o toggleFavorite quando clica para favoritar', () => {
    const toggleFavorite = jest.fn();
    const { getByTestId } = render(
      <AlunoCard aluno={mockStudent} toggleFavorite={toggleFavorite} />
    );

    fireEvent.press(getByTestId('favorite-icon'));
    expect(toggleFavorite).toHaveBeenCalled();
  });

  it('chama o clique do card', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <AlunoCard aluno={mockStudent} toggleFavorite={() => {}} onPress={onPress} />
    );

    fireEvent.press(getByTestId('card'));
    expect(onPress).toHaveBeenCalled();
  });

  it('mostra a bandeira colorida quando é favorito', () => {
    const { getByTestId } = render(
      <AlunoCard aluno={mockStudent} toggleFavorite={() => {}} isFavorite />
    );

    expect(getByTestId('favorite-icon').props.style.opacity).toBe(1);
  });
  
});
