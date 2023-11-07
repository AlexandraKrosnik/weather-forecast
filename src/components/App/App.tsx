import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SearchPage from '../../pages/SearchPage';
import './App.scss';
import CityPage from '../../pages/CityPage';
import {ThemeProvider} from '../../context/theme';
import useTheme from '../../utils/useTheme';

const App: React.FC = () => {
    const {themeMode, darkTheme, defaultTheme} = useTheme();
    
    return (
        <ThemeProvider value={{themeMode, darkTheme, defaultTheme}}>
            <Routes>
                <Route path="/">
                    <Route index element={<SearchPage />} />
                    <Route path=":cityName" element={<CityPage />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
};

export default App;
