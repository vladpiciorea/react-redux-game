import React from 'react';
import{ BrowserRouter  as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard'
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/layout/Footer";

function App() {
  return (
      <Router>
        <div className="App">
            <Navbar/>

            <Switch>
                <Route path='/' component={Dashboard} exact></Route>
                <Route path='/signin' component={SignIn}></Route>
                <Route path='/signup' component={SignUp}></Route>
            </Switch>
            <Footer/>
        </div>
      </Router>
  );
}

export default App;
