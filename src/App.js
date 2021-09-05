import s from './styles/App.module.sass'
import {PostItem} from "./components/PostItem";

import {useMemo, useRef, useState} from "react";
import {PostList} from "./components/PostList";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";
import {v1} from "uuid";
import {PostForm} from "./components/PostForm";
import {MySelect} from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: v1(), title: 'Javascript', body: 'Z'},
        {id: v1(), title: 'React', body: 'A'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery,setSearchQuery] = useState('')


    const sortedPosts = useMemo(() => {
        if(selectedSort){
            console.log('Отработала функция sorted')
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    },[selectedSort, posts])

    console.log(searchQuery)
    const callBackAddPost = (newObj) => {
        setPosts([...posts, newObj])
    }
    const removePost = (id) => {
        let filterPosts = posts.filter(el => el.id !== id)
        setPosts(filterPosts)

    }
    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className={s.app}>
            <PostForm callBackAddPost={callBackAddPost}/>
            <hr className={s.hr}/>
            <MyInput placeholder={'search'} onChange={e => setSearchQuery(e.currentTarget.value)} value={searchQuery}/>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue={'Sort by'}
                options={[{name: 'By name', value: 'title'}, {name: 'By description', value: 'body'}]}
            />
            <PostList posts={sortedPosts} removePost={removePost}/>
            {posts.length === 0 && <div className={s.empty}>empty</div>}
        </div>
    );
}

export default App;
