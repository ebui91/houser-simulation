import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard';
import Home from './components/home.js';
import Step1 from './components/Step1';
import Step2 from './components/Step2';

export default(
  <BrowserRouter>
      <div>
        <Route component= { Home } exact path= '/' />
        <Route component= { Dashboard } path= '/dashboard' />
        <Route component= { Step1 } path= '/step1' />
        <Route component= { Step2 } path= '/step2' />
      </div>
  </BrowserRouter>
)
