import { createContext } from 'react';

type AppGlobals = {
    parentWindow: Window,
    appRoot: HTMLElement,
}

const globals: AppGlobals = {
    parentWindow: window.parent,
    appRoot: document.getElementById('app-root')!,
};

export type UrlShortenerConfig = {
    toggleWidgetMessage: string;
    globals: AppGlobals,
}

export const config: UrlShortenerConfig = {
    toggleWidgetMessage: 'url-shortener:toggle',
    globals,
};

export const ConfigContext = createContext(config);
