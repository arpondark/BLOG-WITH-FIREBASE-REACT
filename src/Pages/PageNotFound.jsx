import React from "react";
import { Link } from "react-router-dom";
import useTitle from './../Hooks/useTitle';

const PageNotFound = () => {
  useTitle("404 Not Found");
  return (
    <section className="pageNotFound">
      <h1>
        <p>404 Page Not Found!!!!!!!!!!!!</p>
      </h1>
      <h2>
        <Link to="/">
          <button> Back To Home</button>
        </Link>
      </h2>
    </section>
  );
};

export default PageNotFound;
