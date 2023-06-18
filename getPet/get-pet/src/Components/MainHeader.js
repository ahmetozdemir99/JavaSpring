import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { useState } from "react";
import NotificationsBar from "./NotificationsBar";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState("");

  const toggleComponent = (id) => {
    if (isOpen === id) {
      setIsOpen("");
    } else {
      setIsOpen(id);
    }
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const menuClass = `${classes.menuButton} ${!showNavBar ? "" : classes.top}`;

  const loginChangeHandler = () => {
    setLoggedIn(true);
  };

  const notificationHandler = () => {
    setShowNotifications(!showNotifications);
  };
  const navMenuHandler = () => {
    setShowNavBar(!showNavBar);
  };
  return (
    <div className={classes.mainContainer}>
      <header className={classes.header}>
        <div className={classes.imgContainer}>
          <img
            className={classes.logoImg}
            alt="logo img"
            src={require("../images/578abc 1.png")}
          />
        </div>

        <Link to="/" className={classes.heading}>
          GetPet
        </Link>
        <div className={classes.navContainer}>
          {/* <Link to="/create-post" className={classes.button}>
            New Post
          </Link> */}
          <button
            className={classes.noftificationButton}
            onClick={notificationHandler}
          >
            <img
              className={classes.navImg}
              src={require("../images/bell.png")}
            />
          </button>
          <Link
            to={loggedIn ? "./profile" : "./login"}
            className={classes.navButton}
          >
            <img
              className={classes.navImg}
              src={require("../images/profile.png")}
            />
            <p className={classes.signIn}>Log in</p>
          </Link>
        </div>
      </header>
      <NotificationsBar show={showNotifications} />
    </div>
  );
};
export default MainHeader;
