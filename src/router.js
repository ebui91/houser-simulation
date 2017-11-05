import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/home.js';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

export default(
  <BrowserRouter>
      <div>
        <Route component= { Home } exact path= '/' />
        <Route component= { Dashboard } path= '/dashboard' />
        <Route component= { Step1 } path= '/step1' />
        <Route component= { Step2 } path= '/step2' />
        <Route component= { Step3 } path= '/step3' />
        <Route component= { Step4 } path= '/step4' />
        <Route component= { Step5 } path= '/step5' />
      </div>
  </BrowserRouter>
)
