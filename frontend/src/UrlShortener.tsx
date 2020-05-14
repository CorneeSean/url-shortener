import * as React from 'react';
import { AppGlobals, UrlShortenerConfig } from "./config";

interface UrlShortenerProps {
    config: UrlShortenerConfig,
    globals: AppGlobals,
}

class UrlShortener extends React.Component<UrlShortenerProps> {
  render() {
    return (
      <button className='url-shortener-toggle-button'
              onClick={() => this.toggleWidget()}>
          UrlShortener
      </button>
    );
  }

  private toggleWidget() {
      const {globals, config} = this.props;
      globals.parentWindow.postMessage(config.toggleWidgetMessage, '*');
      globals.appRoot.classList.toggle('widget-opened');
  }
}

export default UrlShortener;
