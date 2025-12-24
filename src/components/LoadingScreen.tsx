import { ActivityIndicator, View, StyleSheet } from 'react-native';

const LoadingScreen = () => (
    <View style={styles.container}>
        <ActivityIndicator
            size="large"
            color="#667eea"
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default LoadingScreen;
