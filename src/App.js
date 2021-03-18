import "./css/App.css";
import "./css/Hamburgers.css";
import { useState, useEffect, useRef } from "react";
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
  Box,
  Epoque,
  Posters,
  SurvivalKit,
  Zine
} from "./pages";

const menuClass = { null: "", true: "show", false: "hide" }

const useResize = (ref) => {
  const [ width, setWidth ] = useState(0);
  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    const handleResize = () => {
      setWidth(ref.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);
  return width;
}

function App() {
  const ref = useRef(null);
  const width = useResize(ref);

  const [ overlayVisible, setOverlay ] = useState(true);
  const [ menuOpen, setMenu ] = useState(null);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    window.scrollTo(0, 0);
    setTimeout(() => document.body.style.overflowY = "unset", 3000);
    setTimeout(() => window.scrollTo(0, 0), 500); // Needed for Chrome
    setTimeout(() => setOverlay(false), 6500);
  }, []);

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
      <Link to="/"><div className="name">SOFIA GOMES</div></Link>
      <div className={`menu ${menuClass[menuOpen]}`}>
        <Link to="/" onClick={() => setMenu(false)}><a>HOME</a></Link>
        <Link to="/about" onClick={() => setMenu(false)}><a>ABOUT</a></Link>
      </div>
      <div 
        className={`hamburger hamburger--collapse ${menuOpen ? "is-active" : ""}`}
        onClick={() => setMenu(!menuOpen)}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      <div className="header" />
      <div ref={ref}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/box">
            <Box width={width} />
          </Route>
          <Route path="/epoque">
            <Epoque width={width} />
          </Route>
          <Route path="/posters">
            <Posters width={width} />
          </Route>
          <Route path="/survivalkit">
            <SurvivalKit width={width} />
          </Route>
          <Route path="/zine">
            <Zine width={width} />
          </Route>
          <Route path="/">
            <Home width={width} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
