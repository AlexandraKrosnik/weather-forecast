import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {axiosBaseWeatherQuery} from './axiosBaseQuery';
import {type CityParams, type LocationParams} from '../models/ApiModels';
import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
export const weatherAPI: any = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: axiosBaseWeatherQuery({
        baseUrl: 'https://api.openweathermap.org/data/2.5',
    }),
    endpoints: (builder: EndpointBuilder<any, never, 'weatherAPI'>) => ({
        getCurrentWeather: builder.query<any, LocationParams | CityParams>({
            query: (params: LocationParams | CityParams) => ({
                url: '/weather',
                method: 'GET',
                params,
            }),
        }),
        getWeatherForecast: builder.query<any, LocationParams | CityParams>({
            query: (params: LocationParams | CityParams) => ({
                url: '/forecast',
                method: 'GET',
                params,
            }),
        }),
    }),
});
export const {useGetCurrentWeatherQuery, useGetWeatherForecastQuery} = weatherAPI;
