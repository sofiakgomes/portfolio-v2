import "./css/App.css";
import "./css/Hamburgers.css";
import { useState, useEffect } from "react";
import { face1, face2, face3, face4 } from "./assets/faces";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Home,
  About,
  Bauhaus,
  Box,
  Epoque,
  Zine
} from "./pages";

const menuClass = { null: "", true: "show", false: "hide" }

function App() {
  const [ menuOpen, setMenu ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 50); // Needed for Chrome
  }, [])

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <img className="overlay-face face1" src={face1}></img>
      <img className="overlay-face face2" src={face2}></img>
      <img className="overlay-face face3" src={face3}></img>
      <img className="overlay-face face4" src={face4}></img>
      <div className="overlay"></div>
      <Link className="home" to="/">
        <img className="home-face face1" src={face1}></img>
        <img className="home-face face2" src={face2}></img>
        <img className="home-face face3" src={face3}></img>
        <img className="home-face face4" src={face4}></img>
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
        <Route path="/bauhaus">
          <Bauhaus />
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
