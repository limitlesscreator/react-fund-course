import React from 'react';
import s from '../../../styles/MyButton.module.sass'

export const MyButton = (props) => {
    return (
        <button className={s.myBtn}>
            Создать пост
        </button>
    );
};
