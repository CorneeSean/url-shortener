import { WidgetMessage } from "./src/contexts/widget-messaging";

declare global {
    interface Window { urlShortenerOrigin?: string; }
}

type MessageHandler = (...args: any) => void;

(function (widgetOrigin) {
    const WIDGET_ORIGIN = widgetOrigin || 'http://localhost:8080';
    const WIDGET_ID = 'url-shortener-widget';
    const WIDGET_MESSAGE_HANDLERS: {[key: string]: MessageHandler } = {
        'url-shortener:toggle': () => document.getElementById(WIDGET_ID)!.classList.toggle(WIDGET_TOGGLE_CLASS),
        'url-shortener:copy': (value: string) => navigator.clipboard.writeText(value),
    };
    const WIDGET_TOGGLE_CLASS = 'collapsed';
    const WIDGET_IFRAME_STYLES = `
            #${WIDGET_ID} {
                position: fixed;
                bottom: 0;
                right: 0;
                border: 0;

                width: 500px;
                height: 200px;
                margin-right: 30px;

                transition: height 0.3s ease-out, width 0.3s ease-out;
            }

            #${WIDGET_ID}.${WIDGET_TOGGLE_CLASS} {
                height: 50px;
                width: 150px;
            }
        `;

    function handleWidgetMessage({origin, data}: { origin: string, data: WidgetMessage }) {
        if (origin !== WIDGET_ORIGIN) {
            return;
        }
        if (data && data.message && WIDGET_MESSAGE_HANDLERS[data.message]) {
            const handler = WIDGET_MESSAGE_HANDLERS[data.message];
            handler(data.payload);
        }
    }

    function addStylesToHeader(styles: string) {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);
    }

    function appendWidgetFrame() {
        const frame = document.createElement('iframe');
        frame.id = WIDGET_ID;
        frame.src = WIDGET_ORIGIN;
        frame.classList.add(WIDGET_TOGGLE_CLASS);
        document.body.appendChild(frame);
    }

    window.addEventListener('message', handleWidgetMessage);
    addStylesToHeader(WIDGET_IFRAME_STYLES);
    appendWidgetFrame();
})(window.urlShortenerOrigin);
