import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';

export default function App() 
{
  return (
    <Router>
      <Route exact patn = "/signup">
        <SignUp />
      </Route>
      <Route exact path = {ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}


