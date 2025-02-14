

import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Home()
{return 
<h1>Home</h1>

}

function About()
{return <h1>About</h1>}

function Htmlhome()
{return <h1>Htmlhome</h1>}



function App() {
  return (

    
    
      <Router>
        <h1 style={{ textAlign:'center'}}>HTML TUTORIAL</h1>
<nav style={{backgroundColor:'lightblue', fontFamily:'sans-serif', textAlign:'center'}}>
  <Link to="/">Home</Link>
  <br></br>
  <Link to="/about">About</Link>
  <br></br>
  <Link to="/htmlhome">HTML HOME</Link>
  <br></br>
  <Link to="/htmlintroduction">HTML INTRODUCTION</Link>
  <br></br>
  <Link to="/htmleditors">HTML EDITORS</Link>
  <br></br>
  <Link to="/htmlbasic">HTML BASIC</Link>
  <br></br>
  <Link to="/htmlelements">HTML ELEMENTS</Link>
</nav>

      
    
     <Routes>

      <Route path='/' element={<Home >Home</Home>}/>
      <Route path='/about' element={<About >About</About>}/>
      <Route path='/htmlhome' element={<Htmlhome >HTML HOME</Htmlhome>}/>
      <Route path='/htmlintroduction' element={<h1 >HTML INTRODUCTION</h1>}/>
      <Route path='/htmleditors' element={<h1 >HTML EDITORS</h1> }/>
      <Route path='/htmlbasic' element={<h1 >HTML BASIC</h1>}/>
      <Route path='/htmlelements' element={<h1 >HTML ELEMENTS</h1>}/>
      
     </Routes>
     </Router>
    
  );
}

export default App;
