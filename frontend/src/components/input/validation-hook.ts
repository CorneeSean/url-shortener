import { useState } from "react";

type ValidationError = string | null;

export type ValidatorFn = (val: string) => ValidationError;
export type ValidityChangeFn = (isValid: boolean) => void;


export const useValidation = (
    validityChange: (isValid: boolean) => void,
    required: boolean = false,
    validators: ValidatorFn[] = [],
): [ValidationError, (input: HTMLInputElement) => void] => {
    const [error, setError] = useState<ValidationError>(null);

    const getError = (input: HTMLInputElement): ValidationError => {
        if (required && input.validity.valueMissing) {
            return 'Value is required';
        }
        for (const validator of validators) {
            const errorMessage = validator(input.value);
            if (errorMessage) {
                return errorMessage;
            }
        }
        return null;
    };

    const validate = (input: HTMLInputElement) => {
        const error = getError(input);
        setError(error);
        validityChange(!error);
    };

    return [error, validate];
};
