import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);
    const onUserChange = e => setUserId(e.target.value);

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const onSavePostClicked = () => {
        if(title && content){
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return(
        <div>
            <section>
                <h2>Add new post</h2>
                <form>
                    <label htmlFor="postTitle">Post Title</label>
                    <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                    />
                    <label htmlFor="postAuthor">Author:</label>
                        <select id="postAuthor" value={userId} onChange={onUserChange}>
                            <option value=""></option>
                            {userOptions}
                        </select>
                    <label htmlFor="postContent">Content</label>
                    <textarea 
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                    />
                    <button 
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                    >Save Post</button>
                </form>
            </section>
        </div>
    )
}
export default AddPostForm