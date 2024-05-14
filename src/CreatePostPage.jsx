// CreatePostPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from './postsSlice';

const CreatePostPage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, body }));
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h2>Создать пост</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Заголовок:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="body">Текст:</label>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
