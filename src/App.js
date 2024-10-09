import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserPost from './components/UserPost';
import EditUserPost from './components/EditUserPost';
import UserComment from './components/UserComment';
import './index.css'

const App = () => {
  return (
    <Router>
      <nav className='menu'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">List User</Link></li>
          <li><Link to="/user-post">Post User</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user-detail/:userId" element={<UserDetail />} />
        <Route path="/user-post" element={<UserPost />} />
        <Route path="/edit-post/:postId" element={<EditUserPost />} />
        <Route path="/user-comment" element={<UserComment />} />
      </Routes>
    </Router>
  );
};

export default App;
