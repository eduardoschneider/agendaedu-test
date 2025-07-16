import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from './index';
import * as redux from 'react-redux';
import { loginRequest } from '@/store/professor/professorSlice';

jest.mock('@/store/professor/professorSlice', () => ({
  loginRequest: jest.fn((payload) => ({ type: 'LOGIN_REQUEST', payload })),
}));

const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
const useSelectorSpy = jest.spyOn(redux, 'useSelector');

describe('Login Screen (integração)', () => {
  let mockDispatch: jest.Mock;
  const navigationMock = { navigate: jest.fn(), replace: jest.fn() };

  beforeEach(() => {
    // reseta mocks
    mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);
    useSelectorSpy.mockReturnValue({ data: null });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve digitar email e senha e disparar loginRequest', () => {
    const { getByPlaceholderText, getByText } = render(
      <Login navigation={navigationMock as any} />
    );

    fireEvent.changeText(getByPlaceholderText('Digite seu e-mail...'), 'edu.schneiders@gmail.com');
    fireEvent.changeText(getByPlaceholderText('Digite sua senha...'), '123456');
    fireEvent.press(getByText('Login'));

    expect(loginRequest).toHaveBeenCalledWith({
      email: 'edu.schneiders@gmail.com',
      password: '123456',
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'LOGIN_REQUEST',
      payload: { email: 'edu.schneiders@gmail.com', password: '123456' },
    });
  });

  it('quando professor.data existe, deve chamar navigation.replace("Dashboard")', async () => {
    // simula estado já logado
    useSelectorSpy.mockReturnValue({ data: { id: '1', name: 'X' } });

    render(<Login navigation={navigationMock as any} />);

    await waitFor(() => {
      expect(navigationMock.replace).toHaveBeenCalledWith('Dashboard');
    });
  });

  it('deve navegar para Cadastro ao tocar em "Clique aqui"', () => {
    const { getByText } = render(
      <Login navigation={navigationMock as any} />
    );

    fireEvent.press(getByText('Clique aqui'));
    expect(navigationMock.navigate).toHaveBeenCalledWith('Cadastro');
  });
});
