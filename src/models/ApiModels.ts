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

