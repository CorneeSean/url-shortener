import * as React from 'react';
import * as ReactDOM from "react-dom";

import { WidgetMain } from './features/widget/widget-main';
import { UrlShortener } from "./features/url-shortener/url-shortener";
import { UrlShortenerService } from "./features/url-shortener/services/url-shortener.service";

import { config } from './config';

import "./styles/styles.scss";

const urlShortenerService = new UrlShortenerService();

ReactDOM.render(
    <WidgetMain buttonText={'Url Shortener'}>
        <UrlShortener service={urlShortenerService}/>
    </WidgetMain>,
    config.globals.appRoot
);
