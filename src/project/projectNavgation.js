import React from 'react';
import { Link, useLocation } from "react-router-dom";


function KanbasNavigation() {
  const links = [
    { text: "home",},
    { text: "search",  },
    { text: "signin", },
    { text: "Signup", },
    { text: "account", },
  ];

  const { pathname } = useLocation();

  return (
    <div className="list-group" style={{width: 90, borderRadius: 0 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/${link.text}`}
          className={`list-group-item ${pathname.includes(link.text) && "active"} wd-center wd-bg-black`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "white",

          }}
        >
          <span style={{ fontSize: "14px", color: "black", fontFamily: "Verdana, Arial, Helvetica, sans-serif;" }}>{link.text}</span>
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;
