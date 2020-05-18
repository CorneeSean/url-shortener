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

export type WidgetConfig = {
    globals: AppGlobals,
    hosts: {[key: string]: string},
}

export const config: WidgetConfig = {
    globals,
    hosts: {
        urlShortener: env.serverHost,
    }
};

export const ConfigContext = createContext(config);
