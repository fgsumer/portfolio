import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// import NavBar from './Components/NavBar/NavBar';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
      </Router>
    </>
  );
}

export default App;
