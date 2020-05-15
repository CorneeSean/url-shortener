import * as React from 'react';
import * as ReactDOM from "react-dom";

import { WidgetMain } from './components/widget/widget-main';
import { UrlShortener } from "./components/url-shortener/url-shortener";
import { config } from './config';

import "./styles/styles.scss";

ReactDOM.render(
    <WidgetMain buttonText={'Url Shortener'}>
        <UrlShortener/>
    </WidgetMain>,
    config.globals.appRoot
);
