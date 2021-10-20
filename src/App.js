
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
import Product from "./views/product";
import Example from "./components/LoadingPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
    <Switch>
      <Route path='/example'>
        <Example type={'spinningBubbles'} color={'#000000'}/>
      </Route>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path='/signup'>
        <Signup/>
      </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
    <PrivateRoute>
      <Route exact path='/product'>
        <Product/>
      </Route>
      <Route exact path='/myaccount'>
        <Dashboard/>
      </Route>
      <Route exact path='/myaccount/publish'>
        <Publish/>
      </Route>
      </PrivateRoute>
    </Switch>
    </>
  );
}

export default App;
