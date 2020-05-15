import * as React from 'react';
import { createRef, useContext } from 'react';
import { ConfigContext } from "../../config";
import './widget-toggle-button.scss';

interface WidgetToggleButtonProps {
    widgetExpanded: boolean;
    toggleWidgetExpanded: () => void;
}

const BUTTON_CLASSES = {
    open: 'url-shortener__button url-shortener__toggle-button fadeIn open',
    close: 'url-shortener__toggle-button fadeIn close',
};

export const WidgetToggleButton: React.FC<WidgetToggleButtonProps> = ({
      widgetExpanded, toggleWidgetExpanded
}) => {
    const config = useContext(ConfigContext);
    const buttonRef = createRef<HTMLButtonElement>();

    const toggleWidget = () => {
        toggleWidgetExpanded();
        config.globals.parentWindow.postMessage(config.toggleWidgetMessage, '*');
        config.globals.appRoot.classList.toggle('widget-opened');
    };
    const makeVisible = () => {
        buttonRef.current!.classList.remove('fadeIn');
    };

    return (
        <button className={widgetExpanded ? BUTTON_CLASSES.close : BUTTON_CLASSES.open}
                ref={buttonRef}
                onClick={toggleWidget}
                onAnimationEnd={makeVisible}
        >
            {widgetExpanded ? '\u00D7' : 'UrlShortener'}
        </button>
    );
};

