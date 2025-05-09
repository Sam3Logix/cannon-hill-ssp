import './style/header.css';
// import './style/header-bayside.css';
// import logo from './img/bayside-logo.png';
import logo from './img/3lgx-swirl-logo.png';

function Header() {
  return (
    <header>
      <span id="version">v0.4.1011</span>
      <h1>Cannon <span id="white">Hill</span></h1>
      {/* <h1>Bayside Council</h1> */}
      <img src={logo}></img>
    </header>
  );
}

export default Header;
