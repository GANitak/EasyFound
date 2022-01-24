// import * as React from "react";

import IMGanit from './IMGanit.svg';
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';

import Home from './Components/Home.js'
import Login from './Components/Login.js'
import NavBar from'./Components/NavBar.js'
import Register from './Components/Register.js'
import './App.css';

function App() {
  return (
/*<Router>
        <div>
            <NavBar />
            <Route path="/NavBar" component={NavBar} />
        </div>*/

        <div className="App">
    <NavBar />
    {/*<Home />*/}
{/*  Component::  <Login />*/}
   {/* <nav bar="NavBar" 
    style={{ color: '#369f14'}} > {<Login/>} </nav>*/}
    <header className="App-header">
      
      <Link to="/">
        <img src={IMGanit}  className="Face-logo" 
alt="FaceLogo" />
      </Link>

        <main> 
<p><strong>Welcome to GANit_ak.io</strong></p>
            <p>
      :: What they do :: <br/>
        <em>web & mobile app development<br/></em>
        (front end) & back end<br/>
 <strong><code>Happy times G0 after that.</code></strong>
        </p>
 <a href="https://twitter.com/GANit_ak" target="_blank" rel="twitter">Twitter</a>
    
        </main>
    </header>
    <a href="mailto:blanc-m-a@protonmail.com?subject=Mail from GANitak_visitor" style={{ color: '#369f14', margin: '15px', size:'calc(15px + 2vmin)'}}>#Email ME</a>

    <footer className="footer" >&copy; &#8471; GANitak.io</footer>
</div>

// </Router>
  );
}

export default App;
