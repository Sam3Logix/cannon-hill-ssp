import './style/header.css';
import logo from './img/3lgx-swirl-logo.png';

function Header() {
  return (
    <header>
      <span id="version">v0.3.1</span>
      <h1>Cannon <span id="white">Hill</span></h1>
      <img src={logo}></img>
    </header>
  );
}

export default Header;
