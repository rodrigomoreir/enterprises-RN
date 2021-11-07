import { useSelector, useDispatch } from 'react-redux'
import { globalState } from '../src/store/slices'

// jest.useFakeTimers()

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native')

  return {
    __esModule: true,
    ...originalModule,
    useFocusEffect: jest.fn(),
    useNavigation: jest.fn(() => ({
      dangerouslyGetParent: jest.fn(),
      navigate: jest.fn(),
    })),
    useRoute: () => ({
      params: {
        id: jest.fn,
      },
    }),
    useIsFocused: jest.fn(),
  }
})

jest.mock('@react-navigation/core', () => {
  const originalModule = jest.requireActual('@react-navigation/core')

  return {
    __esModule: true,
    ...originalModule,
    useRoute: () => ({
      params: {
        id: jest.fn,
        enterprise: {
          enterprise_name: jest.fn,
          enterprise_type: jest.fn,
        },
      },
    }),
  }
})

// jest.mock('react-native-reanimated', () =>
//   jest.requireActual('../node_modules/react-native-reanimated/mock'),
// )

// jest.mock('react-native-safe-area-context', () => {
//   return {
//     useSafeAreaInsets: () => {
//       return {
//         bottom: 0,
//         top: 0,
//       }
//     },
//   }
// })

jest.mock('react-redux')
useSelector.mockImplementation(fn => fn(globalState))
useDispatch.mockReturnValue(jest.fn)
