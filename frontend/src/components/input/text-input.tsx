import * as React from 'react';
import { ChangeEvent, useState } from 'react';

import { useValidation, ValidatorFn, ValidityChangeFn } from "./validation-hook";

import './text-input.scss';


type InputProps = {
    placeholder: string,
    valueChange: (val: string) => void,
    validityChange: ValidityChangeFn,
    required?: boolean,
    validators?: ValidatorFn[];
    stick?: 'right' | 'left'
}

export const TextInput: React.FC<InputProps> = ({
    placeholder,
    valueChange,
    validityChange,
    required= false,
    validators= [],
    stick,
}) => {
    const stickClass = stick ? `stick-${stick}` : '';
    const [touched, setTouched] = useState<boolean>(false);
    const [error, validate] = useValidation(validityChange, required, validators);

    const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const input = ev.target;
        validate(ev.target);
        valueChange(input.value);
    };

    return (
            <label className='url-shortener__input-label'>
                <input className={`url-shortener__input ${stickClass}`}
                       type='text'
                       placeholder={placeholder}
                       required={required}
                       onFocus={() => setTouched(true)}
                       onChange={onChange}
                />
                {touched && error && <span className='url-shortener__input-error'>{error}</span>}
            </label>
    );
};
