import * as React from 'react';
import * as ReactDOM from "react-dom";

import UrlShortener from './UrlShortener';
import { config } from './config';

import "./styles.scss";

ReactDOM.render(<UrlShortener/>, config.globals.appRoot);
