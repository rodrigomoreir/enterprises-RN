import reducer, { userActions } from '../../../src/store/slices/userSlice'

describe('userSlice', () => {
  test('return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: null,
      error: null,
      isLoading: false,
      login: null,
    })
  })
  describe('reset', () => {
    test('handle reset state', () => {
      expect(reducer(undefined, userActions.reset())).toEqual({
        data: null,
        error: null,
        isLoading: false,
        login: null,
      })
    })
  })

  describe('login', () => {
    test('handle login', () => {
      expect(reducer(undefined, userActions.login())).toEqual({
        data: null,
        error: null,
        isLoading: true,
        login: null,
      })
    })

    test('handle loginSuccess', () => {
      expect(
        reducer(
          undefined,
          userActions.loginSuccess({ data: { name: 'Usuário Name' } }),
        ),
      ).toEqual({
        data: { name: 'Usuário Name' },
        error: null,
        isLoading: false,
        login: null,
      })
    })

    test('handle loginFailure', () => {
      expect(
        reducer(
          undefined,
          userActions.loginFailure({ error: 'Something is wrong' }),
        ),
      ).toEqual({
        data: null,
        error: 'Something is wrong',
        isLoading: false,
        login: null,
      })
    })
  })

  describe('logout', () => {
    test('handle logout', () => {
      expect(reducer(undefined, userActions.logout())).toEqual({
        data: null,
        error: null,
        isLoading: true,
        login: null,
      })
    })
    test('handle logoutSuccess', () => {
      expect(
        reducer(undefined, userActions.logoutSuccess({ data: null })),
      ).toEqual({
        data: null,
        error: null,
        isLoading: false,
        login: null,
      })
    })
    test('handle logoutFailure', () => {
      expect(
        reducer(
          undefined,
          userActions.logoutFailure({ error: 'Something is wrong' }),
        ),
      ).toEqual({
        data: null,
        error: 'Something is wrong',
        isLoading: false,
        login: null,
      })
    })
  })
})
