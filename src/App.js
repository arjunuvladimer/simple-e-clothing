import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/home/homepage.component';
import ShopPage  from './pages/shop/shoppage.component';
import { Header } from './components/header/header.component.jsx'
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/sign-in' component={SignInAndSignUpPage}/>
      </Switch>
    </>
  );
}

export default App;
