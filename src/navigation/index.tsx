import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Login from '@/screens/Login';
import Dashboard from '@/screens/Dashboard';
import AlunosHandler from '@/screens/AlunosHandler';

type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  AlunosHandler?: { id?: number };
};

export type StackScreenNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type StackScreenRouteProps<T extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, T>;

export type StackScreenNavigationRouteProps<
  T extends keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AlunosHandler" component={AlunosHandler} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
