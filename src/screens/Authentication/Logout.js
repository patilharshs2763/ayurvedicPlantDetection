// Logout.js
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.config';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
    const navigation = useNavigation();

    useEffect(() => {
        signOut(auth)
            .then(() => {
                navigation.replace('Login');  // Navigate to the Login screen after logout
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#6200EE" />
        </View>
    );
};

export default Logout;
