import "./App.css";
import { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import MainPage from "./components/MainPage";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing}></Route>
            <Route exact path='/spacex' component={MainPage}></Route>
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
