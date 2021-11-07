import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
  error: null,
  isLoading: false,
  login: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset() {
      return initialState
    },

    login(state) {
      state.error = null
      state.isLoading = true
    },
    loginSuccess(state, { payload }) {
      state.data = payload.data
      state.isLoading = false
    },
    loginFailure(state, { payload }) {
      state.error = payload.error
      state.isLoading = false
    },
    logout(state) {
      state.error = null
      state.isLoading = true
    },
    logoutSuccess() {
      return initialState
    },
    logoutFailure(state, { payload }) {
      state.error = payload.error
      state.isLoading = false
    },
  },
})

export const userState = initialState
export const userActions = userSlice.actions
export default userSlice.reducer
