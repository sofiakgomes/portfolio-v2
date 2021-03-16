import "./css/App.css";
import "./css/Hamburgers.css";
import { useState, useEffect } from "react";
import * as faces from "./assets/faces";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Home,
  About,
  Posters,
  Box,
  Epoque,
  Zine
} from "./pages";

const menuClass = { null: "", true: "show", false: "hide" }

function App() {
  const [ overlayVisible, setOverlay ] = useState(true);
  const [ menuOpen, setMenu ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 500); // Needed for Chrome
    setTimeout(() => setOverlay(false), 5000);
  }, [])

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {overlayVisible &&
        <div>
          <img className="overlay-face face1" src={faces.face1L}></img>
          <img className="overlay-face face2" src={faces.face2L}></img>
          <img className="overlay-face face3" src={faces.face3L}></img>
          <img className="overlay-face face4" src={faces.face4L}></img>
          <div className="overlay" />
        </div>
      }
      <Link className="home" to="/">
        <img className="home-face face1" src={faces.face1S}></img>
        <img className="home-face face2" src={faces.face2S}></img>
        <img className="home-face face3" src={faces.face3S}></img>
        <img className="home-face face4" src={faces.face4S}></img>
      </Link>
      <div className={`menu ${menuClass[menuOpen]}`}>
        <Link to="/"><a>Home</a></Link>
        <Link to="/about"><a>About</a></Link>
      </div>
      <div className="header">
        <div 
          className={`hamburger hamburger--slider ${menuOpen ? "is-active" : ""}`}
          onClick={() => setMenu(!menuOpen)}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/posters">
          <Posters />
        </Route>
        <Route path="/box">
          <Box />
        </Route>
        <Route path="/epoque">
          <Epoque />
        </Route>
        <Route path="/zine">
          <Zine />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
