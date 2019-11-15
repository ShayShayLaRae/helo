import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Auth from './components/Auth/Auth';
import Dash from './components/Dash/Dash';
import Form from './components/Form/Form';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <Nav />
      <Auth />
      <Dash />
      <Form />
      <Post />
      
    </div>
  );
}

export default App;
