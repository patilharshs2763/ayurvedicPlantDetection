import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './Home';
import AboutScreen from './About';
import Detect from './Detect';
import FeedbackScreen from './Feedback';
import Header from './Header'; // Import your custom header

const Drawer = createDrawerNavigator();

const Main = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Render Header */}
            <Header title="Ayurvedic Plant Detection" showMenuButton={true} />

            {/* Drawer Navigator */}
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false, // Hide the default header
                }}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
                <Drawer.Screen name="Detection" component={Detect} />
                <Drawer.Screen name="Feedback" component={FeedbackScreen} />
                <Drawer.Screen
                    name="Logout"
                    component={() => null} // Use a placeholder component
                    options={{
                        drawerLabel: () => (
                            <TouchableOpacity onPress={handleLogout}>
                                <Text style={styles.logoutText}>Logout</Text>
                            </TouchableOpacity>
                        ),
                    }}
                />
            </Drawer.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoutText: {
        fontSize: 16,
        color: 'red',
    },
});

export default Main;
