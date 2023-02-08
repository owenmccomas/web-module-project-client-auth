import React, {useEffect, useState} from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import './App.css'
import { axiosWithAuth } from './util/axiosWithAuth';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsContent from './components/FriendsContent';
import AddFriendForm from './components/AddFriendForm';

function App() {

  return (
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/add-friend">Add Friend</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/protected' element = {<FriendsContent />} />
          <Route path="/logout" element = {<Logout />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/" element = {<Login />} />    
          <Route path="/add-friend" element = {<AddFriendForm />} />    
        </Routes>
      </div>
  );
}

export default App;