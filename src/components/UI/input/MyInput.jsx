import React from 'react';
import s from '../../../styles/MyInput.module.sass'

export const MyInput = (props) => {
    return (
        <>
            <input {...props} className={s.myInput} value={props.value} onChange={props.onChange}/>
        </>
    );
};
