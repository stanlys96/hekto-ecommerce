import logo from './logo.svg';
import './App.css';
import routes from './routes';
import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import BottomNavBar from './components/BottomNavBar';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <Navbar />
      <BottomNavBar />
      <div style={{paddingTop: '12vh'}}></div>
      <Switch>
        {routes.map((res) => (
          <Route 
            key={res.id}
            path={res.path}
            component={res.component}
            exact={res.exact}
          />
        ))}
      </Switch>
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default App;
