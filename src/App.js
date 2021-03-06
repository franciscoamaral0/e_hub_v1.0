import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./views/home";
import Dashboard from "./views/user/dashboard";
import Publish from "../src/views/user/publish/index";
import Signup from "./views/signup";
import Login from "../src/views/login/index";
import Product from "./views/product";
import Example from "./components/LoadingPage";
import List from "./views/search";

import { AuthProvider, Context } from "./contexts/AuthContext";
import { useContext } from "react";
import EditPublish from "./views/user/publish/editPublish";
import About from "./views/about";

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <Example type={"spinningBubbles"} color={"#ffffff"} />;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}

function App() {
  return (
    <>
      <AuthProvider>
        <Switch>
          <CustomRoute
            exact
            path="/example"
            render={() => (
              <Example type={"spinningBubbles"} color={"#000000"} />
            )}
          />
          <CustomRoute exact path="/about" component={About} />
          <CustomRoute exact path="/" component={Home} />
          <CustomRoute exact path="/login" component={Login} />
          <CustomRoute exact path="/signup" component={Signup} />
          <CustomRoute exact path="/product/:id" component={Product} />
          <CustomRoute exact path="/search/:query" component={List} />
          <CustomRoute
            exact
            isPrivate
            path="/myaccount"
            component={Dashboard}
          />
          <CustomRoute
            exact
            isPrivate
            path="/myaccount/publish"
            component={Publish}
          />
          <CustomRoute
            exact
            isPrivate
            path="/edit/:id"
            component={EditPublish}
          />
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
