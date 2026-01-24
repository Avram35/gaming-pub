import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = ({ menu, setMenu, setLoginShow }) => {
  const { pathname } = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (pathname === "/") setMenu("pocetna");
    else if (pathname === "/igre") setMenu("igre");
    else if (pathname === "/rezervacija") setMenu("rezervacija");
    else if (pathname === "/cene") setMenu("cene");
    else if (pathname === "/onama") setMenu("onama");

    setOpenMenu(false);
  }, [pathname]);
  return (
    <div className="navbar">
      <Link to="/" className="logo-tekst-navbar">
        Avram35
      </Link>
      <ul className={`navbar-menu ${openMenu ? "open" : ""}`}>
        <li>
          <Link to="/" className={menu === "pocetna" ? "active" : ""}>
            Pocetna
          </Link>
        </li>
        <li>
          <Link to="/igre" className={menu === "igre" ? "active" : ""}>
            Igre
          </Link>
        </li>
        <li>
          <Link
            to="/rezervacija"
            className={menu === "rezervacija" ? "active" : ""}
          >
            Rezervacija
          </Link>
        </li>
        <li>
          <Link to="/cene" className={menu === "cene" ? "active" : ""}>
            Cene
          </Link>
        </li>
        <li>
          <Link to="/onama" className={menu === "onama" ? "active" : ""}>
            O nama
          </Link>
        </li>
      </ul>
      {openMenu ? (
        <img
          src={assets.close}
          alt=""
          onClick={() => setOpenMenu(false)}
          className="close-icon"
        />
      ) : (
        <img
          src={assets.more}
          alt=""
          className="menu-icon"
          onClick={() => setOpenMenu((prev) => !prev)}
        />
      )}

      <div className="navbar-right">
        <Link>
          {/*<img src={assets.person} alt="" className="profile-icon" />*/}
          <button onClick={() => setLoginShow(true)}>Registruj se</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
