import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import { GlobalStyles } from './styles/Global.styles';

const App = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
