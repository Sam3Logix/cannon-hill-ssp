import './style/sidemenu.css';

function SideMenu() {
  function handleClick(e) {
    const clickedElement = e.target;
    const pagesList = e.target.parentElement;
    const activeElement = document.getElementById("active");
    console.log("Clicked:", clickedElement);
    console.log("Parent:", pagesList);
    console.log("Active", activeElement);

    // activeElement.removeAttribute("active");
    // clickedElement.setAttribute("id", "active");
    
    
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
