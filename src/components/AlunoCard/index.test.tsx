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

  it('renders student info correctly', () => {
    const { getByText } = render(
      <AlunoCard aluno={mockStudent} toggleFavorite={() => {}} />
    );

    expect(getByText('João Silva')).toBeTruthy();
    expect(getByText('15 anos')).toBeTruthy();
    expect(getByText('Turma 1A')).toBeTruthy();
  });

  it('calls toggleFavorite when heart is pressed', () => {
    const toggleFavorite = jest.fn();
    const { getByTestId } = render(
      <AlunoCard aluno={mockStudent} toggleFavorite={toggleFavorite} />
    );

    fireEvent.press(getByTestId('favorite-icon'));
    expect(toggleFavorite).toHaveBeenCalled();
  });

  it('calls onPress when card is pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <AlunoCard aluno={mockStudent} toggleFavorite={() => {}} onPress={onPress} />
    );

    fireEvent.press(getByTestId('card'));
    expect(onPress).toHaveBeenCalled();
  });

  it('shows full opacity when isFavorite is true', () => {
    const { getByTestId } = render(
      <AlunoCard aluno={mockStudent} toggleFavorite={() => {}} isFavorite />
    );

    expect(getByTestId('favorite-icon').props.style.opacity).toBe(1);
  });
  
});
