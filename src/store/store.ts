import { configureStore } from '@reduxjs/toolkit'
import { weatherAPI } from '../services/WeatherService'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

// const rootReducer = combineReducers({
//   [weatherAPI.reducerPath]: weatherAPI.reducer,
// });
export const store: ToolkitStore = configureStore({
    reducer: {
        [weatherAPI.reducerPath]: weatherAPI.reducer,
    },
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: false,
        }),
        weatherAPI.middleware,
    ],
})
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch