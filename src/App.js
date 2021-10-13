
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./views/home";
import Dashboard from "./views/user/dashboard";
import Publish from '../src/views/user/publish/index'
import Signup from "./views/signup";
import Login from '../src/views/login/index'

function App() {
  return (
    <>
    <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/myaccount/publish'>
        <Publish/>
      </Route>
      <Route path='/myaccount'>
        <Dashboard/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
