import * as React from 'react';
import { WidgetToggleButton } from "./components/widget-toggle-button/widget-toggle-button";
import { ConfigContext } from "./config";

type UrlShortenerState = {
    widgetExpanded: boolean
}

class UrlShortener extends React.Component<{}, UrlShortenerState> {
    static contextType = ConfigContext;
    context!: React.ContextType<typeof ConfigContext>;

    constructor(props: any) {
        super(props);
        this.state = {
            widgetExpanded: false
        };
    }

    render() {
        const {widgetExpanded} = this.state;
        return (
            <WidgetToggleButton widgetExpanded={widgetExpanded}
                                toggleWidgetExpanded={() => this.toggleWidgetExpanded()}>
            </WidgetToggleButton>
        );
    }

    private toggleWidgetExpanded() {
        this.setState({widgetExpanded: !this.state.widgetExpanded})
    }
}

export default UrlShortener;
