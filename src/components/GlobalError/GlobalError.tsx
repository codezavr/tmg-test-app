import React from 'react';
import styles from './GlobalError.module.sass'
import { IError } from '../../data/errors';

type GlobalErrorProps = {
    error: IError;
}

function GlobalError({ error }: GlobalErrorProps) {
    return (
        <div className={ styles.GlobalError }>{ error.message }</div>
    )
}

export default GlobalError;
