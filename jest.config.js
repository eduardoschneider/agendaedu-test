module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native"
    + "|@react-native"
    + "|@react-navigation"
    + "|react-navigation"
    + "|react-native-reanimated"
    + "|react-native-gesture-handler"
    + "|@react-native-community"
    + "|react-redux"
    + "|@sentry/react-native"
    + "|@react-native-vector-icons/fontawesome6"
    + "|react-native-navigation-bar-color"
    + ")/)"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|ttf|otf|svg)$': '<rootDir>/jest/fileMock.js',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest/setup.js'
  ],
};
