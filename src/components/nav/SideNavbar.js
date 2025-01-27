/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={`${
          activeNav === "#" ? "active dark:text-[#ec704c]" : "dark:text-white"
        } dark:hover:text-[#ec704c]`}
      >
        <Typography>Accueil</Typography>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={`${
          activeNav === "#about"
            ? "active dark:text-[#ec704c]"
            : "dark:text-white"
        } dark:hover:text-[#ec704c]`}
      >
        <Typography>A propos</Typography>
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={`${
          activeNav === "#skills"
            ? "active dark:text-[#ec704c]"
            : "dark:text-white"
        } dark:hover:text-[#ec704c]`}
      >
        <Typography>Compétences</Typography>
      </a>
      <a
        href="#works"
        onClick={() => setActiveNav("#works")}
        className={`${
          activeNav === "#works"
            ? "active dark:text-[#ec704c]"
            : "dark:text-white"
        } dark:hover:text-[#ec704c]`}
      >
        <Typography>Projets</Typography>
      </a>
      <a
        href="#courses"
        onClick={() => setActiveNav("#courses")}
        className={`${
          activeNav === "#courses"
            ? "active dark:text-[#ec704c]"
            : "dark:text-white"
        } dark:hover:text-[#ec704c]`}
      >
        <Typography>Formations</Typography>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`${
          activeNav === "#contact"
            ? "active dark:text-[#ec704c]"
            : "dark:text-white"
        } dark:hover:text-[#ec704c]`}
      >
        <Typography>Contact</Typography>
      </a>
    </nav>
  );
};
