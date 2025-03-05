import './style/sidemenu.css';

function SideMenu() {
  function handleClick(e) {
    const clickedElement = e.target;
    const pagesList = e.target.parentElement;
    console.log(clickedElement);
  }

  return (
    <div id="sidemenu">
      <h1>Pages</h1>
      <ul>
        <li id="active" onClick={handleClick}>Property Search</li>
        <li onClick={handleClick}>API Demonstration</li>
        <li onClick={handleClick}>Info</li>
      </ul>
    </div>
  );
}



export default SideMenu;
