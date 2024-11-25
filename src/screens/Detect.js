import React from 'react';
import { StyleSheet, Text, View, FlatList, Animated, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const plantData = [
    {
        id: '1',
        name: 'Aloe Vera',
        medicalUsage: 'Skin Care',
        verifiedBy: 'Dr. Smith',
        imageUrl: 'https://unlimitedgreens.com/cdn/shop/products/Aloe-Vera-Website-Front.webp?crop=center&height=600&v=1676457070&width=600',
    },
    {
        id: '2',
        name: 'Basil',
        medicalUsage: 'Anti-inflammatory',
        verifiedBy: 'Dr. Johnson',
        imageUrl: 'https://joegardener.com/wp-content/uploads/2021/07/AMP_9588-708X466.jpg',
    },
    {
        id: '3',
        name: 'Mint',
        medicalUsage: 'Digestive Aid',
        verifiedBy: 'Dr. Lee',
        imageUrl: 'https://gardenguru.in/cdn/shop/products/191.jpg?v=1629233358',
    },
    {
        id: '4',
        name: 'Shatavari',
        medicalUsage: 'Women’s Health',
        verifiedBy: 'Dr. Verma',
        imageUrl: 'https://plantscart.com/wp-content/uploads/2021/09/asparagus-climbing-scaled.jpg',
    },
    {
        id: '5',
        name: 'Ashwagandha',
        medicalUsage: 'Adaptogen',
        verifiedBy: 'Dr. Patel',
        imageUrl: 'https://www.indovedic.com/wp-content/uploads/2022/07/ashwa.png',
    },
    {
        id: '6',
        name: 'Ocimum Sanctum',
        medicalUsage: 'Anti-bacterial',
        verifiedBy: 'Dr. Sharma',
        imageUrl: 'https://cdn.britannica.com/87/207887-050-F48CB55D/basil.jpg',
    },


];

const DetectionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.DetectNew}>
                    <Ionicons name="search-sharp" size={30} color={'coral'} />
                    <Text style={styles.detectNewText}>Detect New Plant</Text>
                </View>
                <View style={styles.DetectGuid}>
                    {/* <Icon name="camera" size={30} color="#fff" /> */}
                    <Ionicons name="help-circle-sharp" size={30} color={'coral'} />
                    <Text style={styles.detectGuidText}>For Help</Text>
                </View>
            </View>
            <Animated.View style={styles.DetectRecent}>
                <Text style={styles.recentHeader}>Recently Detected</Text>
                <FlatList
                    data={plantData}
                    renderItem={({ item }) => (
                        <View style={styles.plantItem}>
                            {/* Display the plant image */}
                            <Image
                                source={{ uri: item.imageUrl }}
                                style={styles.plantImage}
                                resizeMode="cover"
                            />
                            {/* Display plant information */}
                            <View style={styles.plantInfo}>
                                <Text style={styles.plantText}>Name: {item.name}</Text>
                                <Text style={styles.plantText}>Medical Use: {item.medicalUsage}</Text>
                                <Text style={styles.plantText}>Verified by: {item.verifiedBy}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        backgroundColor: '#f0f0f0',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: 20,
    },
    DetectNew: {
        flex: 1,
        backgroundColor: '#4CAF50',
        marginRight: 10,
        height: 195,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        padding: 5,
    },
    detectNewText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        marginTop: 10,
    },
    detectGuidText: {
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'italic',
        color: '#fff',
        marginTop: 10,
    },
    DetectGuid: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        height: 195,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        padding: 5,
    },
    DetectRecent: {
        flex: 2,
        backgroundColor: '#ffffff',
        marginTop: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        padding: 10,
    },
    recentHeader: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    plantItem: {
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
        flexDirection: 'row', // Layout in row format
        alignItems: 'center', // Vertically align items
    },
    plantImage: {
        width: 50, // Adjust the width of the image
        height: 50, // Adjust the height of the image
        borderRadius: 25, // Make the image circular
        marginRight: 15, // Space between the image and the text
    },
    plantInfo: {
        flex: 1, // Ensure the text takes up available space
    },
    plantText: {
        fontSize: 16,
        color: '#333',
    },
});

export default DetectionScreen;
