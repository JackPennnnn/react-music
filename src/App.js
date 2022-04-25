import React, {memo,Suspense} from "react";
import { Provider } from 'react-redux'
import {renderRoutes} from 'react-router-config'


import routes from "./router";
import store from "./store";

import AppHeader from './components/globalHeader'
import AppFooter from './components/globalFooter'
import { BrowserRouter } from 'react-router-dom'
import AppPlayerBar from './pages/player/app-player-bar'
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename='/wymusic'>
                <AppHeader/>
                <Suspense fallback={<div>page loading</div>}>
                    {renderRoutes(routes)}
                </Suspense>

                <AppFooter/>
                <AppPlayerBar></AppPlayerBar>
            </BrowserRouter>
        </Provider>

    );

}

export default memo(App);
