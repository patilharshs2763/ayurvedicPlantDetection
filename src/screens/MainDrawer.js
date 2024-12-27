import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';
import AboutScreen from './About';
import Detect from './Detect';
import FeedbackScreen from './Feedback';
import Logout from './Authentication/Logout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
const Drawer = createDrawerNavigator();

const MainDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#6200EE',
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                drawerStyle: {
                    backgroundColor: '#f0f0f0',
                    width: 240,
                },
                drawerActiveTintColor: '#6200EE',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    fontSize: 16,
                },
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Detection" component={Detect} />
            <Drawer.Screen name="Feedback" component={FeedbackScreen} />
            {/* <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="log-out-outline" size={size} color={color} />  // Logout icon
          ),
        }}
      /> */}
            <Drawer.Screen
                name="Logout"
                component={Logout}
                options={{
                    drawerLabel: ({ focused }) => (
                        <Text style={{ color: 'red', fontSize: 16, fontWeight: focused ? 'bold' : 'normal' }}>
                            Logout
                        </Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <Ionicons name="log-out-outline" size={size} color="red" />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default MainDrawer;
