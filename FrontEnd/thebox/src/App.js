import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingNavBar from "./components/LandingPageNav"
import Login from "./components/Login"
import SignUp from "./components/Signup"
import LandingNavBar from "./components/LandingPage"
import './App.css';

function App() {
  return (
    <div className="App">
    <LandingNavBar/>
    <Switch>
      <Route path={"/Login"}>
        <Login/>
      </Route>
      <Route path={"/SignUp"}>
        <SignUp/>
      </Route>
      <Route  exact path={"/"} >
          <LandingPage/>
      </Route>
      <Route path="*" render={() => <div>Something Went Wrong</div>} />
    </Switch>
   
    </div>
  );
}

export default App;
