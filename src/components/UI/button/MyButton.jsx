import React from 'react';
import s from '../../../styles/MyButton.module.sass'

export const MyButton = ({children, ...props}) => {
    return (
        <button {...props}  className={s.myBtn} >
            {children}
        </button>
    );
};
