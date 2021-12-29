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
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
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
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-email-advertising-kiranshastry-solid-kiranshastry-1.png"
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
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
          alt="linked-in logo"
          className="social"
        />
      </a>
      <div className="footer-credit">
        Icons made by{" "}
        <a
          href="https://www.github.com/"
          title="Github"
        >
          GitHub
        </a>{" "}, {" "}
        <a href="https://icons8.com/icon/P0tX6ToLZPNj/email">Email icon by Icons8</a>{" "}
        and {" "}
        <a href="https://www.linkedin.com/" title="linkedin">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
