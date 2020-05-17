import { UrlShortenerFormValue } from "../form/url-shortener-form";

export class UrlShortenerService {
    constructor(private host: string) {}

    shorten(formValue: UrlShortenerFormValue): Promise<{ shortUrl: string }> {
        return fetch(
            this.host + '/shorten',
            JSONPostRequestInit(formValue)
        ).then(JSONResponseHandler);
    }
}

function JSONResponseHandler(res: Response) {
    return res.json().then(data => {
        if (res.ok) {
            return data;
        } else {
            throw new Error(data && data.error || "Something went wrong. Please try again later");
        }
    });
}

function JSONPostRequestInit(formValue: UrlShortenerFormValue): RequestInit  {
    return {
        method: 'POST',
        body: JSON.stringify(formValue),
        headers: {
            'Content-Type': 'application/json'
        }
    };
}
