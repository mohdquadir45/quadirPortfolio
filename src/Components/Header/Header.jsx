import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
// import Image from "./../../assets/S-logo.jpg";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <div className="main_header">
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            {/* <span>
              <img src={Image} alt="logo" />
            </span> */}
            Quadir
          </a>
        </h3>
        <Navbar />
      </header>
      </div>
  );
};
