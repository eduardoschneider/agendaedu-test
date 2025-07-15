import React, { useEffect } from 'react';
import Routes from './src/navigation';
import { StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import * as Sentry from '@sentry/react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

Sentry.init({
  dsn: 'https://9f80f46b268f8f1f3a9a93f014fb0ee6@o4509653275836416.ingest.us.sentry.io/4509653276884992',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,
  integrations: [Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

export default Sentry.wrap(function App() {
  useEffect(() => {
    changeNavigationBarColor('transparent', false);
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </GestureHandlerRootView>
    </>
  );
});
