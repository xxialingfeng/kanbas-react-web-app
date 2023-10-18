import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from './LOGO.png'
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTachometerAlt,
  faBook,
  faCalendar,
  faInbox,
  faHistory,
  faDesktop,
  faShareAltSquare,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

function KanbasNavigation() {
  const links = [
    { text: "Account", icon: faUser },
    { text: "Dashboard", icon: faTachometerAlt },
    { text: "Courses", icon: faBook },
    { text: "Calendar", icon: faCalendar },
    { text: "Inbox", icon: faInbox },
    { text: "History", icon: faHistory },
    { text: "Studio", icon: faDesktop },
    { text: "Comments", icon: faShareAltSquare },
    { text: "Help", icon: faInfoCircle },
  ];

  const { pathname } = useLocation();
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

  useEffect(() => {
    if (initialized) {
      if (pathname.includes('Courses')) {
        setSelectedItem('Courses');
      } else {
        setSelectedItem('Dashboard');
      }
    }
  }, [initialized, pathname]);

  return (
    <div className="list-group wd-bg-black" style={{ width: 80, backgroundColor: "black", borderRadius: 0 }}>
      <li style={{ backgroundColor: "black", width: 80, border: "0cm", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
        <img src={logo} alt="Logo" className="navbar-logo" style={{ width: 75, height: 50, }} />
      </li>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.text}`}
          className={`list-group-item ${pathname.includes(link.text) && "active"} wd-center wd-bg-black`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: selectedItem === link.text ? "white" : "black",
            borderColor: selectedItem === link.text ? "white" : "black",
            color: selectedItem === link.text ? "red" : "white",
          }}
        >
          <FontAwesomeIcon icon={link.icon} className={`nav-icon ${link.text === "Account" ? "iconAccount" : ""}`} style={{ fontSize: "20px", color: "#B22222" }} />
          <span className={`${link.text === "Account" ? "textAccount" : ""}`} style={{ fontSize: "14px", color: selectedItem === link.text ? "#B22222" : "white", fontFamily: "Verdana, Arial, Helvetica, sans-serif;" }}>{link.text}</span>
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;
