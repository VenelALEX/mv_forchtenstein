/*

Musikverein Forchtenstein
Authors: Alexander Grill, Alexander Brenner

@ 2022

*/
import React from 'react';
import './App.scss';

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <div className="construction-wrap">
          <div>
            <h1>Musikverein Forchtenstein</h1>
            <p>Diese Seite befindet sich derzeit in der Entwicklung. Besuchen Sie uns in der zwischenzeit auf:</p>
            <a href="https://www.musikverein-forchtenstein.at/"> www.musikverein-forchtenstein.at</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
