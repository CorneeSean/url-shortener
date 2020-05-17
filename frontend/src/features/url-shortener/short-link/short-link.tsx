import * as React from "react";
import { useContext } from "react";

import { WidgetMessagingContext } from "../../../contexts/widget-messaging";
import './short-link.scss';

type ShortLinkProps = {
  shortUrl: string,
  onBackClick: () => void,
};

export const ShortLink: React.FC<ShortLinkProps> = ({shortUrl, onBackClick}) => {
    const widgetMessaging = useContext(WidgetMessagingContext);
    const onCopyClick = () => {
        widgetMessaging.copy(shortUrl);
    };
    return (
        <>
            <p>Your short link: </p>
            <div className='url-shortener__short-link'>
                <a href={shortUrl}
                   target='_blank'
                   rel='norefferer noopener'>{shortUrl}
                </a>
                <button className="widget__button no-radius"
                        onClick={onCopyClick}>
                    Copy
                </button>
                <button className="widget__button secondary stick-left"
                        title='Move back'
                        onClick={onBackClick}>
                    Back
                </button>
            </div>
        </>
    )
};
