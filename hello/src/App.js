import logo from './logo.svg';
import './App.css';

import ironhackLogo from "./images/ironhack-logo.png"
import menuIcon from "./images/menu.png"

import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"



function App() {
  return (
    <div className="App">

      <nav className="nav-container">

        <img className="nav-img" src={ironhackLogo} alt="ironhack logo"/>
        <img className="nav-img" src={menuIcon} alt="menu icon"/>

      </nav>

      <section className="hello">

        <div className="hello-container">
          <h1 id="h1-hello">Say Hello to ReactJS</h1>
          <p id="p-hello">You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
          <button id="awesome-btn">Awesome!</button>
        </div>

      </section>


      <section className="icons-container">

        <div className="icons-info">
          <img className="icon-img" src={icon1} alt="icon-img 1" />
          <h3 className="h3-icons">Declarative</h3>
          <p className="p-icons">React makes it painless to create interactive UIs.</p>
        </div>

        <div className="icons-info">
          <img className="icon-img" src={icon2} alt="icon-img 2" />
          <h3 className="h3-icons">Components</h3>
          <p className="p-icons">Build encapsulated components that manage their state.</p>
        </div>

        <div className="icons-info">
          <img className="icon-img" src={icon3} alt="icon-img 3" />
          <h3 className="h3-icons">Single-Way</h3>
          <p className="p-icons">A set of immutable values are passed to the components.</p>
        </div>

        <div className="icons-info">
          <img className="icon-img" src={icon4} alt="icon-img 4" />
          <h3 className="h3-icons">JSX</h3>
          <p className="p-icons">Statiscally-typed, designed to run on modern browers.</p>
        </div>

      </section>


    </div>
  );
}

export default App;
