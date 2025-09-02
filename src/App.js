import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import gsap from "gsap";
import "./style.css";
import "remixicon/fonts/remixicon.css";
import Reviewcode from "./components/review_code";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const navMenu = document.getElementById("nav_menu");
    const toggleBtn = document.getElementById("toggle_btn");
    const closeBtn = document.getElementById("close_btn");

    toggleBtn.addEventListener("click", () => {
      navMenu.classList.add("show");
      // gsap.fromTo(
      //   navMenu,
      //   { x: 200, opacity: 0 },
      //   { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      // );
    });

    closeBtn.addEventListener("click", () => {
      gsap.to(navMenu, {
        x: 200,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => navMenu.classList.remove("show"),
      });
    });

    // gsap.from(".logo", { y: -10, delay: 1, duration: 0.7 });
    // gsap.from(".nav_menu_list .nav_menu_item", {
    //   // opacity: 100,
    //   y: -10,
    //   delay: 1.4,
    //   duration: 0.5,
    //   stagger: 0.3,
    // });
    // gsap.from(".toggle_btn", {
    //   // opacity: 100,
    //   y: -10,
    //   delay: 1.6,
    //   duration: 0.7,
    // });
    // gsap.from(".main-heading", {
    //   // opacity: 100,
    //   y: 20,
    //   delay: 1.4,
    //   duration: 1,
    // });
    // gsap.from(".grid-col-item", { y: 15, delay: 4, duration: 1 });
    // gsap.from(".btn_wrapper", { y: 20, delay: 2.8, duration: 1 });
  }, []);

  return (
    <div className="container header">
      <nav className="nav">
        <div className="logo">
          <h2>CodeStock</h2>
        </div>

        <div className="nav_menu" id="nav_menu">
          <button className="close_btn" id="close_btn">
            <i className="ri-close-fill"></i>
          </button>

          <ul className="nav_menu_list">
            {/* <li className="nav_menu_item">
              <a href="#" className="nav_menu_link">
                account
              </a>
            </li> */}
            {/* <li className="nav_menu_item">
              <a href="#" className="nav_menu_link">
                about
              </a>
            </li> */}
            <li className="nav_menu_item">
              <Link to="/review" className="nav_menu_link">
                Review Code
              </Link>
            </li>
            <li className="nav_menu_item">
              <a href="/" className="nav_menu_link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <button className="toggle_btn" id="toggle_btn">
          <i className="ri-menu-line"></i>
        </button>
      </nav>

      <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div className="grid-item-1">
              <h1 className="main-heading">
                Welcome to{" "}
                <span>
                  <b>
                    <h3>CodeStock</h3>
                  </b>
                </span>
              </h1>

              <div className="btn_wrapper">
                <button
                  className="btn view_more_btn"
                  onClick={() => navigate("/review")}
                >
                  Review Code <i className="ri-arrow-right-line"></i>
                </button>

                {/* <button className="btn documentation_btn">documentation</button> */}
              </div>
            </div>
            <div className="grid-item-2"></div>
          </div>
        </div>
      </section>

      <section className="wrapper">
        <div className="container">
          <div className="grid-cols-3">
            <div className="grid-col-item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="featured_info">
                <span className="title">Built for developers</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore ratione facilis animi voluptas exercitationem
                  molestiae.
                </p>
              </div>
            </div>

            <div className="grid-col-item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="featured_info">
                <span className="title">Designed to be modern</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  ipsum esse corrupti. Quo, labore debitis!
                </p>
              </div>
            </div>

            <div className="grid-col-item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div className="featured_info">
                <span className="title">Explanation for the part</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nostrum voluptate totam ipsa corrupti vero!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer></footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Reviewcode />} />
      </Routes>
    </Router>
  );
}

export default App;
