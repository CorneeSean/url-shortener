export type UrlShortenerConfig = {
    toggleWidgetMessage: string;
}

export const config: UrlShortenerConfig = {
    toggleWidgetMessage: 'url-shortener:toggle',
};

export type AppGlobals = {
    parentWindow: Window,
    appRoot: HTMLElement,
}

export const globals: AppGlobals = {
    parentWindow: window.parent,
    appRoot: document.getElementById('app-root')!,
};
