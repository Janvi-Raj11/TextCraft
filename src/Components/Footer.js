import React from "react";

export default function Footer(props) {
  const isDarkMode = props.mode === "dark";

  return (
    <>
      <style>
        {`
          a.github-link {
            text-decoration: none; /* no underline by default */
          }

          .github-username:hover {
            text-decoration: underline; /* underline only on hover */
          }
        `}
      </style>

      <footer
        className="py-4 text-center mt-auto"
        style={{
          backgroundColor: isDarkMode ? "#12151b" : "#f8f9fa",
          color: isDarkMode ? "#d1d5db" : "#212529",
        }}
      >
        <div className="container">
          <p className="mb-1">
            © 2025 <strong>Janvi Raj</strong>. All rights reserved.
          </p>

          <a
            href="https://github.com/Janvi-Raj11"
            target="_blank"
            rel="noopener noreferrer"
            className={`github-link d-inline-flex align-items-center gap-1 ${isDarkMode ? "text-light" : "text-dark"}`}
            aria-label="Visit Janvi Raj's GitHub profile"
          >
            <i className="fab fa-github"></i>
            <span className="github-username">@Janvi-Raj11</span>
          </a>
        </div>
      </footer>
    </>
  );
}
