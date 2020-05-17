import * as React from 'react';
import { SyntheticEvent, useState } from 'react';

import { TextInput } from "../../../components/input/text-input";

import UrlUtils from "../../../../../common/utils/url-utils";

import './url-shortener-form.scss';

export type UrlShortenerFormValue = {
    url: string | null
}

type UrlShortenerFormProps = {
    onSubmit: (formValue: UrlShortenerFormValue) => void;
    submitInProgress: boolean,
}

export const UrlShortenerForm: React.FC<UrlShortenerFormProps> = ({onSubmit, submitInProgress}) => {
    const [formValue, setFormValue] = useState<UrlShortenerFormValue>({url: null});
    const [inputsValidity, setFormValidity] = useState({url: false});

    const submitForm = (ev: SyntheticEvent) => {
        ev.preventDefault();
        onSubmit(formValue);
    };
    const isFormValid = () => !Object.values(inputsValidity).includes(false);

    const urlInputValidityChange = (isValid: boolean) => setFormValidity({url: isValid});
    const urlValidator = (val: string) => UrlUtils.isValidURL(val) ? null : 'Url is invalid';
    const urlValueChange = (val: string) => setFormValue({url: val});

    return (
        <>
            <p>Please paste your url below</p>
            <form className='url-shortener__form' onSubmit={submitForm}>
                <TextInput
                    placeholder={'Url to be shortened'}
                    required={true}
                    validators={[urlValidator]}
                    validityChange={urlInputValidityChange}
                    valueChange={urlValueChange}
                    stick={"right"}
                />

                <button className="widget__button stick-left"
                        type='submit'
                        disabled={!isFormValid() || submitInProgress}>
                    Shorten
                </button>
            </form>
        </>
    );
};
