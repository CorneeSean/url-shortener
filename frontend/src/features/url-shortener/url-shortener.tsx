import * as React from 'react';
import { useState } from "react";

import { UrlShortenerForm } from "./form/url-shortener-form";
import './url-shortener.scss';

export const UrlShortener: React.FC<{}> = ({}) => {
    const [submitInProgress, setSubmitInProgress] = useState(false);
    const onSubmit = () => {
        // TODO: Add logic that calls the api
    };

    return (
        <>
            <h2>Url Shortener</h2>
            <section className={'url-shortener__form-container'}>
                <UrlShortenerForm onSubmit={onSubmit}
                      submitInProgress={submitInProgress}
                ></UrlShortenerForm>
            </section>
        </>
    )
};