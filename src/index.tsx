import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
// import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './store/store'

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
// const store = setupStore();
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor}> */}
            {/* <BrowserRouter> */}
            <App />
            {/* </BrowserRouter> */}
            {/* </PersistGate>
      </ThemeProvider> */}
        </Provider>
    </React.StrictMode>
)
