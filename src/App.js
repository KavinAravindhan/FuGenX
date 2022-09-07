import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';

export default function App() 
{
  return (
    <Router>
      <Routes>
          <Route exact path="/browse" element={<Browse/>}/>
          <Route exact path="/signin" element={<SignIn/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
      
  );
}


