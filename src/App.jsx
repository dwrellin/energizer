import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import HomePage from './pages';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import LoginPage from './pages/login';
import PrivacyPolicyPage from './pages/privacy-policy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/privacy-policy' component={PrivacyPolicyPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
