import * as React from 'react';
import * as ReactDOM from "react-dom";

import UrlShortener from './UrlShortener';
import {config, globals} from './config';

import "./styles.scss";

ReactDOM.render(<UrlShortener config={config} globals={globals} />, globals.appRoot);
