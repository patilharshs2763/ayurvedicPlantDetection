import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, Button, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
    const [navigationEase, setNavigationEase] = useState('');
    const [accuracyRating, setAccuracyRating] = useState('');
    const [feature, setFeature] = useState('');
    const [performance, setPerformance] = useState('');
    const [designRating, setDesignRating] = useState('');
    const [additionalComments, setAdditionalComments] = useState('');

    const handleSubmit = () => {
        // Handle form submission logic
        console.log('Form Submitted', {
            navigationEase,
            accuracyRating,
            feature,
            performance,
            designRating,
            additionalComments
        });
        alert('Thank you for your feedback!');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>
                Feedback Form</Text>

            <View style={styles.card}>
                <Text style={styles.question}>1. How easy was it to navigate the app?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., Very Easy, Easy, Neutral, Difficult, Very Difficult"
                    onChangeText={setNavigationEase}
                    value={navigationEase}
                />

                <Text style={styles.question}>2. How would you rate the accuracy of the plant identification?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., Excellent, Good, Fair, Poor"
                    onChangeText={setAccuracyRating}
                    value={accuracyRating}
                />

                <Text style={styles.question}>3. Which feature did you find most useful?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., Plant Identification, Medical Uses, User-Contributed Data"
                    onChangeText={setFeature}
                    value={feature}
                />

                <Text style={styles.question}>4. How satisfied are you with the app’s performance?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., Very Satisfied, Satisfied, Neutral, Dissatisfied"
                    onChangeText={setPerformance}
                    value={performance}
                />

                <Text style={styles.question}>5. How would you rate the app’s design and layout?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g., Excellent, Good, Fair, Poor"
                    onChangeText={setDesignRating}
                    value={designRating}
                />

                <Text style={styles.question}>6. Additional comments or suggestions</Text>
                <TextInput
                    style={[styles.input, { height: 100 }]}
                    placeholder="Type your feedback here"
                    multiline={true}
                    onChangeText={setAdditionalComments}
                    value={additionalComments}
                />

                <Button title="Submit Feedback" color="#4A00E0" onPress={handleSubmit} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#4A00E0', // Main color for headings
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
    },
    question: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#4A00E0',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: '#f1f1f1', // Light background for inputs
    },
});

export default FeedbackScreen;