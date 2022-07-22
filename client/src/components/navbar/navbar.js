import React, { useState } from "react";
import  "./navbar.css";
import Sidebar from "./sidebar/sidebar";
import Backdrop from "./backdrop";

function Navbar({ page }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [top, setTop] = useState(true);

//   useEffect(() => {
//     window.onscroll = () => {
//       window.pageYOffset === 0 ? setTop(false) : setTop(true);
//     };
//   });

  const drawerOpenHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const backdropClickHandler = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerLeft">
          <div className="debsoc">CARBOGO</div>
        </div>
        <div className="headerRight">
          <div className="menuList">
            <div className="menuListItem">
              <a href="/">HOME</a>
            </div>

            <div className="menuListItem">
              <a href="/">EVENT</a>
            </div>

            <div className="menuListItem">
              <a href="/">ABOUT US</a>
            </div>
            <div className="menuListItem">
              <a href="/">ALUMNI</a>
            </div>
          </div>

          <div className="drawerOpener" onClick={drawerOpenHandler}>
            <img src="Images/navIcon.png" alt="navbar icon" />
          </div>
          {sidebarOpen ? <Sidebar state={true} closeHandler={backdropClickHandler}/> : <Sidebar state={false} />}
          {sidebarOpen ? (
            <Backdrop closeHandler={backdropClickHandler} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}


export default Navbar;