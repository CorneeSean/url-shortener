import { createContext } from 'react';
import env from "../../../common/env";

type AppGlobals = {
    parentWindow: Window,
    appRoot: HTMLElement,
}

const globals: AppGlobals = {
    parentWindow: window.parent,
    appRoot: document.getElementById('app-root')!,
};

type ReactWidgetConfig = {
    globals: AppGlobals,
    hosts: {[key: string]: string},
}

export const config: ReactWidgetConfig = {
    globals,
    hosts: {
        urlShortener: env.serverHost,
    }
};

export const ConfigContext = createContext(config);
