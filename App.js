import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignupScreen from './src/screens/Authentication/Signup';
import LoginScreen from './src/screens/Authentication/Login';
import MainDrawer from './src/screens/MainDrawer';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import CameraScreen from './src/screens/CameraScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AlertNotificationRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AlertNotificationRoot>
  );
};

export default App;
