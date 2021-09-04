import React, {useState} from 'react';
import {MyInput} from "./UI/input/MyInput";
import {MyButton} from "./UI/button/MyButton";
import {v1} from "uuid";

export const PostForm = (props) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        // console.log('without useRef')
        // setPosts([...posts, newObj])
        const newObj = {
            id: v1(), title: post.title, body: post.body
        }
        setPost({title: '', body: ''})
        props.callBackAddPost(newObj)
    }

    return (
        <form action="">
            <MyInput type="text"
                     placeholder={'Название поста'}
                     value={post.title}
                     onChange={(e) => setPost({...post, title: e.currentTarget.value})}/>

            <MyInput type="text"
                     placeholder={'Описание поста'}
                     value={post.body}
                     onChange={(e) => setPost({...post, body: e.currentTarget.value})}/>
            <MyButton onClick={addNewPost}>Добавить пост</MyButton>
        </form>
    );
};
