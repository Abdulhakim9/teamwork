import React, { useState } from "react";
import img from "../picturesheadfoot/_2243895274448 (2).png";
import img1 from "../picturesheadfoot/Вход (1).png";
import "./header.scss";
import { Link, useLocation } from "react-router";
const Header = () => {
  let { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="">
      <div className="navnav">
      <img src={img} className="img" alt="" />
        <nav className="navbar">
          <div className="navbar__header">
            <span className="navbar__toggle" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="navbar__icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </div>
          <ul
            className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}
          >
            <div className="flexdiv">
              <div className="">
                <Link
                  to={"/"}
                  style={
                    pathname === "/"
                      ? { backgroundColor: "2px solid black" }
                      : { backgroundColor: "2px solid blue" }
                  }
                >
                  <img src={img} className="imgs" alt="" />
                </Link>
              </div>
              <div className="div2">
                <Link
                  to={"/anush"}
                  style={
                    pathname === "/anush"
                      ? { backgroundColor: "2px solid black" }
                      : { backgroundColor: "2px solid black" }
                  }
                >
                  <p className="">Как покупать</p>
                </Link>
                <Link
                  to={"/murodbek"}
                  style={
                    pathname === "/murodbek"
                      ? { backgroundColor: "2px solid black" }
                      : { backgroundColor: "2px solid black" }
                  }
                >
                  <p className="">Распродажи</p>
                </Link>
                <Link
                  to={"/safar"}
                  style={
                    pathname === "/safar"
                      ? { backgroundColor: "2px solid black" }
                      : { backgroundColor: "2px solid black" }
                  }
                >
                  <p className="">Цены</p>
                </Link>
                <Link
                  to={"/abdulhakim"}
                  style={
                    pathname === "/abdulhakim"
                      ? { backgroundColor: "2px solid black" }
                      : { backgroundColor: "2px solid black" }
                  }
                >
                  <p className="">Помощь</p>
                </Link>
                <Link
                  to={"/shuhrat"}
                  style={
                    pathname === "/shuhrat"
                      ? { backgroundColor: "2px solid black" }
                      : { backgroundColor: "2px solid black" }
                  }
                >
                  <p className="">Бонусы</p>
                </Link>
                <Link
                  to={"/kholid"}
                  style={
                    pathname === "/kholid"
                      ? { backgroundColor: "2px solid black" }
                      : { backgroundColor: "2px solid black" }
                  }
                >
                  <p className="blog">Блог</p>
                </Link>
                <Link
                  to={"/usmon"}
                  style={
                    pathname === "/usmon"
                      ? { backgroundColor: "2px solid black" }
                      : { backgroundColor: "2px solid black" }
                  }
                >
                  <p className="">Магазины</p>
                </Link>
              </div>
            </div>
          </ul>
        </nav>
      </div>
      <div className="divall">
        <div className="">
          <Link
            to={"/"}
            style={
              pathname === "/"
                ? { backgroundColor: "2px solid black" }
                : { backgroundColor: "2px solid blue" }
            }
          >
            <img src={img} className="" alt="" />
          </Link>
        </div>
        <div className="divall2">
          <div className="div2">
            <Link
              to={"/anush"}
              style={
                pathname === "/anush"
                  ? { backgroundColor: "2px solid black" }
                  : { backgroundColor: "2px solid black" }
              }
            >
              <p className="">Как покупать</p>
            </Link>
            <Link
              to={"/murodbek"}
              style={
                pathname === "/murodbek"
                  ? { backgroundColor: "2px solid black" }
                  : { backgroundColor: "2px solid black" }
              }
            >
              <p className="">Распродажи</p>
            </Link>
            <Link
              to={"/safar"}
              style={
                pathname === "/safar"
                  ? { backgroundColor: "2px solid black" }
                  : { backgroundColor: "2px solid black" }
              }
            >
              <p className="">Цены</p>
            </Link>
            <Link
              to={"/abdulhakim"}
              style={
                pathname === "/abdulhakim"
                  ? { backgroundColor: "2px solid black" }
                  : { backgroundColor: "2px solid black" }
              }
            >
              <p className="">Помощь</p>
            </Link>
            <Link
              to={"/shuhrat"}
              style={
                pathname === "/shuhrat"
                  ? { backgroundColor: "2px solid black" }
                  : { backgroundColor: "2px solid black" }
              }
            >
              <p className="">Бонусы</p>
            </Link>
            <Link
              to={"/kholid"}
              style={
                pathname === "/kholid"
                  ? { backgroundColor: "2px solid black" }
                  : { backgroundColor: "2px solid black" }
              }
            >
              <p className="blog">Блог</p>
            </Link>
            <Link
              to={"/usmon"}
              style={
                pathname === "/usmon"
                  ? { backgroundColor: "2px solid black" }
                  : { backgroundColor: "2px solid black" }
              }
            >
              <p className="">Магазины</p>
            </Link>
          </div>
          <div className="div3">
            <img src={img1} alt="" />
            <button className="btnheader">Связаться с нами</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
