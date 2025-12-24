import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView
            style={styles.container}
            edges={['top']}
        >
            <Text style={styles.heading}>Shopfik</Text>
            <Text style={styles.subheading}>Welcome to the store</Text>
            <Text style={styles.text}>This is Regular font</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 12,
    },
    subheading: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 8,
        color: '#666',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
    },
});

export default HomeScreen;
