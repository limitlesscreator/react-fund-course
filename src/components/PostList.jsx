import React, {useState} from 'react';
import s from "../styles/App.module.sass";
import {PostItem} from "./PostItem";

export const PostList = (props) => {

    return (
        <div>
            <h2 className={s.listPosts}>Список постов</h2>
            {props.posts.map((el) => {
                return (
                    <PostItem post={el}/>
                )
            })}
        </div>
    );
};
