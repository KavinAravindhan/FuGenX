import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
// import { useAuthListener } from './hooks';

export default function App() 
{
  const { user } = {};

  return (
    <Router>
      <IsUserRedirect>
        <Routes>
          <Route exact path="/signin" element={<SignIn/>}/> 
          <Route exact path="/signup" element={<SignUp/>}/>
          
          <Route exact path="/browse" element={
            <ProtectedRoute>
              <Browse/>
            </ProtectedRoute>
          }/>
        
          <Route exact path="/" element={<Home/>}/> 
        </Routes>
      </IsUserRedirect>
    </Router> 
  );
}