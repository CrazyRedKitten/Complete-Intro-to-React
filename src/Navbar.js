import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Navbar = () => {
  return (
    <header
      css={css`
        background-color: #333;
        padding: 15px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span role="img" aria-label="logo">
        🐶
      </span>
    </header>
  );
};

export default Navbar;
