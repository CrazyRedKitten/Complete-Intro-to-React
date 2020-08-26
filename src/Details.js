import React from "react";
import { Router, Link } from "@reach/router";

const Details = (props) => {
  //DEBUG
  // <pre>
  //   <code>{JSON.stringify(props, null, 4)}</code>
  // </pre>
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};

export default Details;
