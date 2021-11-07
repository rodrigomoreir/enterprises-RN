import reducer, {
  enterpriseActions,
} from '../../../src/store/slices/enterpriseSlice'

describe('enterpriseSlice', () => {
  test('return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
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
    })
  })
  describe('reset', () => {
    test('handle reset state', () => {
      expect(reducer(undefined, enterpriseActions.reset())).toEqual({
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
      })
    })
  })

  describe('enterprises', () => {
    test('get enterprises', () => {
      expect(
        reducer(undefined, enterpriseActions.getEnterprisesData()),
      ).toEqual({
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
        isLoading: true,
      })
    })

    test('get enterprises success', () => {
      expect(
        reducer(
          undefined,
          enterpriseActions.getEnterprisesDataSuccess({
            data: {
              enterprises: {
                id: 1,
                email_enterprise: 'email',
                facebook: 'facebook',
                twitter: 'twitter',
                linkedin: 'linkedin',
                phone: '999999999',
                own_enterprise: 'own',
                enterprise_name: 'name',
                photo: 'linkPhoto',
                description: 'description',
                city: 'city',
                country: 'country',
                value: 1212,
                share_price: 1212,
                enterprise_type: {
                  id: 2,
                  enterprise_type_name: 'type_name',
                },
              },
            },
          }),
        ),
      ).toEqual({
        isLoading: false,
        error: null,
        data: {
          enterprises: {
            id: 1,
            email_enterprise: 'email',
            facebook: 'facebook',
            twitter: 'twitter',
            linkedin: 'linkedin',
            phone: '999999999',
            own_enterprise: 'own',
            enterprise_name: 'name',
            photo: 'linkPhoto',
            description: 'description',
            city: 'city',
            country: 'country',
            value: 1212,
            share_price: 1212,
            enterprise_type: {
              id: 2,
              enterprise_type_name: 'type_name',
            },
          },
        },
      })
    })

    test('get enterprises failure', () => {
      expect(
        reducer(
          undefined,
          enterpriseActions.getEnterprisesDataFailure({
            error: 'Something is wrong',
          }),
        ),
      ).toEqual({
        isLoading: false,
        error: 'Something is wrong',
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
      })
    })

    test('get enterprises filtered success', () => {
      expect(
        reducer(
          undefined,
          enterpriseActions.getEnterprisesDataFiltered({
            data: {
              enterprises: {
                id: 1,
                email_enterprise: 'email',
                facebook: 'facebook',
                twitter: 'twitter',
                linkedin: 'linkedin',
                phone: '999999999',
                own_enterprise: 'own',
                enterprise_name: 'name',
                photo: 'linkPhoto',
                description: 'description',
                city: 'city',
                country: 'country',
                value: 1212,
                share_price: 1212,
                enterprise_type: {
                  id: 2,
                  enterprise_type_name: 'type_name',
                },
              },
            },
          }),
        ),
      ).toEqual({
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
        isLoading: true,
      })
    })

    test('get enterprises filtered failure', () => {
      expect(
        reducer(
          undefined,
          enterpriseActions.getEnterprisesDataFailure({
            error: 'Something is wrong',
          }),
        ),
      ).toEqual({
        isLoading: false,
        error: 'Something is wrong',
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
      })
    })
  })
})
