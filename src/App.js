import React, { Component } from 'react';
//import M from 'materialize-css';
//import logo from './logo.svg';
import './App.css';

const webName='Laihz';
const webNavName='Laihz Navigator';

class NavBar extends Component{
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo right">Logo</a>
                        <ul id="nav-mobile" className="left ">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
      </div>
    );
  }
}

export default App;
