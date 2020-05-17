import * as React from 'react';
import { useState } from 'react';

import { UrlShortenerForm, UrlShortenerFormValue } from "./form/url-shortener-form";
import { UrlShortenerService } from "./services/url-shortener.service";
import { ShortLink } from "./short-link/short-link";

import './url-shortener.scss';

type UrlShortenerProps = {
    service: UrlShortenerService
}

export const UrlShortener: React.FC<UrlShortenerProps> = ({service}) => {
    const [shortUrl, setShortUrl] = useState<string | null>(null);
    const [submitInProgress, submitError, onSubmit] = useService(service, setShortUrl);
    return (
        <section className={'url-shortener__container'}>
            <h2>Url Shortener</h2>
            {!shortUrl &&
                <UrlShortenerForm
                    onSubmit={onSubmit}
                    submitInProgress={submitInProgress}
                ></UrlShortenerForm>
            }
            {shortUrl && <ShortLink shortUrl={shortUrl} onBackClick={() => setShortUrl(null)}/>}
            {submitInProgress && <span className='url-shortener__progress-message'>Looking for scissors...</span>}
            {submitError &&
                <span className='url-shortener__progress-message error'>
                    Oops! Something went wrong! Please try again later!
                </span>
            }
        </section>
    );
};

function useService(service: UrlShortenerService, setShortUrl: (url: string | null) => void):
    [boolean, boolean, (formValue: UrlShortenerFormValue) => void] {
    const [submitInProgress, setSubmitInProgress] = useState(false);
    const [submitError, setSubmitError] = useState(false);

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
    return [submitInProgress, submitError, onSubmit];
}
