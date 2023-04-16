"use client";

import { useState } from "react";

export default function ToggleTheme() {
  const [isDark, setDark] = useState(true);

  function toggleTheme() {
    if (isDark) {
      document.body.classList.remove("theme-dark");
    } else {
      document.body.classList.add("theme-dark");
    }

    setDark(document.body.classList.contains("theme-dark"));
  }

  const toggleThemeElement = isDark ? (
    <div>
      <button
        onClick={toggleTheme}
        className="button is-only-icon is-text"
        aria-label="Replace to Dark Mode Theme"
      >
        <span className="icon-sun" aria-hidden="true" />
      </button>
    </div>
  ) : (
    <button
      onClick={toggleTheme}
      className="button is-only-icon is-text"
      aria-label="Replace to Light Mode Theme"
    >
      <span className="icon-moon" aria-hidden="true" />
    </button>
  );

  return (
    <li className="buttons-list-item u-padding-inline-0">
      <div>{toggleThemeElement}</div>
    </li>
  );
}
