/*

Musikverein Forchtenstein
Authors: Alexander Grill, Alexander Brenner

@ 2022

*/
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Gedenkenpage from "./components/pages/aboutpage/gedenkenpage";
import Historypage from "./components/pages/aboutpage/historypage";
import Kapellmeisterpage from "./components/pages/aboutpage/kapellmeisterpage";
import Musikerpage from "./components/pages/aboutpage/musikerpage";
import Vorstandpage from "./components/pages/aboutpage/vorstandpage";

import Contactpage from "./components/pages/contactpage/contactpage";
import Eventpage from "./components/pages/eventpage/eventpage";
import Gallerypage from "./components/pages/gallerypage/gallerypage";
import Guestbookpage from "./components/pages/guestbookpage/guestbookpage";
import Legalpage from "./components/pages/legalpage/legalpage";
import Musikschulvereinpage from "./components/pages/musikschulvereinpage/musikschulvereinpage";
import Startpage from "./components/pages/startpage/startpage";

import './App.scss';

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <div className="construction-wrap">
          <Router>
            <Switch>
              <Route path="/gedenken">
                <Gedenkenpage />
              </Route>
              <Route path="/geschichte">
                <Historypage />
              </Route>
              <Route path="/kapellmeister">
                <Kapellmeisterpage />
              </Route>
              <Route path="/musiker">
                <Musikerpage />
              </Route>
              <Route path="/vostand">
                <Vorstandpage />
              </Route>
              <Route path="/kontakt">
                <Contactpage />
              </Route>
              <Route path="/events">
                <Eventpage />
              </Route>
              <Route path="/bilder">
                <Gallerypage />
              </Route>
              <Route path="/gaestebuch">
                <Guestbookpage />
              </Route>
              <Route path="/legal">
                <Legalpage />
              </Route>
              <Route path="/musikschule">
                <Musikschulvereinpage />
              </Route>
              <Route path="/">
                <Startpage />
              </Route>
            </Switch> 
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
