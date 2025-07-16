import 'react-native-gesture-handler/jestSetup';

// mock navigation para não quebrar
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
  };
});

// mock gesture handler
jest.mock('react-native-gesture-handler', () => {
  return {
    Swipeable: jest.fn().mockImplementation(({ children }) => children),
  };
});

jest.mock('react-native-navigation-bar-color', () => jest.fn());

jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: jest.fn().mockImplementation(({ children }) => children),
    Swipeable: jest.fn().mockImplementation(({ children }) => children),
  };
});

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

jest.mock('@sentry/react-native', () => {
  return {
    wrap: (Component) => Component,
    init: jest.fn(),
    captureException: jest.fn(),
  };
});

jest.mock('../src/navigation', () => () => null);

jest.mock('../src/store/store', () => ({
  store: {
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn(),
  },
}));