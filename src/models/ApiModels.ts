export type ApiRequestParams = {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
    params: CityParams | LocationParams;
};

export type CityParams = {
    appid?: string;
    q: string;
};

export type LocationParams = {
    appid?: string;
    lat: number;
    lng: number;
};

export type MainWeather = {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    sea_level?: number;
    grnd_level?: number;
};

export type WindWeather = {
    speed: string;
    deg: number;
    gust?: number;
};

export type WeatherConditions = {
    id: number;
    main: string;
    icon: string;
    description: string;
};

export type CoordType = {
    lon: number;
    lat: number;
};

export type SysType = {
    sunrise: number;
    sunset: number;
};

export type PrecipitationType = {
    '1h'?: number;
    '3h'?: number;
};

export type CityCommonType = {
    id: number;
    name: string;
    coord: CoordType;
    timezone: number;
};

export type CityType = (SysType & CityCommonType) & {
    country: string;
    population: number;
};

export type CommonWeatherType = {
    weather: Array<WeatherConditions>;
    main: MainWeather;
    visibility: number;
    wind: WindWeather;
    clouds: {
        all: number;
    };
    rain?: PrecipitationType;
    snow?: PrecipitationType;
    dt: number;
};

export type DailyWeatherForecast = {
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: string;
};

export type CurrentWeatherDTO = (CommonWeatherType & CityCommonType) & {
    base: string;
    sys: SysType;
};

export type ForecastWeatherDTO = {
    cnt: number;
    list: Array<CommonWeatherType & DailyWeatherForecast>;
    city: CityType;
};
