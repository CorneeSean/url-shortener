import * as React from 'react';
import { ConfigContext } from "./config";

class UrlShortener extends React.Component {
    static contextType = ConfigContext;
    context!: React.ContextType<typeof ConfigContext>;

    render() {
        return (
            <button className='url-shortener-toggle-button'
                    onClick={() => this.toggleWidget()}>
                UrlShortener
            </button>
        );
    }

    private toggleWidget() {
        const config = this.context;
        config.globals.parentWindow.postMessage(config.toggleWidgetMessage, '*');
        config.globals.appRoot.classList.toggle('widget-opened');
    }
}

export default UrlShortener;
