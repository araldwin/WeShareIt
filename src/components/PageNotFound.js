import React from "react";
import styles from "../styles/NotFound.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function PageNotFound() {
  return (
    <div className={`${styles.pageNotFound}`}>
      <h1 className={`${styles.title}`}>404 - Page Not Found</h1>
      <p className={`${styles.message}`}>
        The page you are looking for might have been removed or doesn't exist.
      </p>
      <Link to={"/"}>Click here to return to the Homepage</Link>
    </div>
  );
}

export default PageNotFound;
