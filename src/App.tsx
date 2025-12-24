import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import AppNavigator from './navigation/AppNavigator';
import LoadingScreen from './components/LoadingScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [isRehydrated, setIsRehydrated] = useState(false);
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    });

    const isAppReady = fontsLoaded && isRehydrated;

    useEffect(() => {
        if (isAppReady) {
            SplashScreen.hideAsync();
        }
    }, [isAppReady]);

    if (!fontsLoaded) {
        return <LoadingScreen />;
    }

    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingScreen />} persistor={persistor} onBeforeLift={() => setIsRehydrated(true)}>
                <AppNavigator />
            </PersistGate>
        </Provider>
    );
}
