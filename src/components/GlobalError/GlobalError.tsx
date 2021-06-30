import React from 'react';
import './GlobalError.sass'
import { IError } from '../../data/errors';

function GlobalError({ error }: { error: IError }) {
    return (
        <div className="GlobalError">{ error.message }</div>
    )
}

export default GlobalError;
