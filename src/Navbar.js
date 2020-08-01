import React, { useEffect, useState } from "react";
import "./nav.css";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scroll > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://img.icons8.com/color/48/000000/netflix.png"
        className="nav_logo_1"
        alt="NETFLIX CLONE"
      />
      {/* <img
        src="https://img.icons8.com/plasticine/100/000000/face-id.png"
        className="nav_logo_2"
        alt="PROFILE"
      /> */}
    </div>
  );
}
