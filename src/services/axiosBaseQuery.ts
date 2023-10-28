import axios, { AxiosResponse, type AxiosError } from 'axios'
import { LocationParams, type ApiRequestParams, CityParams } from '../models/ApiModels'

type AxiosParams = {
    baseUrl: string;
}

export const axiosBaseWeatherQuery = (axiosParams: AxiosParams): any => {
    const { baseUrl } = axiosParams
    return async (apiRequestParams: ApiRequestParams) => {
        const { url, method, params } = apiRequestParams
        try {
            const fullParams: CityParams | LocationParams = {
                ...params,
                appid: process.env.REACT_APP_WEATHER_API_KEY,
            }
            const result: AxiosResponse = await axios({
                url: baseUrl + url,
                method,
                params: fullParams,
            })

            return { data: result.data }
        } catch (error) {
            let axiosError: AxiosError = error as AxiosError

            return {
                error: {
                    status: axiosError.response?.status,
                    data: axiosError.response?.data || axiosError.message,
                },
            }
        }
    }
}
