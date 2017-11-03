import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard';


export default(
  <BrowserRouter>
      <div>
        <Route component= { App } exact path= '/' />
        <Route component= { Dashboard } path= '/dashboard' />
      </div>
  </BrowserRouter>
)
