import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components/views
import Blog from "./blog";
import SignIn from "./blog/components/SignIn";
import SignUp from "./blog/components/SignUp";
import Editor from "./blog/components/Editor";

export default function Routes() {
  return (
    <Router>
      <Switch>
        {/* =========================== TEST ========================  */}

        {/* Test Route */}
        <Route exact path="/test">
          <div>This route can be used for testing a component.!</div>
        </Route>

        {/* ========================== PRODUCTION =====================  */}

        {/* Landing page */}
        <Route exact path="/" component={Blog} />

        {/* SignUp */}
        <Route exact path="/signup" component={SignUp} />

        {/* SignIn */}
        <Route exact path="/signin" component={SignIn} />

        {/* Editor Page */}
        <Route exact path="/editor" component={Editor} />

        {/* Page not found */}
        <Route path="/">
          ERROR 404 <br />
          The page you are looking for does not exist :(
        </Route>
      </Switch>
    </Router>
  );
}
