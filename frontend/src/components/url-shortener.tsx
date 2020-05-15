import * as React from 'react';
import { WidgetToggleButton } from "./widget-toggle-button/widget-toggle-button";
import { ConfigContext } from "../config";
import { ShortenerForm } from "./shortener-form/shortener-form";
import "./url-shortener.scss";

type UrlShortenerState = {
    widgetExpanded: boolean,
    submitInProgress: false,
}

class UrlShortener extends React.Component<{}, UrlShortenerState> {
    static contextType = ConfigContext;
    context!: React.ContextType<typeof ConfigContext>;

    constructor(props: any) {
        super(props);
        this.state = {
            widgetExpanded: false,
            submitInProgress: false,
        };
    }

    render() {
        const {widgetExpanded, submitInProgress} = this.state;
        return (
            <>
                {widgetExpanded &&
                    <>
                        <h2>Url Shortener</h2>
                        <section className={'url-shortener__form-container'}>
                            <ShortenerForm onSubmit={() => this.onFormSubmit()}
                                           submitInProgress={submitInProgress}
                            ></ShortenerForm>
                        </section>
                    </>
                }

                <WidgetToggleButton widgetExpanded={widgetExpanded}
                                    toggleWidgetExpanded={() => this.toggleWidgetExpanded()}>
                </WidgetToggleButton>
            </>
        );
    }

    private toggleWidgetExpanded() {
        this.setState({widgetExpanded: !this.state.widgetExpanded})
    }

    private onFormSubmit() {

    }
}

export default UrlShortener;
