import React from 'react';
import s from "../styles/App.module.sass";

export const PostItem = (props) => {
    return (
        <div className={s.post}>
            <div>
                <strong>{props.post.id}.{props.post.title}</strong>
                <p>{props.post.body}</p>
            </div>
            <div>
                <button>Удалить</button>
            </div>
        </div>
    );
};
