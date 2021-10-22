
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from "./views/home";
import Dashboard from "./views/user/dashboard";
import Publish from '../src/views/user/publish/index'
import Signup from "./views/signup";
import Login from '../src/views/login/index'
import Product from "./views/product";
import Example from "./components/LoadingPage";
import PrivateRoute from "./components/PrivateRoute";

import {AuthProvider, Context} from './contexts/AuthContext'
import { useContext } from "react";


function CustomRoute({isPrivate, ...rest}){
  const {loading, authenticated} = useContext(Context)

  if(loading){
    return <Example type={'spinningBubbles'} color={'#000000'}/>
  }

  if(isPrivate && !authenticated){
    return <Redirect to='/login'/>
  }

  return <Route {...rest} />

}



function App() {
  return (
    <>
    <AuthProvider>
      <Switch>
        <CustomRoute exact path='/login' component={Login}/>
        <CustomRoute exact path='/signup' component={Signup}/>
        <CustomRoute exact path='/' component={Home}/>
        <CustomRoute exact path='/product/:id' component={Product}/>
        <CustomRoute exact isPrivate path='/myaccount' component={Dashboard}/>
        <CustomRoute exact isPrivate path='/myaccount/publish' component={Publish}/>
      </Switch>
    </AuthProvider>
    </>
  );
}

export default App;



  // <Route path='/example'>
  //         <Example type={'spinningBubbles'} color={'#000000'}/>
  //       </Route>
  //       <Route exact path='/login'>
  //         <Login/>
  //       </Route>
  //       <Route exact path='/signup'>
  //         <Signup/>
  //       </Route>
  //       <Route exact path='/'>
  //         <Home/>
  //       </Route>
  //     <PrivateRoute>
  //       <Route exact path='/product'>
  //         <Product/>
  //       </Route>
  //       <Route exact path='/myaccount'>
  //         <Dashboard/>
  //       </Route>
  //       <Route exact path='/myaccount/publish'>
  //         <Publish/>
  //       </Route>
  //       </PrivateRoute>