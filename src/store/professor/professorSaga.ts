import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import api from '@/services/api';
import { loginRequest, loginSuccess, loginFailure, toggleFavoriteRequest, toggleFavoriteSuccess, toggleFavoriteFailure } from './professorSlice';

function* login({ payload }: ReturnType<typeof loginRequest>): SagaIterator {
  try {
    const res = yield call(api.get, '/professors', {
      params: { email: payload.email, password: payload.password }
    });
    if (res.data.length === 0) throw new Error('Credenciais inválidas');

    const professor = res.data[0];
    yield put(loginSuccess(professor));
  } catch (err: any) {
    yield put(loginFailure(err.message || 'Erro no login'));
  }
}

function* toggleFavorite({ payload }: ReturnType<typeof toggleFavoriteRequest>): SagaIterator {
  try {
    // GET professor
    const res = yield call(api.get, `/professors/${payload.professorId}`);
    const professor = res.data;

    let newFavorites: number[];
    if (professor.favorites.includes(payload.studentId)) {
      newFavorites = professor.favorites.filter((id: number) => id !== payload.studentId);
    } else {
      newFavorites = [...professor.favorites, payload.studentId];
    }

    // PUT professor
    const updateRes = yield call(api.put, `/professors/${payload.professorId}`, {
      ...professor,
      favorites: newFavorites,
    });

    yield put(toggleFavoriteSuccess(updateRes.data));
  } catch (err: any) {
    yield put(toggleFavoriteFailure(err.message || 'Erro ao alterar favoritos'));
  }
}

export default function* professorSaga() {
  yield takeLatest(loginRequest.type, login);
  yield takeLatest(toggleFavoriteRequest.type, toggleFavorite);
}