import * as React from 'react';
import { ConfigContext } from "../../contexts/config";

import { WidgetToggleButton } from "./widget-toggle-button";

import "./widget-main.scss";

type WidgetProps = {
    buttonText?: string,
}

type WidgetState = {
    expanded: boolean,
}

export class WidgetMain extends React.Component<WidgetProps, WidgetState> {
    static contextType = ConfigContext;
    context!: React.ContextType<typeof ConfigContext>;

    constructor(props: any) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    componentDidMount(): void {
        const {appRoot} = this.context.globals;
        appRoot.classList.remove('loading');
    }

    render() {
        const {expanded} = this.state;
        const {children: widgetContent, buttonText = "Open widget"} = this.props;

        return (
            <>
                {expanded && widgetContent}
                <WidgetToggleButton expanded={expanded}
                                    buttonText={buttonText}
                                    toggleExpanded={() => this.toggleExpanded()}>
                </WidgetToggleButton>
            </>
        );
    }

    private toggleExpanded() {
        this.setState({expanded: !this.state.expanded})
    }
}
