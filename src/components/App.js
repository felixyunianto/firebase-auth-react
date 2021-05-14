import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Dashboard from './Dashboard';
import UpdateProfile from "./UpdateProfile";
import ForgotPassword from './ForgotPassword';
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/sign-in" component={Signin} />
                <Route path="/sign-up" component={Signup} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  );
}

export default App;
