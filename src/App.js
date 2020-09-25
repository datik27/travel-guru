import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Booking from './components/Booking/Booking';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Auth from './components/Auth/Auth';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import News from './components/News/News'
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

export const MyContext=createContext()
firebase.initializeApp(firebaseConfig);


//Started App
function App() {

  const [showArea,setShowArea]=useState(
    {
      id:1,
      title:"Cox's Bazar",
      description:"The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.",
      img:"https://i.ibb.co/p1Fm5yD/coxsbazar.png"
    }
  )

  const [loggedIn,setLoggedIn]=useState(false)
  const [name, setName]=useState("user")


// Return section of App 
  return (
    <MyContext.Provider value={[showArea,setShowArea,loggedIn,setLoggedIn,name, setName]}>
    <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/booking">
          <Booking></Booking>
        </Route>

        <Route exact path="/auth">
          <Auth></Auth>
        </Route>

        <PrivateRoute exact path="/booking/destination">
          <Destination></Destination>
        </PrivateRoute>

        <Route path="/news">
          <News></News>
        </Route>

        <Route path="/blog">
          <Blog></Blog>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>

    {/* Not Found Route */}
        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>
    
    </MyContext.Provider>
  );
}

export default App;