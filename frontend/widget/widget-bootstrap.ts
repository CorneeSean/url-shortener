type MessageHandler = (...args: any) => void;

export type WidgetMessage = {
    message: string,
    payload: any,
}

type MessageHandlersMap = { [key: string]: MessageHandler };

export type WidgetConfig = {
    origin: string,
    id: string,
    messageHandlers: MessageHandlersMap,
    toggleClass: string,
    styles: string,
}

/**
 * Reusable method for bootstraping widgets in an iframe of a host page.
 */
export function bootstrapWidget(config: WidgetConfig) {
    const {origin: widgetOrigin, id, messageHandlers, toggleClass, styles} = config;

    function handleWidgetMessage({origin, data}: { origin: string, data: WidgetMessage }) {
        if (origin !== widgetOrigin) {
            return;
        }
        if (data && data.message && messageHandlers[data.message]) {
            const handler = messageHandlers[data.message];
            handler(data.payload);
        }
    }

    function addStylesToHeader() {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);
    }

    function appendWidgetFrame() {
        const frame = document.createElement('iframe');
        frame.id = id;
        frame.src = widgetOrigin;
        frame.classList.add(toggleClass);
        document.body.appendChild(frame);
    }

    window.addEventListener('message', handleWidgetMessage);
    addStylesToHeader();
    appendWidgetFrame();
}
