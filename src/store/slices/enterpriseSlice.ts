import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {
    enterprises: {
      id: null,
      email_enterprise: null,
      facebook: null,
      twitter: null,
      linkedin: null,
      phone: null,
      own_enterprise: false,
      enterprise_name: null,
      photo: null,
      description: null,
      city: null,
      country: null,
      value: null,
      share_price: null,
      enterprise_type: {
        id: null,
        enterprise_type_name: null,
      },
    },
  },
  error: null,
  isLoading: false,
}

const enterpriseSlice = createSlice({
  name: 'enterprise',
  initialState,
  reducers: {
    reset() {
      return initialState
    },

    getEnterprisesData(state) {
      state.isLoading = true
      state.error = null
    },
    getEnterprisesDataSuccess(state, { payload }) {
      state.isLoading = false
      state.data = payload.data
    },
    getEnterprisesDataFailure(state, { payload }) {
      state.isLoading = false
      state.error = payload.error
    },
    getEnterprisesDataFiltered(state) {
      state.isLoading = true
      state.error = null
    },
    getEnterprisesDataFilteredType(state) {
      state.isLoading = true
      state.error = null
    },
  },
})

export const enterpriseState = initialState
export const enterpriseActions = enterpriseSlice.actions
export default enterpriseSlice.reducer
