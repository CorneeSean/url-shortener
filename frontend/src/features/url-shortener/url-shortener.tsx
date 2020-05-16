import * as React from 'react';
import { useState } from "react";

import { UrlShortenerForm, UrlShortenerFormValue } from "./form/url-shortener-form";
import { UrlShortenerService } from "./services/url-shortener.service";

import './url-shortener.scss';

type UrlShortenerProps = {
    service: UrlShortenerService
}

export const UrlShortener: React.FC<UrlShortenerProps> = ({service}) => {
    const [submitInProgress, submitError, shortUrl, onSubmit] = useService(service);
    return (
        <section className={'url-shortener__container'}>
            <h2>Url Shortener</h2>
            <p>Please paste your url below</p>

                <UrlShortenerForm
                    onSubmit={onSubmit}
                    submitInProgress={submitInProgress}
                ></UrlShortenerForm>
                {shortUrl &&
                    <p>Your short link:
                        <a href={shortUrl} target='_blank' rel='norefferer noopener'>{shortUrl}</a>
                    </p>
                }
            {submitInProgress && <span>Looking for scissors...</span>}
            {submitError && <span>Oops! Something went wrong! Please try again later!</span>}
        </section>
    );
};

function useService(service: UrlShortenerService):
    [boolean, boolean, string | null, (formValue: UrlShortenerFormValue) => void] {
    const [submitInProgress, setSubmitInProgress] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const [shortUrl, setShortUrl] = useState<string | null>(null);

    const onSubmit = (formValue: UrlShortenerFormValue) => {
        Promise.resolve()
            .then(() => {
                setShortUrl(null);
                setSubmitError(false);
                setSubmitInProgress(true);
            })
            .then(() => service.shorten(formValue))
            .then(({shortUrl}) => {
                setShortUrl(shortUrl);
                setSubmitInProgress(false);
            })
            .catch((err) => {
                console.error(err);
                setSubmitInProgress(false);
                setSubmitError(true)
            });
    };
    return [submitInProgress, submitError, shortUrl, onSubmit];
}
