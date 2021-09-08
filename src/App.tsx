import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Start from './pages/Start';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Confirmation from './pages/Confirmation';
import Booking from './pages/Booking';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Cancellation from './pages/Cancellation';

library.add(faFacebook, faInstagram, faTwitter);

function App() {
  return (
    <div className="App">

      <Router>
        <div className="container">
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
          <Route path='/reservations/delete/:id' exact>
            <Cancellation></Cancellation>
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

        <Switch>
          <Route path='/admin/:id' exact>
            <Booking></Booking>
          </Route>
        </Switch>

        <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
