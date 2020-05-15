import * as React from 'react';
import { createRef, useContext } from 'react';
import { ConfigContext } from "../../config";

import './widget-toggle-button.scss';

interface WidgetToggleButtonProps {
    expanded: boolean;
    toggleExpanded: () => void;
    buttonText: string;
}

const BUTTON_CLASSES = {
    open: 'widget__button widget__toggle-button fadeIn open',
    close: 'widget__toggle-button fadeIn close',
};

export const WidgetToggleButton: React.FC<WidgetToggleButtonProps> = ({
  expanded, toggleExpanded, buttonText
}) => {
    const config = useContext(ConfigContext);
    const buttonRef = createRef<HTMLButtonElement>();
    const {parentWindow, appRoot} = config.globals;

    const toggleWidget = () => {
        toggleExpanded();
        parentWindow.postMessage(config.toggleWidgetMessage, '*');
        appRoot.classList.toggle('widget-opened');
        buttonRef.current!.blur();
    };
    const makeVisible = () => {
        buttonRef.current!.classList.remove('fadeIn');
    };

    return (
        <button className={expanded ? BUTTON_CLASSES.close : BUTTON_CLASSES.open}
                ref={buttonRef}
                onClick={toggleWidget}
                onAnimationEnd={makeVisible}
        >
            {expanded ? '\u00D7' : buttonText}
        </button>
    )
};
