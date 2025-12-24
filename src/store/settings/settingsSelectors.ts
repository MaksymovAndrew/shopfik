import { RootState } from '../../store/store';

export const selectLanguage = (state: RootState) => state.settings.language;

export const selectTheme = (state: RootState) => state.settings.theme;