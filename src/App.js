// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => (
  <Router>
    <Header />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </Switch>

    <Footer />
  </Router>
);

export default App;
