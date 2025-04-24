import './style/sidemenu.css';

function SideMenu() {
  function handleClick(e) {
    const clickedElement = e.target;
    const pagesList = e.target.parentElement;
    const activeElement = document.getElementById("active");
    console.log("Clicked:", clickedElement);
    console.log("Parent:", pagesList);
    console.log("Active", activeElement);

    activeElement.removeAttribute("id");
    clickedElement.setAttribute("id", "active");
    
    if (clickedElement.classList.contains("api-demo-select")) {
      console.log("Showing API demo...");
      
    }
    
  }

  return (
    <div id="sidemenu">
      <h1>Pages</h1>
      <ul>
        <li id="active" className="property-search-select" onClick={handleClick}>Property Search</li>
        <li className="api-demo-select" onClick={handleClick}>API Demonstration</li>
        <li className="info-select" onClick={handleClick}>Info</li>
      </ul>
    </div>
  );
}



export default SideMenu;
