import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // For icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './Header'; // Assuming your Header component
import { useNavigation, DrawerActions } from '@react-navigation/native';

const AboutScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* Custom Header */}

            <ScrollView contentContainerStyle={styles.container}>
                {/* Logo Section */}
                {/* <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://your-logo-url-here.com' }} // Replace with your logo URL
            style={styles.logo}
          />
        </View> */}

                {/* Section 1: Introduction */}
                <View style={styles.section}>
                    <Ionicons name="leaf-outline" size={40} color="#4CAF50" style={styles.icon} />
                    <Text style={styles.heading}>Ayurveda Plant Detector</Text>
                    <Text style={styles.paragraph}>
                        The Ayurveda Plant Detector is your gateway to understanding the medicinal uses of Ayurvedic plants.
                        Just snap a picture, and let our app guide you through the healing powers of nature.
                    </Text>
                </View>

                {/* Section 2: Our Mission */}
                <View style={styles.section}>
                    <Ionicons name="people-outline" size={40} color="#FF9800" style={styles.icon} />
                    <Text style={styles.heading}>Our Mission</Text>
                    <Text style={styles.paragraph}>
                        We aim to merge the wisdom of ancient Ayurveda with modern technology to make natural healing more accessible. Explore the natural remedies at your fingertips!
                    </Text>
                </View>

                {/* Section 3: How It Works */}
                <View style={styles.section}>
                    <Ionicons name="camera-outline" size={40} color="#03A9F4" style={styles.icon} />
                    <Text style={styles.heading}>How It Works</Text>
                    <Text style={styles.paragraph}>
                        Simply capture or upload an image of a plant, and our machine learning algorithm will identify it. You will receive detailed information on how the plant is used in Ayurvedic medicine.
                    </Text>
                </View>

                {/* Section 4: Why Ayurveda? */}
                <View style={styles.section}>
                    <Ionicons name="flame-outline" size={40} color="#E91E63" style={styles.icon} />
                    <Text style={styles.heading}>Why Ayurveda?</Text>
                    <Text style={styles.paragraph}>
                        Ayurveda uses plant-based treatments to restore balance in the body. With the Ayurvedic Plant Detector, discover how these remedies can promote holistic health and well-being.
                    </Text>
                </View>

                {/* Footer Section */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Discover the Power of Nature</Text>
                    <Ionicons name="heart-outline" size={30} color="#FF5722" />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    section: {
        marginBottom: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 5,
    },
    icon: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#6200EE',
        textAlign: 'center',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        lineHeight: 24,
    },
    footer: {
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#e8f5e9',
        borderRadius: 10,
    },
    footerText: {
        fontSize: 18,
        color: '#4CAF50',
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default AboutScreen;