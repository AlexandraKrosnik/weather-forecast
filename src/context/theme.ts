import {createContext, useContext} from 'react';
import { ThemeType } from '../models/ThemeType';

export const ThemeContext:React.Context<ThemeType> = createContext({
    themeMode: 'default',
    darkTheme: () => {},
    defaultTheme: () => {},
});

export const ThemeProvider:React.Provider<ThemeType> = ThemeContext.Provider;

export default function useThemeContext(){
    return useContext(ThemeContext);
}