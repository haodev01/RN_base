import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {HomeScreen, LoginScreen, RegisterScreen} from '~/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

export const NavigateStack = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          id="App"
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
