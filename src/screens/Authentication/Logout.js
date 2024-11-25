import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const LogoutScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // Clear authentication or other data
        // For example:
        // auth.signOut(); (if using Firebase)

        // Navigate to Login screen after logout
        navigation.navigate('Login');
    }, []);

    return null; // Can render a loading screen or just null as it's an intermediate action
};

export default LogoutScreen;
