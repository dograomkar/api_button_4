import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px',justifyContent: 'center' }}>
      <h1>Homepage</h1>

      <div className='top-buttons'>
       <button>Home</button>
       <button>Home</button>
       <button>Home</button>
       <button>Home</button>

      </div >
      <div className='vertical-buttons' style={{display: 'flex', flexDirection: 'column', width: '200px' }}>
      <button onClick={() => navigate('/user')}>USERS</button>
      <button onClick={() => navigate('/post')}>POSTS</button>
      <button onClick={() => navigate('/todo')}>TODO</button>
      <button onClick={() => navigate('/comment')}>COMMENTS</button>
      </div>
    </div>
  );
}

export default HomePage;
