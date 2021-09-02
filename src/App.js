import s from './styles/App.module.sass'
import {PostItem} from "./components/PostItem";
import {useState} from "react";
import {PostList} from "./components/PostList";
import {MyButton} from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'React', body: 'Description'},
    ])


    return (
        <div className={s.app}>
            <form action="">
                <input type="text" placeholder={'Название поста'}/>
                <input type="text" placeholder={'Описание поста'}/>
                <MyButton/>
            </form>
            <PostList posts={posts}/>
        </div>
    );
}

export default App;
