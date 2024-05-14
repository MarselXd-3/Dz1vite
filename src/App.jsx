// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PostsPage from './PostsPage';
import CreatePostPage from './CreatePostPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" component={PostsPage} />
          <Route path="/create-post" component={CreatePostPage} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
