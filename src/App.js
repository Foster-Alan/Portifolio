import { Switch, BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import exp from './pages/Exp';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/About" component={ About } />
          <Route exact path="/Projects" component={ Projects } />
          <Route exact path="/skills" component={ Skills } />
          <Route exact path="/exp" component={ exp } />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
