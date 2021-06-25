import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
 constructor(){
   super();

   this.state = {
     currentUser: null
   }
 }
 unsubscribeFomAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

   this.unsubscribeFomAuth = auth.onAuthStateChanged( async userAuth => {
           if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
   });
 }

  componentWillUnmount(){
    this.unsubscribeFomAuth();
  }

 render() 
 {
  return (
    <div>
    <Header currentUser={this.state.currentUser} />
    <switch>
      <Route exact path='/' component = {HomePage} />
      <Route path='/shop' component = {ShopPage} />
      <Route path='/signin' component = {SignInAndSignUpPage} />
    </switch>
    </div>
  );
}
}


export default App;
