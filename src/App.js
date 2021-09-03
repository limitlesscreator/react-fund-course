import s from './styles/App.module.sass'
import {PostItem} from "./components/PostItem";

import {useState} from "react";
import {PostList} from "./components/PostList";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'React', body: 'Description'},
    ])
    const [title, setTitle] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        console.log('without useRef')
    }
    console.log(title)

    return (
        <div className={s.app}>
            <form action="">
                <MyInput type="text" placeholder={'Название поста'} value={title}
                         onChange={(e) => setTitle(e.currentTarget.value)}/>
                <MyInput type="text" placeholder={'Описание поста'}/>
                <MyButton onClick={addNewPost}>Добавить пост</MyButton>
            </form>
            <PostList posts={posts}/>
        </div>
    );
}

export default App;
