import { createContext } from 'react';

type AppGlobals = {
    parentWindow: Window,
    appRoot: HTMLElement,
}

const globals: AppGlobals = {
    parentWindow: window.parent,
    appRoot: document.getElementById('app-root')!,
};

export type WidgetConfig = {
    toggleWidgetMessage: string,
    globals: AppGlobals,
    hosts: {[key: string]: string},
}

export const config: WidgetConfig = {
    toggleWidgetMessage: 'url-shortener:toggle',
    globals,
    hosts: {
        urlShortener: "http://localhost:8080",
    }
};

export const ConfigContext = createContext(config);
