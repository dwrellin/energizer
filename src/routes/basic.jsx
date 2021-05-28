import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import LoginPage from '../pages/login';
import PrivacyPolicyPage from '../pages/privacy-policy';

export default function BasicRoutes() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/contact' component={ContactPage} />
      <Route path='/privacy-policy' component={PrivacyPolicyPage} />
      <Route path='/login' component={LoginPage} />
    </>
  );
}
