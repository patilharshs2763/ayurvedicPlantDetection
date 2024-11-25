import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './src/screens/Authentication/Signup';
import LoginScreen from './src/screens/Authentication/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Updated import
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth } from './firebase/firebase.config';
import Main from './src/screens/Main';

const Stack = createNativeStackNavigator(); // Create a Native Stack Navigator
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
