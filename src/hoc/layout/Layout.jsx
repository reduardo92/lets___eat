import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navigation from '../../components/navigation/navigation';
import home from '../../components/Home/home';
import { FoodProvider } from '../../Context/FoodContext/FoodProvider';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import Menu from '../../components/Menu/Menu';
import AtmosphereC from '../../components/Atmosphere/AtmosphereC';

const Layout = () => {
  return (
    <>
      <FoodProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route path='/home' component={home} />
            <Route path='/about' component={About} />
            <Route path='/menu' component={Menu} />
            <Route path='/atmosphere' component={AtmosphereC} />
            <Redirect from='/' to='/home' />
          </Switch>
          <Footer />
        </Router>
      </FoodProvider>
    </>
  );
};

export default Layout;
