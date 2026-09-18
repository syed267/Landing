import React from "react";
import Navbar from './components/Navbar';
import Footers from './components/Footers';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
        <div>

    <BrowserRouter>
          <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
       <Footers/>
    </BrowserRouter>

    </div>
  );
}

export default App;
