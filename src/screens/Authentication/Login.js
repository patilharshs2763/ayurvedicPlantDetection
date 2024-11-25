import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../firebase/firebase.config';
import LinearGradient from 'react-native-linear-gradient';
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace("Main");
            }
        });
    }, []);

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("User login Successfull!");
                navigation.replace("Main");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    const resetPassword = () => {
        if (email != null) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Password reset email has been send successfull!")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);

                });
        } else {
            alert("Please enter valid email!");
        }
    };

    return (
        <ImageBackground
            source={{ uri: 'https://your-background-image-url-here.com' }} // Replace with your background image URL
            style={styles.background}
            resizeMode="cover"
        >
            <LinearGradient colors={['#6200EE80', '#6200EEAA']} style={styles.overlay}>
                <View style={styles.container}>
                    {/* App Name */}
                    <Text style={styles.appName}>Ayurveda</Text>
                    <Text style={styles.subtitle}>Unlock the Power of Nature</Text>

                    {/* Login Form */}
                    <Text style={styles.title}>Welcome Back!</Text>

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

                    <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                        <LinearGradient
                            colors={['#8E2DE2', '#4A00E0']}
                            style={styles.buttonBackground}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.linkContainer}
                        onPress={() => resetPassword()}
                    // style={{
                    //     margin: 10,
                    //     alignItems: 'center'
                    // }}
                    >
                        <Text style={styles.linkText}>Forget Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.linkContainer}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
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
        backgroundColor: '#ffffffbb', // Slightly transparent white
        borderRadius: 15,
        padding: 30,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 10,
    },
    appName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#4A00E0',
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#6200EE',
        textAlign: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6200EE',
        textAlign: 'center',
        marginBottom: 40,
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

export default LoginScreen;