import { configureStore } from '@reduxjs/toolkit'
import { all } from 'redux-saga/effects'
import professorReducer from '../professor/professorSlice'
import professorSaga from '../professor/professorSaga'

const createSagaMiddleware = require('redux-saga').default;
const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
  yield all([ professorSaga() ])
}

export const store = configureStore({
  reducer: {
    professor: professorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch