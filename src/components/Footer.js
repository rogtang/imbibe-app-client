import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="app-footer">
      <a
        href="https://github.com/rogtang"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          alt="github logo"
          className="social"
        />
      </a>
      <a
        href="mailto:rogtang@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://image.flaticon.com/icons/svg/732/732200.svg"
          alt="email icon"
          className="social"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/rogtang"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://image.flaticon.com/icons/svg/49/49068.svg"
          alt="linked-in logo"
          className="social"
        />
      </a>
      <div className="footer-credit">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{" "} and 
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        {" "} Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
