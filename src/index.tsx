import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {ConfigProvider} from 'antd';
import {atndTheme} from './style/antdTheme';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// const store = setupStore();
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ConfigProvider theme={{token: atndTheme}}>
                    <App />
                </ConfigProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
