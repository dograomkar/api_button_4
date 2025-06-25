import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ArticleListPage from './ArticleListPage';
import UserDetails from './UserDetails';
import PostDetails from './PostDetails';
import TodoDetails from './TodoDetails';
import CommentDetails from './CommentDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:type" element={<ArticleListPage />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/post/:id" element={<UserDetails />} />
        <Route path="/todo/:id" element={<UserDetails />} />
        <Route path="/comment/:id" element={<UserDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
