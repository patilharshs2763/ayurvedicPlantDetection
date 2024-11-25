import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Custom Header */}


            {/* Introduction Text */}
            <View style={styles.introContainer}>
                <Text style={styles.introText}>
                    Discover the healing power of nature through Ayurveda. Explore medicinal plants and their uses in treating various ailments.


                </Text>
            </View>



            {/* Sample Image for Plant Detection Demo */}
            <View style={styles.sampleContainer}>
                <Text style={styles.sampleText}>Medicinal benefits of plants</Text>
                <Image
                    source={{ uri: 'https://www.shutterstock.com/image-vector/ayurvedic-herbs-natural-botanical-set-600nw-1367556602.jpg' }} // Replace with an actual image URI
                    style={styles.sampleImage}
                />

            </View>
            <View style={styles.line} />

            <View style={styles.sampleContainer}>
                <Text style={styles.sampleText}>Capture or upload a plant image to learn about its uses in treating diseases.
                </Text>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Light background for a clean look
    },
    introContainer: {
        padding: 20,
        alignItems: 'center',
        marginBottom: 20,
        margin: 20,
        backgroundColor: '#4CAF50', // Ayurveda-themed green color
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    introText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
    },


    line: {
        height: 2, // Thickness of the line
        backgroundColor: '#ccc', // Color of the line
        marginVertical: 20, // Space around the line
        marginHorizontal: 30, // Optional: to make the line shorter than full width
    },

    sampleContainer: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    sampleText: {
        fontSize: 18,
        marginBottom: 15,
        color: '#555',
        fontWeight: '600',
    },
    sampleImage: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginBottom: 15,
    },
    sampleResult: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
});

export default HomeScreen;