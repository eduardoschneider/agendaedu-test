import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Professor } from '@/types/types';

interface LoginPayload {
  email: string;
  password: string;
}

interface ProfessorState {
  data: Professor | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfessorState = {
  data: null,
  loading: false,
  error: null,
};

const professorSlice = createSlice({
  name: 'professor',
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<LoginPayload>) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<Professor>) {
      state.data = action.payload;
      state.loading = false;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    toggleFavoriteRequest(state, action: PayloadAction<{ professorId: number; studentId: number }>) {
      state.loading = true;
      state.error = null;
    },
    toggleFavoriteSuccess(state, action: PayloadAction<Professor>) {
      state.data = action.payload;
      state.loading = false;
    },
    toggleFavoriteFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  loginRequest, loginSuccess, loginFailure,
  toggleFavoriteRequest, toggleFavoriteSuccess, toggleFavoriteFailure, logout
} = professorSlice.actions

export default professorSlice.reducer;