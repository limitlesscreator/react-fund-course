import React from 'react';
import s from "../styles/App.module.sass";
import {MyButton} from "./UI/button/MyButton";

export const PostItem = (props) => {

    return (
        <div className={s.post}>
            <div>
                <strong>
                    <div className={s.idStyle}>ID: {props.post.id}</div>
                    {props.post.title}</strong>
                <p>{props.post.body}</p>
            </div>
            <div>
                <MyButton onClick={() => {props.removePost(props.post.id)}}>Удалить</MyButton>
            </div>
        </div>
    );
};
