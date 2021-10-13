
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./views/home";
import Dashboard from "./views/user/dashboard";
import Publish from '../src/views/user/publish/index'

function App() {
  return (
    <>
    <Switch>
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
