import { createContext } from "react";
import { config } from "./config";

type WidgetMessagesFactory = { [key: string]: MessageCreator };

type WidgetMessage = {
    message: string,
    payload: any,
}
type MessageCreator = (...args: any) => WidgetMessage;

const widgetMessagesFactory: WidgetMessagesFactory = {
    toggle: () => ({
        message: 'url-shortener:toggle',
        payload: null,
    }),
    copy: (copyVal: string) => ({
        message: 'url-shortener:copy',
        payload: copyVal,
    })
};

const postMessage = (message: WidgetMessage) => {
    config.globals.parentWindow.postMessage(message, '*');
};

const widgetMessagesContextValue =
    Object.entries(widgetMessagesFactory).reduce((acc, [key, messageCreator]) => {
        acc[key] = (...args: any) => postMessage(messageCreator(...args));
        return acc;
    }, {} as any /*TODO: Add proper type */);

export const WidgetMessagingContext = createContext(widgetMessagesContextValue);
