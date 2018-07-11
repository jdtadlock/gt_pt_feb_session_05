import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Auth from './Auth';

import Header from './components/Header';
import Callback from './components/Callback';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
// import axios from 'axios';

// src/Auth/Auth.js

class App extends Component {
  // componentDidMount = () => {
  //   axios.get('/user')
  //     .then(res => {
  //       console.log(res.data);
  //     });
  // }
  

  render() {
    const auth = new Auth(this.props.history);
    const isAuth = auth.isAuthenticated(); // Boolean true/false

    return (
      <div>
        <Header isAuth={isAuth} auth={auth} />     


        <Route path="/" render={() => (
          <main>
            {isAuth ? <Dashboard /> : <Landing />}
          </main>
        )} />
        
        <Route path="/callback" render={() => (
          <Callback processAuth={auth.processAuthentication} />
        )} />

        {/* <button onClick={auth.logout}>Logout</button> */}
      </div>  
    );
  }
}

export default withRouter(App);
