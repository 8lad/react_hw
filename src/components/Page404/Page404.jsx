import React from "react";
import { Link } from "react-router-dom";
import "./Page404.scss";
const Page404 = () => {
  return (
    <div className="page404">
      <h1>Page 404</h1>
      <h2>It's strange, but this page doesn't exist</h2>
      <Link to="/">Go to the main page</Link>
    </div>
  );
};

export default Page404;
