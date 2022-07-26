import PropTypes from "prop-types";
import  "./sidebar.css";

function Sidebar({ state, closeHandler }) {
  return (
    <>
    {state ? (
    <div className="sidebar">
      <div className="sidebarDrawer">
        <div className="cross">
          <img src="Images/cross.png" alt="" onClick={closeHandler} />
        </div>
        <div className="menulist">
          <div className="menulistItem">
            <a href="/">HOME</a>
          </div>

          <div className="menulistItem">
            <a href="/">EVENT</a>
          </div>

          <div className="menulistItem">
            <a href="/">ABOUT US</a>
          </div>

          <div className="menulistItem">
            <a href="/">ALUMNI</a>
          </div>
        </div>
      </div>
    </div>
    ) : (
        <></>
      )}
      </>
  );
  
}

Sidebar.propTypes = {
    state: PropTypes.bool,
  };
  
export default Sidebar;