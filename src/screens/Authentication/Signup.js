import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/firebase.config';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';

const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Simple validation for email and password
        if (!email || !password) {
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Warning',
                textBody: 'Please fill all fields.',
                button: 'Close',
            });
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Show success dialog
                Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Success',
                    textBody: 'User created successfully!',
                    button: 'Close',
                });

                // Navigate after a short delay
                setTimeout(() => {
                    navigation.replace("Main");
                }, 1000);
            })
            .catch((error) => {
                // Show error dialog
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Error',
                    textBody: error.message,
                    button: 'Close',
                });
            });
    };

    return (
        <ImageBackground
            source={{ uri: 'https://your-background-image-url-here.com' }} // Replace with your background image URL
            style={styles.background}
            resizeMode="cover"
        >
            <LinearGradient colors={['#6200EE80', '#6200EEAA']} style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Create an Account</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor="#aaa"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor="#aaa"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        placeholderTextColor="#aaa"
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSignup}>
                        <LinearGradient
                            colors={['#8E2DE2', '#4A00E0']}
                            style={styles.buttonBackground}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.linkContainer}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.linkText}>Already have an account? Login</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    container: {
        backgroundColor: '#ffffffbb',
        borderRadius: 15,
        padding: 30,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        // elevation: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#6200EE',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        borderColor: '#6200EE',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
        color: '#333',
    },
    button: {
        marginTop: 20,
    },
    buttonBackground: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    linkText: {
        color: '#6200EE',
        fontSize: 16,
    },
});

export default SignupScreen;
