import { useEffect, useState } from "react";
import $ from "jquery";

const Navigation: React.FC = () => {
  const [navbarClassName, setNavbarClassName] = useState<string>("");

  useEffect(() => {
    const navbarCollapse = () => {
      if (window.scrollY > 100) {
        setNavbarClassName("navbar-scrolled");
      } else {
        setNavbarClassName("");
      }
    };
    navbarCollapse();
    window.addEventListener("scroll", navbarCollapse);
    return () => {
      window.removeEventListener("scroll", navbarCollapse);
    };
  }, []);

  useEffect(() => {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on(
      "click",
      function () {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          let target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html, body").animate(
              {
                scrollTop: target.offset().top - 72,
              },
              1000
            );
            return false;
          }
        }
      }
    );

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").on("click", () => {
      $(".navbar-collapse").removeClass("show");
    });
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${navbarClassName}`}
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#root">
          Portfolio
        </a>
        <a
          className="navbar-brand js-scroll-trigger"
          href="https://drive.google.com/file/d/1c7ZWhsJCc9HgQJDQB-AfHj8iBx0eVtAo/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experiences">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
