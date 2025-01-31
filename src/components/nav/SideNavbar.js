/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography } from "@material-ui/core";
import { useState, useEffect } from "react";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#works", label: "Projets" },
    { href: "#courses", label: "Formations" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {isDesktop ? (
        <nav className="navDesktop">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={`${
              activeNav === "#"
                ? "active dark:text-[#ec704c]"
                : "dark:text-white"
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
      ) : (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md">
          {/* Bouton Hamburger (caché si le menu est ouvert) */}
          <button
            onClick={toggleDrawer}
            type="button"
            className={`absolute top-6 right-6  ${
              mobileOpen ? "hidden" : "block"
            }`}
            aria-controls="navbar-hamburger"
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Menu Mobile */}
          <div
            className={`fixed top-0 right-0 w-[300px] h-screen bg-white/70 backdrop-blur-lg p-5 shadow-lg transition-transform duration-300 ease-in-out ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Bouton de fermeture "✖" */}
            <button
              onClick={toggleDrawer}
              className="absolute top-4 right-6 text-3xl text-white"
            >
              ✖
            </button>

            <ul className="flex flex-col font-medium mt-10 space-y-4">
              {[
                { href: "#", label: "Accueil" },
                { href: "#about", label: "À propos" },
                { href: "#skills", label: "Compétences" },
                { href: "#works", label: "Projets" },
                { href: "#courses", label: "Formations" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveNav(link.href);
                      toggleDrawer();
                    }}
                    className={`${
                      activeNav === link.href
                        ? "active dark:text-[#ec704c]"
                        : "dark:text-white"
                    } dark:hover:text-[#ec704c]`}
                  >
                    <Typography>{link.label}</Typography>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};
