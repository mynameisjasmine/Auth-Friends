import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import './App.css';



function App() {
  return (
    <Router>
    <div className="App">
      <h1>Auth-Friends</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/private">Private Page</Link>
        </li>
        
      </ul>
      <Switch>
      
      <PrivateRoute path="/private" component={FriendsList}/>
      <Route path="login" component={LoginForm}/>
      <Route component={LoginForm}/>
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
