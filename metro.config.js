const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const {
 withSentryConfig
} = require("@sentry/react-native/metro");

const exclusionList = require('metro-config/src/defaults/exclusionList');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    blockList: exclusionList([/db\.json$/]),
  },
};

module.exports = withSentryConfig(mergeConfig(getDefaultConfig(__dirname), config));