import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsState, Language, Theme } from './types';

const initialState: SettingsState = {
    language: 'en',
    theme: 'light',
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload;
        },

        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        },
    },
});

export const { setLanguage, setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;