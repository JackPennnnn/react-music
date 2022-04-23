import React, {memo} from "react";
import { Provider } from 'react-redux'
import {renderRoutes} from 'react-router-config'


import routes from "./router";
import store from "./store";

import AppHeader from './components/globalHeader'
import AppFooter from './components/globalFooter'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppHeader/>
                {renderRoutes(routes)}
                <AppFooter/>
            </BrowserRouter>
        </Provider>

    );

}

export default memo(App);
