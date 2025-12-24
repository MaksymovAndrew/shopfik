import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
    return (
        <SafeAreaView
            style={styles.container}
            edges={['top']}
        >
            <Text style={styles.text}>Profile Screen</Text>
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
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
