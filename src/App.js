import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Header />
              <About />
            </div>
          </Route>
          <Route path="/resume.pdf">
            <Resume />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;