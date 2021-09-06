import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Start from './pages/Start';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>
          <Route path='/' exact>
            <Start></Start>
          </Route>
        </Switch>

        <Switch>
          <Route path='/reservations' exact>
            <Reservations></Reservations>
          </Route>
        </Switch>

        <Switch>
          <Route path='/reservations/confirmation'>
            <Confirmation></Confirmation>
          </Route>
        </Switch>

        <Switch>
          <Route path='/contact' exact>
            <Contact></Contact>
          </Route>
        </Switch>

        <Switch>
          <Route path='/admin' exact>
            <Admin></Admin>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
