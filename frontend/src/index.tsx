import * as React from 'react';
import * as ReactDOM from "react-dom";

import { WidgetMain } from './features/widget/widget-main';
import { UrlShortener } from "./features/url-shortener/url-shortener";
import { UrlShortenerService } from "./features/url-shortener/services/url-shortener.service";

import { config } from './contexts/config';

import "./styles/styles.scss";

ReactDOM.render(
    <WidgetMain buttonText={'Url Shortener'}>
        <UrlShortener service={new UrlShortenerService(config.hosts.urlShortener)}/>
    </WidgetMain>,
    config.globals.appRoot
);
