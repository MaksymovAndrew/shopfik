import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SettingsState, Language, Theme } from './types';

const initialState: SettingsState = {
    language: 'en',
    theme: 'light',
};

const saveSettings = async (settings: SettingsState) => {
    try {
        await AsyncStorage.setItem('settings', JSON.stringify(settings));
    } catch (error) {
        console.error('Error saving settings:', error);
    }
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload;
            saveSettings(state);
        },

        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
            saveSettings(state);
        },

        loadSettings: (state, action: PayloadAction<SettingsState>) => {
            state.language = action.payload.language;
            state.theme = action.payload.theme;
        },
    },
});

export const { setLanguage, setTheme, loadSettings } = settingsSlice.actions;

export default settingsSlice.reducer;