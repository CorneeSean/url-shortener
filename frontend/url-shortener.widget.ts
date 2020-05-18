import { bootstrapWidget, WidgetConfig } from "./widget/widget-bootstrap";
import env from "../common/env";

(function () {
    const id = 'url-shortener-widget';
    const toggleClass = 'collapsed';
    const urlShortenerWidgetConfig: WidgetConfig = {
        origin: env.frontendHost,
        id,
        messageHandlers: {
            // TODO: Strong-type message keys and bind them to widget id
            'url-shortener:toggle': () => document.getElementById(id)!.classList.toggle(toggleClass),
            'url-shortener:copy': (value: string) => navigator.clipboard.writeText(value),
        },
        toggleClass,
        styles: `
            #${id} {
                position: fixed;
                bottom: 0;
                right: 0;
                border: 0;

                width: 500px;
                height: 200px;
                margin-right: 30px;

                transition: height 0.3s ease-out, width 0.3s ease-out;
            }

            #${id}.${toggleClass} {
                height: 50px;
                width: 150px;
            }
        `
    };

    bootstrapWidget(urlShortenerWidgetConfig);
})();
