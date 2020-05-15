import * as React from 'react';
import { SyntheticEvent, useState } from "react";

import './shortener-form.scss';

type ShortenerFormProps = {
    onSubmit: () => void;
    submitInProgress: boolean,
}

export const ShortenerForm: React.FC<ShortenerFormProps> = ({onSubmit, submitInProgress}) => {
    const [isInputValid, setInputValid] = useState(false);

    const validateUrl = (ev: SyntheticEvent<HTMLInputElement>) => {
        const inputValue = ev.currentTarget.value;
        if (inputValue) {
            setInputValid(true);
        } else {
            setInputValid(false);
        }
    };
    const submitForm = (ev: SyntheticEvent) => {
        ev.preventDefault();
        onSubmit();
    };

    return (
        <>
            <p>Please paste your url below</p>
            <form className='url-shortener__form' onSubmit={submitForm}>
                {/*TODO: Move input to a separate, reusable component in the future */}
                <input className="url-shortener__input"
                       type='text'
                       placeholder='Url to be shortened'
                       onChange={validateUrl}
                />
                <button className="url-shortener__button stick-left"
                        type='submit'
                        disabled={!isInputValid || submitInProgress}>
                    Shorten
                </button>
            </form>
        </>
    );
};
