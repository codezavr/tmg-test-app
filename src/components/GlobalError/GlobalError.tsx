import React from 'react';
import './GlobalError.sass'
import { IError } from '../../data/errors';

type GlobalErrorProps = {
    error: IError;
}

function GlobalError({ error }: GlobalErrorProps) {
    return (
        <div className="GlobalError">{ error.message }</div>
    )
}

export default GlobalError;
