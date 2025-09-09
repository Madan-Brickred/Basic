import {createSlice , PayloadAction} from '@reduxjs/toolkit';
import { ColorConstants, NightThemeColorConstants , DayTheme , NightTheme} from '../../theme/ColorConstants';
import { Appearance, ColorSchemeName } from 'react-native';

interface ThemeState {
  theme: typeof DayTheme;
}

const colorScheme: ColorSchemeName = Appearance.getColorScheme(); // 'light' | 'dark' | null


const initialState: ThemeState = {
  theme: colorScheme === 'dark' ? NightTheme : DayTheme,
};


const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
