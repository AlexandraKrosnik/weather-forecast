import React from 'react';
// import { useSelector } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from './app.styled';
// import Home from './pages/Home';
// import { AppStore } from './store/store';
// import { darkTheme, lightTheme } from './theme';
import {useGetWeatherForecastQuery, useGetCurrentWeatherQuery} from '../../services/WeatherService';

const App: React.FC = () => {
    let {data} = useGetCurrentWeatherQuery({q: 'Лондон'});
    let {data: d1} = useGetWeatherForecastQuery({q: 'London'});
    console.log('data', data);
    console.log('d1', d1);
    //   const darkMode = useSelector((state: AppStore) => state.app.darkMode);
    return (
        // <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        //   <GlobalStyles />
        //   <Home />
        // </ThemeProvider>
        <p>Hi</p>
    );
};

export default App;
