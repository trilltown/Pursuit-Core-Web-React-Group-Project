import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingNavBar from "./components/LandingPageNav"
import FeedPage from "./components/FeedPage"
import ProfilePage from "./components/ProfilePage"
import LandingPage from "./components/LandingPage"
import './App.css';

function App() {
  return (
    <div className="App">
    <LandingNavBar/>
    <Switch>
      <Route path={"/feed"}>
        <FeedPage/>
      </Route>
      <Route path={"/profile"}>
        <ProfilePage/>
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
