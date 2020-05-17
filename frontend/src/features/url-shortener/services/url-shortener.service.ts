import {config} from "../../../contexts/config";
import { UrlShortenerFormValue } from "../form/url-shortener-form";

export class UrlShortenerService {
    private host = config.hosts.urlShortener;

    shorten(formValue: UrlShortenerFormValue): Promise<{shortUrl: string}> {
        return fetch(this.host + '/shorten', {
            method: 'POST',
            body: JSON.stringify(formValue),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
}
