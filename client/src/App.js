// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  // Switch,
  Route,
  Routes
  // Link
} from "react-router-dom";
import Dashboard from'./components/Dashboard';
import ShowProduct from './components/ShowOne';
import ShoppingCart from './components/ShoppingCart';
function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <h1> Nav Bar and Title will go here </h1>
      <Routes>
          <Route path="/" element={Dashboard}/>
          <Dashboard></Dashboard>
          </Route>
        <Route path = "/api/:id" >
          <ShowProduct > </ShowProduct>
        </Route>
        <Route path = "/api/Fli/:id">
        <ShoppingCart></ShoppingCart>
        </Route>
        </Routes>
      
    </div>
  </BrowserRouter>
  );
}

export default App;
