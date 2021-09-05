import React, {useState} from 'react';
import s from "../styles/App.module.sass";
import {PostItem} from "./PostItem";
import {v1} from "uuid";

export const PostList = (props) => {

    return (
        <div>
            <h2 className={s.listPosts}>Список постов</h2>
            {props.posts.map((el) => {
                return (
                    <PostItem key={v1()} post={el} removePost={props.removePost}/>
                )
            })}
        </div>
    );
};
