import s from './styles/App.module.sass'
import {PostItem} from "./components/PostItem";

import {useRef, useState} from "react";
import {PostList} from "./components/PostList";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";
import {v1} from "uuid";
import {PostForm} from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: v1(), title: 'Javascript', body: 'Description'},
        {id: v1(), title: 'React', body: 'Description'},
    ])
    const callBackAddPost = (newObj) => {
        setPosts([...posts, newObj])
    }
    const removePost = (id) => {
        let filterPosts = posts.filter(el => el.id !== id)
        setPosts(filterPosts)
    }

    return (
        <div className={s.app}>
            <PostForm callBackAddPost={callBackAddPost}/>
            <PostList posts={posts} removePost={removePost}/>
            {posts.length === 0 && <div className={s.empty}>empty</div>}
        </div>
    );
}

export default App;
