import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import Post from './components/Post';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile/:id" component={UserProfile} />
        <Route path="/post/:id" component={Post} />
        <Route path="/" exact component={() => <h1>Welcome to Social Networking App</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
