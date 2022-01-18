import IMGanit from './IMGanit.svg';
// import BrowserRouter, Routes, Route from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav bar="contact" style={{ color: '#369f14'}}>Contact </nav>
          <header className="App-header">

    
          {/*<Link to="https://www.ganitak.io/">*/}
        <img src={IMGanit} className="Face-logo" alt="FaceLogo" />
        {/*</Link>*/}

        <main>
            <p><strong>Welcome to GANit_ak.io</strong></p>
            <p>
      :: What they do :: <br/>
        <em>web & mobile app development<br/></em>
        (front end) & back end<br/>
          <strong><code>Happy times G0 after that.</code></strong>
            </p>

            {/*<button>https://www.ganitak.io/</button>*/}
        </main>
      </header>
      <footer className="footer">&copy; &#8471; GANitak.io</footer>
    </div>
  );
}

export default App;
