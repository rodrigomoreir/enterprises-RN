import { all, call, put, takeLatest } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { userActions } from '../slices/userSlice'
import api from '../../services/api'

export function* login({ payload: { email, password } }) {
  try {
    const response = yield call(api.post, 'users/auth/sign_in', {
      email,
      password,
    })

    const { 'access-token': token, client, uid } = response.headers
    const user = { token, client, uid }

    api.defaults.headers.authorization = `Bearer ${token}`

    yield call(AsyncStorage.setItem, 'authUser', JSON.stringify(user))

    yield put(userActions.loginSuccess({ data: user }))
  } catch (error) {
    yield put(
      userActions.loginFailure({
        error: error.response ? error.response.data : error,
      }),
    )
  }
}

export function* logout() {
  try {
    yield call(AsyncStorage.setItem, 'authUser', 'null')
    yield put(userActions.logoutSuccess())
  } catch (error) {
    yield put(
      userActions.logoutFailure({
        error: error.response ? error.response.data.messages : error,
        status: error.response.status,
      }),
    )
  }
}

export default function* watcher() {
  yield all([
    takeLatest(userActions.login().type, login),
    takeLatest(userActions.logout().type, logout),
  ])
}
